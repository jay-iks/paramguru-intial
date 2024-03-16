// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import Card from "react-bootstrap/Card";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const styleplay = {
//   color: "white",
//   backgroundColor: "#CFAE78",
//   width: "25px",
//   aspectRatio: 1.45,
//   borderRadius: "50%",
//   padding: "10px",
// };

// function BasicExample({ title, description, imageSrc }) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={imageSrc} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <FontAwesomeIcon style={styleplay} icon={faPlay} />
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;

// BasicExample.js
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import "../../Detailpage/Component_css/BasicExample.css";

function BasicExample({ title, description, imageSrc }) {
  return (
    <div className="card34">
      <img className="card-image" src={imageSrc} alt={title} />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
        <div className="play-button1"><FontAwesomeIcon icon={faPlay} /></div>
      </div>
      
    </div>
  );
}

export default BasicExample;
