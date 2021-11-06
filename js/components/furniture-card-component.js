class FurnitureCardComponent {
	constructor(props) {
		this.props = props;

		this.initialize();
	}

	initialize = () => {
		this.htmlElement = document.createElement('div');
		this.htmlElement.className = 'card';
		this.htmlElement.innerHTML = `
		  <div class="card-body">
		    <h5 class="card-title">title</h5>
		  </div>
		`;
	};
}
