const baseUrl = 'http://localhost:3000';

const getFurniture = (success, failure) => {
	fetch(baseUrl + '/furniture')
		.then((response) => response.json())
		.then(success)
		.catch(failure);
};

const deleteFurnitureById = (success, failure, id) => {
	fetch(baseUrl + '/furniture/' + id, { method: 'DELETE' })
		.then(success)
		.catch(failure);
};

const API = {
	getFurniture,
	deleteFurnitureById,
};
