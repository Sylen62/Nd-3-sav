class FurnitureGridComponent {
	constructor() {
		this.state = {
			furniture: [],
		};

		this.initialize();
	}

	getFurniture = () => {
		API.getFurniture(
			(furniture) => {
				this.state.furniture = furniture;
				console.log(this.state.furniture);
			},
			(error) => console.error(error)
		);
	};

	initialize = () => {
		this.getFurniture();
	};
}
