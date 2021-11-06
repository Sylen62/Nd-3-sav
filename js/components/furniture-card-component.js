class FurnitureCardComponent {
	constructor(props) {
		this.props = props;

		this.initialize();
	}

	createCard = () => {
		const { id, title, img, type, price, location, owner } = this.props;
		return `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-center">${title}</h5>
          <div class="d-flex justify-content-evenly">
            <p>Type: ${type}</p>
            <p>Price: ${price} Euro</p>
          </div>
          <div style="box-shadow: 0px 0px 5px 1px #f1f1f1;">
            <ul class="nav nav-pills nav-fill mb-1 row gap-1" id="myTab" role="tablist">
              <li class="col-sm-12 col-md-5 col-lg-5 nav-item" role="presentation">
                <a class="nav-link active"
                  id="location-tab"
                  data-bs-toggle="tab"
                  href="#location${id}"
                  role="tab"
                  aria-controls="location"
                  aria-selected="true"
                  >Location</a
                >
              </li>
              <li class="col-sm-12 col-md-5 col-lg-5 nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="owner-tab"
                  data-bs-toggle="tab"
                  href="#owner${id}"
                  role="tab"
                  aria-controls="owner"
                  aria-selected="false"
                  >Owner</a
                >
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="location${id}" role="tabpanel" aria-labelledby="location-tab">
                <div class="d-flex justify-content-evenly">
                  <p>Country: ${location.country}</p>
                  <p>City: ${location.city} Euro</p>
                  <p>Street: ${location.street}</p>
                </div>
              </div>
              <div class="tab-pane fade" id="owner${id}" role="tabpanel" aria-labelledby="owner-tab">
                <div class="d-flex justify-content-evenly">
                  <p>Fullname: ${owner.fullname}</p>
                  <p>Address: ${owner.address} Euro</p>
                  <p>Mobile: ${owner.mobile}</p>
                  <p>Email: ${owner.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
	};

	initialize = () => {
		console.log(this.props);
		this.htmlElement = document.createElement('div');
		this.htmlElement.className = 'card';

		this.render();
	};

	render = () => {
		this.htmlElement.innerHTML = this.createCard();
	};
}
