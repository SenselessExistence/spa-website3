import "./services.css";

function Services() {
  return (
        <div id="services">
          <div className="container">
            <div className="title-container">
            <h2> Flooring Professionals </h2>
            <h3> At Leonov Flooring we know how much a good-looking floor matters. We can to help you transform your home with our professional installation services. </h3>
            </div>
            <div className="box-container">
              <div className="box">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <h3> Variety of Floor Types </h3>
                <span> We work with all kinds of floors, except carpet. Whether you're looking for a tile, wood or laminate floor - we got you covered. </span>
              </div>
              <div className="box">
                <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3> Experienced Installers </h3>
                <span> Our installers are industry professionals with over 10 years of experience, covering over 50,000 sqft every year! </span>
              </div>
              <div className="box">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              </div>
              <h3> Design Advice </h3>
              <span> Choosing your perfect flooring is not as easy task. We can guide you on your path to the perfect floor. </span>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Services;
