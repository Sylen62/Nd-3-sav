const rootElement = document.querySelector('#root');

const furnitureGridComponent = new FurnitureGridComponent();
rootElement.appendChild(furnitureGridComponent.htmlElement);

// API.getFurniture(
// 	(furniture) => console.log(furniture),
// 	(error) => console.error(error)
// );

// API.deleteFurnitureById(
// 	() =>
// 		API.getFurniture(
// 			(furniture) => console.log(furniture),
// 			(error) => console.error(error)
// 		),
// 	(error) => console.error(error),
// 	3
// );
