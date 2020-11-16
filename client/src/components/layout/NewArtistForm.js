import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import style from "./newArtistForm.module.css";
import axios from "axios";
import { StepLabel } from "@material-ui/core";

const NewArtistForm = ({ history }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("none");
  const [phone, setPhone] = useState(0);
  const [rating, setRating] = useState(0);
  const [availability, setAvailability] = useState("");

  const addArtistHandler = async (e) => {
    e.preventDefault();
    const newArtist = {
      name: name,
      age: age,
      email: email,
      gender: gender,
      phone: phone,
      rating: rating,
      availability: availability,
    };

    try {
      await axios.post("/api/artists", newArtist);
    } catch (error) {
      console.error(error);
    }
    history.push("/");
    console.log(newArtist);
  };

  return (
    <Container>
      <div className={style.artistForm}>
        <h1>Add New Artist</h1>
        <Form onSubmit={addArtistHandler}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Artists Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter Artists Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Artists Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Artists Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Artists Name"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Artists Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Availability:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Artists Availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className={style.addBtn} type="submit">
            Add
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default NewArtistForm;
