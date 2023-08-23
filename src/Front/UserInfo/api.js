const baseUrl = 'https://63b4368c9f50390584aa3bd2.mockapi.io/ToDoList';

export const submitUserData = async (userData) => {
  try {
    const response = await fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
    console.log('Data submitted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};

export const fetchUserData = () => {
	return fetch(baseUrl).then((resp) => {
		if (resp.ok) {
			return resp.json();
		} else {
			throw new Error('Failed to load events');
		}
	});
};

export const updateUserData = (userID, userData) => {
	return fetch(`${baseUrl}/${userID}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to update user data');
		}
	});
};

export const deleteUserData = (userID) => {
	return fetch(`${baseUrl}/${userID}`, {
		method: 'DELETE',
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to delete user data');
		}
	});
};