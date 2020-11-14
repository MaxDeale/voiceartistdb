import React, { useState, useContext, useEffect, Fragment } from "react";
import { Button, Card, Grid } from "@material-ui/core";
import styles from "./Artist.module.css";

const Artist = ({ artist }) => {
  const {
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

  const deleteArtist = () => {};

  const editArtist = () => {};

  const showComments = () => {
    console.log(comments);
    setShowCom(true);
  };

  //ARTIST COMPONENT

  return (
    <Card id={styles.artistCard} variant="outlined">
      <div className={styles.artistHeadings}>
        {name && (
          <h4>
            Artist:{" "}
            <span className={styles.userInfo} id={styles.artistName}>
              {" "}
              {name}
            </span>
          </h4>
        )}

        {phone && (
          <h5>
            Phone:{" "}
            <span className={styles.userInfo} stle={{ color: "#aa2b33" }}>
              {" "}
              {phone}
            </span>
          </h5>
        )}
      </div>

      <div className={styles.artistDetails}>
        {email && (
          <h6>
            Email: <span className={styles.userInfo}> {email}</span>
          </h6>
        )}
        {age && (
          <h6>
            Age: <span className={styles.userInfo}> {age}</span>
          </h6>
        )}
        {availability && (
          <div>
            <h6>
              Availability:{" "}
              <span className={styles.userInfo}>{availability} </span>
            </h6>
          </div>
        )}

        {rating && (
          <div>
            <h6>
              Rating: <span className={styles.userInfo}>{rating}</span>{" "}
            </h6>
          </div>
        )}

        {projects && (
          <h6>
            Projects:{" "}
            <span className={styles.projects}>
              {projects.map(function (project, i) {
                return (
                  <div key={i} className={styles.projects}>
                    <p>
                      {i + 1} {project}
                    </p>
                  </div>
                );
              })}
            </span>{" "}
          </h6>
        )}

        <div className={styles.cardButtons}>
          <button onClick={deleteArtist}>Delete Artist</button>

          <button onClick={editArtist}>Edit Artist</button>

          <button onClick={showComments} id={styles.commentsShow}>
            Show Comments
          </button>
        </div>
        {comments && <div id={styles.commentsBox}>{comments}</div>}
      </div>
    </Card>
  );
};

export default Artist;
