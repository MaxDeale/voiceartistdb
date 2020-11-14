import React from "react";
import { Modal, Button } from "react-bootstrap";

//CANT GET MODAL TO OPEN !?!?!?!?!?!?!?!?!?!?!?!?!!?!?!?!?!?!?!?!?

const CommentsModal = ({ show }) => {
  const handleCommentsClose = () => {};
  return (
    <div>
      <Modal show={show} onHide={handleCommentsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCommentsClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCommentsClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CommentsModal;
