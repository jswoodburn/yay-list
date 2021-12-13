const base_url = 'https://api.spotify.com/v1/';
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

export const loginAddress = 'https://accounts.spotify.com/authorize?' + serialize({
    response_type: 'code',
    client_id: client_id,
    redirect_uri: redirect_uri,
});

export const getAccessToken = (authCode) => {
  const formBody = [];
  formBody.push(encodeURIComponent('code') + '=' + encodeURIComponent(authCode));
  formBody.push(encodeURIComponent('redirect_uri') + '=' + encodeURIComponent(redirect_uri));
  formBody.push(encodeURIComponent('grant_type') + '=' + encodeURIComponent('authorization_code'));
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: formBody,
        headers: {
          authorization: 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
          contentType: 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors' // 'cors' by default
    })
    .then(res => res.body.access_token);
}

// export const getDisplayName = (code) => {
//     fetch(base_url + '/me', {
//         authorization: 
//     })
//     .then(res => {
//         alert(`Your username is ${res.body.display_name}`)
//     })
// }