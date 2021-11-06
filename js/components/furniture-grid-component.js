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
		setTimeout(() => {
			API.getFurniture(
				(furniture) => {
					this.state.furniture = furniture;
					this.state.loading = false;
					this.render();
					console.log(this.state.furniture);
				},
				(error) => console.error(error)
			);
		}, 1000);
	};

	initialize = () => {
		this.getFurniture();
		this.htmlElement = document.createElement('div');
		this.render();
	};

	render = () => {
		const { loading } = this.state;
		if (loading) {
			this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
		} else {
			this.htmlElement.innerHTML = '';
		}
	};
}
