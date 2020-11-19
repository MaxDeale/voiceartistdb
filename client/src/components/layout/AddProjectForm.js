import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import axios from "axios";

const AddProjectForm = ({ artistId }) => {
  const [project, setProject] = useState("");

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    // console.log(comment);
    // console.log(artistId);
    let confirm = prompt(
      "are you sure you want to post this project? type 'yes' if you are sure"
    );
    if (confirm === "yes" || confirm === "YES" || confirm === "Yes") {
      //set up back end to handle comment route , posting the commen to specific artist by id
      try {
        let newProject = {
          project: project,
        };
        await axios.post(`/api/project/${artistId}`, newProject);

        alert("Project submitted");
      } catch (error) {
        console.error(error);
      }
    }

    window.location.reload();
  };

  return (
    <div>
      <h1 style={{ fontFamily: "MuseoModerno", fontSize: "2rem" }}>
        Add Project
      </h1>
      <Container>
        <Form onSubmit={handleProjectSubmit}>
          <Form.Group>
            <Form.Label>Enter Project</Form.Label>
            <Form.Control
              type="text"
              value={project}
              placeholder="Enter Project"
              onChange={(e) => setProject(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            className={style.logIcon}
            style={{ margin: "0", padding: "0 1rem" }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddProjectForm;
