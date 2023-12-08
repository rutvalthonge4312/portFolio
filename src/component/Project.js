import React from "react";
let cafeImage = "cafeIamge.avif";
let gymImage = "gym_Image.jpg";
let bankingImage = "bank.jpeg";
let weatherImage = "weather.jpg";

export default function Project() {
  return (
    <div className="projects">
      <h4>
        <strong>Latest</strong> Projects
      </h4>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={gymImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Health Fit Gym Website</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button className="btn">
                <a
                  href="https://rutvalthonge4312.github.io/gymWeb/"
                  target="_blank"
                >
                  Go To Website
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cafeImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Order Food Website</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <button className="btn">
                <a
                  href="https://rutvalthonge4312.github.io/OrderFood/"
                  target="_blank"
                >
                  Go To Website
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bankingImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banking Application with Recharge.</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <button className="btn">
                <a
                  href="https://github.com/rutvalthonge4312/bankingProjectJava"
                  target="_blank"
                >
                  Go To Website
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={weatherImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Weather Website.</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <button className="btn">
                <a
                  href="https://rutvalthonge4312.github.io/weatherForcast/"
                  target="_blank"
                >
                  Go To Website
                </a>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
