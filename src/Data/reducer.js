export const initialState = {
    user:null,
    playlists : [],
    playing: false,
    item:null,
    // token:'BQCiXK2YqteeLaUHZfMG8vrKZRlLcr1YoN6KgxQSFdN8WD3JvQ2buE1BXfLKpJ8h1xI-cgdztUF4besW94hlKdtsU1EFSv-iY5129Hl7ic_O5NQpcT2qhaNMF47bEBSLSZM9603jWinwZWP9GJmmdbP0RYyb-MCTbyq9o8wK8Z1aIVV-SVF4gF_2asbzFPJimDs5-rQdPQbi9W1NlVrk'
   
token:null    //set token here so directly it will authenticate
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;