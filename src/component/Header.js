import React from "react";
let image = "rutval.png";
let github = "github.png";
export default function Header() {
  return (
    <>
      <div className="headerSec">
        <div className="infoParaInHeader">
          <h6>Hello, It's Me</h6>
          <h4>
            <strong>Rutval Thonge</strong>
          </h4>
          <h3>Web Developer | Android Developer | iOS Developer</h3>
          <p>
            I'm an Information Technology (IT) student from the Progressive
            Education Socitey's, Modern Collage of Engineering,Pune Passinate
            about learning new things in IT field and Keeping myself updated for
            rapid change.
          </p>
          <div className="socialLinks">
            <a href="https://github.com/rutvalthonge4312" target="_blank">
              <img src={github} alt="" />
            </a>
            <a href="https://www.facebook.com/rutval.thonge" target="_blank">
              <img
                src="https://rutvalthonge4312.github.io/RutvalPortFolio/Images/pngwing.com%20(2).png"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/rutu_thonge_4312/"
              target="_blank"
            >
              <img
                src="https://rutvalthonge4312.github.io/RutvalPortFolio/Images/pngwing.com%20(3).png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rutval-thonge-89b761232/"
              target="_blank"
            >
              <img
                src="https://rutvalthonge4312.github.io/RutvalPortFolio/Images/pngwing.com%20(5).png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="imageSecInHeader">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}
