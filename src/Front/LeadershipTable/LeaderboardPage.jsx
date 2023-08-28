import React, { useState, useEffect } from 'react';
import jsonData from '../UserInfo/cleaned_data.json';  // Адаптуйте шлях до вашого JSON файлу
import './leadershipTable.scss';

const TournamentTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Створимо копію наших даних, щоб працювати з нею
    let dataCopy = [...jsonData];
    
    // Відсортуємо за телефоном
    dataCopy.sort((a, b) => a.phone.localeCompare(b.phone));

    const filteredData = [];

    for (let i = 0; i < dataCopy.length; i++) {
      if (i === 0 || dataCopy[i].phone !== dataCopy[i - 1].phone) {
        filteredData.push(dataCopy[i]);
      } else if (dataCopy[i].score > dataCopy[i - 1].score) {
        filteredData[filteredData.length - 1] = dataCopy[i];
      }
    }

    // Зараз можемо відсортувати за score
    const sortedData = filteredData.sort((a, b) => b.score - a.score);
    setData(sortedData);
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);
  const pagesCount = Math.ceil(data.length / itemsPerPage);
  const maxVisiblePages = 3;  // Змінюємо кількість відображаємих сторінок на 3

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(pagesCount, currentPage + Math.floor(maxVisiblePages / 2));
  

  return (
    <div className='final-results-table'>
      <h1> Мозаїка Незалежності</h1>
      <h2>фарм-погляд</h2>
      <h3>Турнірна таблиця</h3> 
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Телефон</th>
            <th>Бали</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.phone}>
              <td>{item.name}</td>
              <td>{item.phone.length >= 4 
        ? '*'.repeat(item.phone.length - 4) + item.phone.slice(-4) 
        : item.phone}</td>              
        <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>«</button>
        
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(page => (
            <button key={page} onClick={() => setCurrentPage(page)} className={currentPage === page ? 'active' : ''}>
                {page}
            </button>
        ))}
        
        <button onClick={() => setCurrentPage(Math.min(pagesCount, currentPage + 1))}>»</button>
    </div>
    </div>
  );
};

export default TournamentTable;
