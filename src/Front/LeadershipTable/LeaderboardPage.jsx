import React, { useState, useEffect } from 'react';

const TournamentTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    // Припустимо, що ви використовуєте axios
    axios.get('https://apteka911.nezalezhnist.fun/api')
      .then(response => {
        const sortedData = response.data.sort((a, b) => b.score - a.score);
        setData(sortedData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Бали</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.phone}>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array(Math.ceil(data.length / itemsPerPage)).fill().map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TournamentTable;
