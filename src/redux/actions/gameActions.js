const API_KEY = process.env.REACT_APP_API_KEY;
const NEW_RELEASE_URL = `https://api.rawg.io/api/games?dates=2021-01-01,2021-01-29&platforms=18,1,7?key=${API_KEY}`;
const COLLECTION_URL = `http://localhost:3001/user/collections`;

function getGames(games) {
  return { type: "SET_GAMES", payload: games.results };
}

function gettingGames() {
  return (dispatch) => {
    fetch(NEW_RELEASE_URL)
      .then((resp) => resp.json())
      .then((result) => {
        dispatch(getGames(result));
      });
  };
}

function gameSearchResults(games) {
  return { type: "SEARCH_RESULTS", payload: games };
}

function getCollection(collection) {
  return { type: "GET_COLLECTION", payload: collection };
}

function gettingCollection() {
  return (dispatch) => {
    fetch(COLLECTION_URL, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(getCollection(data));
      });
  };
}

export { gettingGames, gameSearchResults, gettingCollection, getCollection };
