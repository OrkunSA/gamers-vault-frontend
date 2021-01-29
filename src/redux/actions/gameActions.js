const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
export const getGames = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_GAMES", payload: data }));
  };
};

export const addGamesToCollection = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ game: data }),
    })
      .then((res) => res.json())
      .then((game) =>
        dispatch({ type: "ADD_GAME_TO_COLLECTION", payload: game })
      );
  };
};
