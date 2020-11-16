import React, { useState, useEffect, Fragment, useContext } from "react";
import ArtistContext from "../../context/artistContext";
import Artist from "../artists/Artist";
import { Col, Row, Container } from "react-bootstrap";

const ArtistList = () => {
  useEffect(() => {
    getArtists();
  }, []);
  const artistContext = useContext(ArtistContext);

  const { artists, loading, getArtists } = artistContext;
  return (
    <Row>
      <>
        {artists.map((artist) => (
          <Artist artist={artist} key={artist._id} />
        ))}
      </>
    </Row>
  );
};

export default ArtistList;
