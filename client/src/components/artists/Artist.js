import React, { useState } from "react";
import { Button, Card, Container } from "@material-ui/core";
import { Modal, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Artist.css";
import Axios from "axios";

const Artist = ({ artist }) => {
  const {
    _id,
    name,
    age,
    email,
    phone,
    availability,
    rating,
    comments,
    projects,
  } = artist;

  let [showCom, setShowCom] = useState(false);
  let [showproj, setShowProj] = useState(false);

  const deleteArtist = async (e) => {
    e.preventDefault();
    let confirm = prompt(
      "Type 'yes' to confirm deletiion of artist. (this will never be undone)"
    );
    if (confirm === "yes") {
      try {
        await Axios.delete(`/api/artists/${_id}`);
        console.log(_id);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Artist deletion cancelled");
    }
  };

  const showComments = () => {
    setShowCom(!showCom);
  };

  const showProjects = () => {
    setShowProj(!showproj);
  };

  //ARTIST COMPONENT

  return (
    <>
      <Card id="artistCard" variant="outlined">
        {/* <Modal show={showCom} onHide={handleCommentsClose} centered>
          <Modal.Header>
            <Modal.Title>
              {" "}
              <strong>Artist Comments:</strong>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {comments.map((comment) => (
              <ul>
                <li>-"{comment}"</li>
              </ul>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleCommentsClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
        <div className="artistInfo">
          {name && (
            <h4>
              Artist:{" "}
              <span className="userInfo" id="artistName">
                {" "}
                {name}
              </span>
            </h4>
          )}

          {phone && (
            <h5>
              Phone:{" "}
              <span className="userInfo" stle={{ color: "#aa2b33" }}>
                {" "}
                {phone}
              </span>
            </h5>
          )}
        </div>

        <div className="artistDetails">
          {email && (
            <h6>
              Email: <span className="userInfo"> {email}</span>
            </h6>
          )}
          {age && (
            <h6>
              Age: <span className="userInfo"> {age}</span>
            </h6>
          )}
          {availability && (
            <div>
              <h6>
                Availability: <span className="userInfo">{availability} </span>
              </h6>
            </div>
          )}

          {rating && (
            <div>
              <h6>
                Rating: <span className="userInfo">{rating}</span>{" "}
              </h6>
            </div>
          )}

          {showproj && (
            <h6>
              Projects:{" "}
              <span className="projects">
                {projects.map(function (project, i) {
                  return (
                    <div key={i} className="projects">
                      <p>
                        {i + 1} {project}
                      </p>
                    </div>
                  );
                })}
              </span>{" "}
            </h6>
          )}

          <div className="cardButtons">
            <button onClick={deleteArtist}>Delete Artist</button>

            <Link to="/editartist">
              <button>Edit Artist</button>
            </Link>

            <button onClick={showComments} id="commentsShow">
              Show Comments
            </button>
            <button onClick={showProjects} id="commentsShow">
              Show Projects
            </button>
            <div className="popup">
              <h5>Comments:</h5>
              {showCom && (
                <span className="popuptext">
                  {comments.map((comment) => (
                    <ul>
                      <li>-"{comment}"</li>
                    </ul>
                  ))}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Artist;
