class FurnitureCardComponent {
	constructor(props) {
		this.props = props;
		this.initialize();
	}

	createCard = () => {
		const { id, title, img, type, price, location, owner } = this.props.data;
		const card = document.createElement('div');
		card.className = 'row g-o';
		card.innerHTML = `
      <div class="row">
        <div class="col-md-4">
          <img src="${img}" class="img-fluid rounded-start card-img">
        </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="card-top">
           <h4 class="card-title text-center">${title}</h4>
           <button class="btn btn-sm btn-danger btn-card">✕</button>
          </div>
          <div class="d-flex justify-content-evenly">
            <p>Type: ${type}</p>
            <p>Price: ${price} Euro</p>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <h5 class="text-center">Location</h5>
              <p>Country: ${location.country}</p>
              <p>City: ${location.city}</p>
              <p>Street: ${location.street}</p>
            </div>
            <div>
              <h5 class="text-center">Owner</h5>
                <p>Fullname: ${owner.fullname}</p>
                <p>Address: ${owner.address}</p>
                <p>Mobile: ${owner.mobile}</p>
                <p>Email: ${owner.email}</p>
            </div>
         </div>
        </div>
      </div>
    `;

		const btnDelete = card.querySelector('.btn-card');
		btnDelete.addEventListener('click', () => this.props.onDelete(id));

		return card;
	};

	initialize = () => {
		this.htmlElement = document.createElement('div');
		this.htmlElement.className = 'card';

		this.render();
	};

	render = () => {
		this.htmlElement.appendChild(this.createCard());
	};
}
