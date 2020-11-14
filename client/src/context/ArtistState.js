import React, { useReducer } from "react";
import ArtistContext from "./artistContext";
import artistReducer from "./artistReducer";
import axios from "axios";
import {
  ADD_ARTIST,
  DELETE_ARTIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ARTIST,
  FILTER_ARTIST,
  CLEAR_FILTER,
  ARTIST_ERROR,
  GET_ARTISTS,
  CLEAR_ARTIST,
} from "../types";

const ArtistState = (props) => {
  const initialState = {
    artists: [
      {
        comments: ["He to  the  now", " he is one of them"],
        projects: ["slopers kabs", "giopplers"],
        _id: "5f1865eafd846234644793d2",
        name: "Reece Harbins",
        age: 65,
        email: "reeece@hotmail.com",
        phone: 2323241441,
        gender: "M",
        rating: 4,
        availability: "now",
        user: "5f186002fd846234644793d0",
        date: "2020-07-22T16:14:34.263Z",
        __v: 0,
      },
      {
        comments: ["He never likes to read the words now", "nope he doesnt"],
        projects: ["kabbi kabs", "perolers"],
        _id: "5f186358fd846234644793d1",
        name: "toputin Foopertuit Tithers",
        age: 45,
        email: "Jiberson@hotmail.com",
        phone: 55503333444,
        gender: "M",
        rating: 7,
        availability: "weekends",
        user: "5f186002fd846234644793d0",
        date: "2020-07-22T16:03:36.581Z",
        __v: 0,
      },
    ],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(artistReducer, initialState);

  // GET ARTISTS
  const getArtists = async () => {
    try {
      const res = await axios.get("/api/artists");
      console.log(res.data);
      dispatch({ type: GET_ARTISTS, payload: res.data });
    } catch (err) {
      dispatch({ type: ARTIST_ERROR });
    }
  };

  // ADD ARTIST
  const addArtist = async (artist) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/artists", artist, config);
      dispatch({ type: ADD_ARTIST, payload: res.data });
    } catch (err) {
      dispatch({ type: ARTIST_ERROR });
    }
  };
  // DELETE ARTIST
  const deleteArtist = async (id) => {
    try {
      await axios.delete(`/api/artists/${id}`);

      dispatch({ type: DELETE_ARTIST, payload: id });
    } catch (err) {
      dispatch({ type: ARTIST_ERROR });
    }
  };

  // UPDATE ARTIST
  const updateArtist = async (artist) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/artists/${artist._id}`, artist, config);

      dispatch({ type: UPDATE_ARTIST, payload: res.data });
    } catch (err) {
      dispatch({ type: ARTIST_ERROR });
    }
  };

  // CLEAR ARTIST
  const clearArtist = () => {
    dispatch({ type: CLEAR_ARTIST });
  };

  // SET CURRENT ARTIST
  const setCurrent = (artist) => {
    dispatch({ type: SET_CURRENT, payload: artist });
  };
  // CLEAR CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // FILTER
  const filterArtists = (text) => {
    dispatch({ type: FILTER_ARTIST, payload: text });
  };
  // CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ArtistContext.Provider
      value={{
        artists: state.artists,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addArtist,
        deleteArtist,
        setCurrent,
        clearCurrent,
        updateArtist,
        filterArtists,
        clearFilter,
        getArtists,
        clearArtist,
      }}
    >
      {" "}
      {props.children}{" "}
    </ArtistContext.Provider>
  );
};

export default ArtistState;
