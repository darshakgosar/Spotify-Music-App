export const authEndpoint = "https://accounts.spotify.com/authorize";

//const redirectUri = "https://localhost:3000/";

const clientId = "cff76213089a4e228206c8bf120d67cb";
const redirectUri = "http://localhost:3000/";
//const clientId = 'cbca9fe79f1e46189ef8a5ecb90ae3e0';

const scope=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=> {
        //accesstoken
        let parts = item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1]);
        return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;