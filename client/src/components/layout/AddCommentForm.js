import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import axios from "axios";

const AddCommentForm = ({ artistId }) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
    console.log(artistId);
    let confirm = prompt(
      "are you sure you want to post this comment? type 'yes' if you are sure"
    );
    if (confirm === "yes") {
      //set up back end to handle comment route , posting the commen to specific artist by id
      try {
        await axios.post(`/api/comments/${artistId}`, comment);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: "MuseoModerno" }}>Add Comment</h1>
      <Container>
        <Form onSubmit={handleCommentSubmit}>
          <Form.Group>
            <Form.Label>Enter Comment</Form.Label>
            <Form.Control
              type="text"
              value={comment}
              placeholder="Enter Comment"
              onChange={(e) => setComment(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            className={style.logIcon2}
            style={{ margin: "0", padding: "0 1rem" }}
            type="submit"
          >
            Submit
          </Button>
          <Link to="/">
            <Button
              className={style.logIcon}
              style={{ margin: "0 10px", padding: "0 1rem" }}
            >
              Back
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default AddCommentForm;
