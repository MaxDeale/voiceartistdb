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

export default (state, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        loading: false,
      };
    // reducer type for adding artist returns current state and sets artists values in state to payload
    case ADD_ARTIST:
      return {
        ...state,
        artists: [...state.artists, action.payload],
        loading: false,
      };
    case UPDATE_ARTIST:
      return {
        ...state,
        artists: state.artists.map((artist) =>
          artist._id === action.payload._id ? action.payload : artist
        ),
        loading: false,
      };
    // reducer type for deleting artists uses the specific id as a payload and checks the values from state to delete
    case DELETE_ARTIST:
      return {
        ...state,
        artists: state.artists.filter(
          (artist) => artist._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_ARTIST:
      return {
        ...state,
        artists: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_ARTIST:
      return {
        ...state,
        filtered: state.artists.filter((artists) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return artists.name.match(regex) || artists.type.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case ARTIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
