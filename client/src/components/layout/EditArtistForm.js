import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import style from "./newArtistForm.module.css";
import axios from "axios";

const EditArtistForm = ({ history, artistId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("none");
  const [phone, setPhone] = useState(0);
  const [rating, setRating] = useState(0);
  const [availability, setAvailability] = useState("");

  const editArtistHandler = async (e) => {
    e.preventDefault();
    const editedArtist = {
      name: name,
      age: age,
      email: email,
      gender: gender,
      phone: phone,
      rating: rating,
      availability: availability,
    };

    try {
      await axios.put(`/api/artists/${artistId}`, editedArtist);
      console.log(editedArtist);
    } catch (error) {
      console.error(error);
    }
    history.push("/");
  };

  return (
    <Container>
      <div className={style.artistForm}>
        <h1>Edit Artist</h1>
        <Form onSubmit={editArtistHandler}>
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

          <Button type="submit" className={style.addBtn}>
            Confirm
          </Button>

          <Link to="/">
            <Button className={style.addBtn}>Back</Button>
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default EditArtistForm;
