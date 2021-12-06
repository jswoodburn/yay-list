const base_url = 'https://api.spotify.com/';
const client_id = 'f1bd5ce12ee54066818c69d4d78d4efa'; // Your client id
const client_secret = 'CLIENT_SECRET'; // Your secret
const redirect_uri = 'http://localhost:3001/logged-in'; // Your redirect uri
// const scope = 'user-read-private user-read-email';


const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}

// input sentence from form here
const createAndPopulateNewPlaylistFromSentence = (sentence) => { // TODO: need authentication here
    const trackUris = getTrackUrisFromSentence(sentence);

    // create playlist endpoint: https://developer.spotify.com/documentation/web-api/reference/#/operations/create-playlist
    // TODO: can we add tracks straight here or do we need to call add tracks endpoint here?
    // either create and add tracks here OR have create method that returns playlist ID and then update method that takes ID and trackUris
    // add tracks to playlist endpoint: https://developer.spotify.com/documentation/web-api/reference/#/operations/reorder-or-replace-playlists-tracks
    const playlistId = 1; // temp

    return playlistId
}

const getTrackUrisFromSentence = (sentence) => {
    const trackNames = sentence.split(' ');
    let trackUrisForPlaylist = [];
    trackNames.forEach(
        trackName => trackUrisForPlaylist.push(getTrackWithName(trackName))
    );
    return trackUrisForPlaylist
}

const getTrackWithName = (name) => {
    fetch(base_url + '/v1/search?q=' + name + '&type=track') // TODO: need authentication here
        .then(response => response.json)
        .then(searchResults => {
            for (const searchResult of searchResults) {
                if (searchResult.name === name) {
                    return searchResult.uri;
                }
            }
        });
}

// this is the last thing we call, to get playlist for Results page
// display playlist info: https://developer.spotify.com/documentation/general/guides/working-with-playlists/
const getPlaylist = (playlistId) => { // TODO: need authentication here
    // get playlist for display:
    // https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
}

export const loginAddress = 'https://accounts.spotify.com/authorize?' + serialize({
    response_type: 'code',
    client_id: client_id,
    redirect_uri: redirect_uri,
});

export const getDisplayName = (code) => {
    fetch(base_url + '/me', (res) => {
        alert(`Your username is ${res.body.display_name}`)
    })
}