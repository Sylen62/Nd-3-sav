class FurnitureGridComponent {
	constructor() {
		this.state = {
			furniture: [],
			loading: false,
		};

		this.initialize();
	}

	getFurniture = () => {
		this.state.loading = true;
		API.getFurniture(
			(furniture) => {
				this.state.furniture = furniture;
				this.state.loading = false;
				this.render();
			},
			(error) => console.error(error)
		);
	};

	deleteFurniture = (id) => {
		this.state.loading = true;
		this.render();
		API.deleteFurnitureById(
			() =>
				API.getFurniture(
					(furniture) => {
						this.state.furniture = furniture;
						this.state.loading = false;
						this.render();
					},
					(error) => console.error(error)
				),
			(error) => console.error(error),
			id
		);
	};

	initialize = () => {
		this.getFurniture();
		this.htmlElement = document.createElement('div');

		this.render();
	};

	render = () => {
		const { loading } = this.state;
		if (loading) {
			this.htmlElement.className = '';
			this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
		} else {
			this.htmlElement.className = 'card-grid';
			this.htmlElement.innerHTML = '';
			this.state.furniture.forEach((furniture) => {
				const tempCard = new FurnitureCardComponent({
					data: furniture,
					onDelete: this.deleteFurniture,
				});
				this.htmlElement.appendChild(tempCard.htmlElement);
			});
		}
	};
}
