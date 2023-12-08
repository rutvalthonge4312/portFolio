import React from "react";

export default function Navbar() {
  const handleClick = (param) => {
    let divEle = document.getElementsByClassName(param);

    if (divEle.length > 0) {
      divEle[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg s">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleClick("aboutMe")}>
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleClick("skills")}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleClick("projects")}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
