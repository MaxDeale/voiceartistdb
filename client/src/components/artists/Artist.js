import React, { useState } from "react";
import { Button, Card, Container } from "@material-ui/core";
import { Modal, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../layout/navbar.module.css";
import "./Artist.css";
import Axios from "axios";
import AddCommentForm from "../layout/AddCommentForm";
import AddProjectForm from "../layout/AddProjectForm";

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
  let [showAddComment, setShowAddComment] = useState(false);
  let [showAddProject, setShowAddProject] = useState(false);

  const deleteArtist = async (e) => {
    e.preventDefault();
    let confirm = prompt(
      "Type 'yes' to confirm deletion of artist. (this will never be undone)"
    );
    if (confirm === "yes" || confirm === "YES" || confirm === "Yes") {
      try {
        await Axios.delete(`/api/artists/${_id}`);
        console.log(_id);
        //reload page after delete
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

  const addComment = () => {
    setShowAddComment(!showAddComment);
  };

  const addProject = () => {
    setShowAddProject(!showAddProject);
  };

  const showProjects = () => {
    setShowProj(!showproj);
  };

  //ARTIST COMPONENT

  return (
    <>
      <Card id="artistCard" variant="outlined">
        <div className="artistInfo">
          {name && (
            <h4>
              Artist{" "}
              <span className="userInfo" id="artistName">
                {" "}
                {name}
              </span>
            </h4>
          )}

          {phone && (
            <h5>
              Phone{" "}
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
              Email <span className="userInfo"> {email}</span>
            </h6>
          )}
          {age && (
            <h6>
              Age <span className="userInfo"> {age}</span>
            </h6>
          )}
          {availability && (
            <div>
              <h6>
                Availability <span className="userInfo">{availability} </span>
              </h6>
            </div>
          )}

          {rating && (
            <div>
              <h6>
                Rating<span className="userInfo">{rating}</span>{" "}
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

            <button onClick={addComment} className="addcomprojBtn">
              Add Comment
            </button>
            {showAddComment && <AddCommentForm artistId={artist._id} />}
            <button onClick={showProjects} id="commentsShow">
              Show Projects
            </button>
            {showAddProject && <AddProjectForm artistId={artist._id} />}
            <button onClick={addProject} className="addcomprojBtn">
              Add Project
            </button>
            <div className="popup">
              {showCom && (
                <div className="comments">
                  <h5>Comments:</h5>
                  <span>
                    {comments.map((comment) => (
                      <ul>
                        <li>-"{comment}"</li>
                      </ul>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Artist;
