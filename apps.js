//open menu onclick
function gamepadopenhome() {
    // Obtenir la liste des gamepads connectés
    const gamepads = navigator.getGamepads();

    // Parcourir tous les gamepads
    for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad && gamepad.connected) {
            if (gamepad.buttons[5].pressed || gamepad.buttons[3].pressed) {
                return true;
            }
        }
    }

    return false;
}



//FOR THE CLOCK APP
function heure(){
  var maintenant = new Date();
  var heures = maintenant.getHours();
  var minutes = maintenant.getMinutes();
  var secondes = maintenant.getSeconds();
  heures = (heures < 10) ? '0' + heures : heures;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  secondes = (secondes < 10) ? '0' + secondes : secondes;
  var heureFormattee = heures + ':' + minutes + ':' + secondes;
  return heureFormattee
}

function openclock(i){
    apps[i]["el"]=[{"img": "close.svg", "x": 0, "y": 0, "z": 0, "color": "black", "w": 0.5, "h": 0.5, "onclick":"close"}]
    apps[i]["appname"]="time"
    apps[i]["text"]=[{"text":heure, "x": 0, "y": 0, "z": 0, "size":50, "color":"#505050"}]
}

//FOR THE COLOR SELECTOR
function opencolor(i){
  apps[i]["el"]=[{"img": "fondapp.png", "x": 0, "y": 0, "z": 0, "color": "black", "w": 5, "h": 4},{"img": "color/b1.svg", "x": 15, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"b1"},{"img": "color/b2.svg", "x": 5, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"b2"},{"img": "color/b3.svg", "x": -5, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"b3"},{"img": "color/b.svg", "x": -15, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"bc"},{"img": "color/g1.svg", "x": 15, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"g1"},{"img": "color/g2.svg", "x": 5, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"g2"},{"img": "color/g3.svg", "x": -5, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"g3"},{"img": "color/b.svg", "x": -15, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"bs"}]
  apps[i]["fct"]={"b1":(i)=>{localStorage.setItem("bgcolor", "#00e9ff")},"b2":(i)=>{localStorage.setItem("bgcolor", "#0088ff")},"b3":(i)=>{localStorage.setItem("bgcolor", "#0100ff")},"bc":(i)=>{localStorage.setItem("bgcolor", "#000000")},"g1":(i)=>{localStorage.setItem("sol", "#a8ff00")},"g2":(i)=>{localStorage.setItem("sol", "#2cff00")},"g3":(i)=>{localStorage.setItem("sol", "#00ffcc")},"bs":(i)=>{localStorage.setItem("sol", "#000000")}}
  apps[i]["appname"]="color"
  apps[i]["text"]=[{"text":()=>{return "COLOR CHANGER"}, "x": 0, "y": 43, "z": 0, "size":12}]
}


//FOR THE MINDFULNESS

var sm=0

function textmind(){
  var maintenant = new Date();
  no = maintenant.getTime()
  sn=Math.floor((no-sm)/1000)
  if (sn<60){
    if (Math.floor(sn/5)%2==0){
      return "Inspirez ... ("+(5-(sn%5))+")"
    } else {
      return "Expirez ... ("+(5-(sn%5))+")"
    }
  } else {
    return "Bon travail !"
  }
}

function openmindfulness(i){
  var maintenant = new Date();
  sm = maintenant.getTime();
  apps[i]["el"]=[{"img": "fondapp.png", "x": 0, "y": 0, "z": 0, "color": "black", "w": 5, "h": 4},{"img": "cache.svg", "x": 0, "y": 5, "z": 0, "color": "black", "w": 4.5, "h": 0.45, "onclick":"cache"}]
  apps[i]["appname"]="Méditation"
  apps[i]["text"]=[{"text":()=>{return "MINDFULNESS"}, "x": 0, "y": 43, "z": 0, "size":12},{"text":textmind, "x": 0, "y": 15, "z": 0, "size":25}]
  apps[i]["fct"]={"cache":(i)=>{localStorage.setItem("bgcolor", "#000000");localStorage.setItem("sol", "#000000")}}
}

//SPOTIFY
if (localStorage.getItem("spotify")){
  var getAccessToken=localStorage.getItem("spotify")
}
function play() {
    fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    });
}

function pause() {
    fetch('https://api.spotify.com/v1/me/player/pause', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    });
}

function nextTrack() {
    fetch('https://api.spotify.com/v1/me/player/next', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    });
}

function previousTrack() {
    fetch('https://api.spotify.com/v1/me/player/previous', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    });
}
la=0
pl = 0
function openspotify(i){
    function reload(i){
      fetch('https://api.spotify.com/v1/me/player/currently-playing', {
              headers: {
                  'Authorization': 'Bearer ' + getAccessToken
              }
          })
          .then(response => response.json())
          .then(data => {
              if (data && data.item && data.item.album && data.item.album.images && data.item.album.images.length > 0) {
                  const imageUrl = data.item.album.images[0].url;
                  const artistNames = data.item.artists.map(artist => artist.name).join(', ');
                apps[i]["text"][0]["text"]=()=>data.item.name;
                apps[i]["text"][1]["text"]=()=>data.item.artists.map(artist => artist.name).join(', ');

                  apps[i]["el"][1]["img"]=imageUrl
                
              } else {
                apps[i]["el"][1]["img"]="empty song.svg"
                
              }
            if (data.is_playing){
              pl=1
            } else {
              pl=0
            }
          })
          .catch(error => {
              console.error('Error fetching currently playing track:', error);
              document.getElementById('musicImage').innerHTML = "Error fetching currently playing track.";
          });
      }
  
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    }).then((reponse)=>{
      if (reponse.status<300){
        
    //l'app
    apps[i]["text"]=[{"text":()=>{return "no song played"}, "x": -15, "y": -20, "z": 0, "size":12, "color":"#ffffff"},{"text":()=>{return ""}, "x": -15, "y": -35, "z": 0, "size":12, "color":"#979797" }]
    apps[i]["el"]=[{"img": "fond spotify.svg", "x": 0, "y": 0, "z": 0, "color": "black", "w": 6, "h": 3.75}, {"img": "empty song.svg", "x": 15, "y": 10, "z": 0, "color": "black", "w": 2.5, "h": 2.5}, {"img": "previous.png", "x": -5, "y": 15, "z": 0, "color": "white", "w": 0.5, "h": 0.5, "onclick":"previous"}, {"img": "play.png", "x": -15, "y": 8, "z": 0, "color": "white", "w": 0.9, "h": 0.9, "onclick":"play"}, {"img": "next.png", "x": -25, "y": 15, "z": 0, "color": "white", "w": 0.5, "h": 0.5, "onclick":"next"}]
    apps[i]["appname"]="Spotify"
    reload(i)
    apps[i]["fct"]={"previous":(a)=>{
      z=new Date();n=z.getTime()
      if ((n-la)>1000){fetch('https://api.spotify.com/v1/me/player/previous', {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer ' + getAccessToken
          }
      });la=n;reload(i)}},"next":(a)=>{
                    z=new Date();n=z.getTime()
                    if ((n-la)>1000){fetch('https://api.spotify.com/v1/me/player/next', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + getAccessToken
                        }
                    });setTimeout(reload, 3000, i);la=n}}
                   
            ,"play":(a)=>{
                   z=new Date();n=z.getTime()
                   if ((n-la)>1000){
                     if (pl==0){
                       pl=1;fetch('https://api.spotify.com/v1/me/player/play', {
                           method: 'PUT',
                           headers: {
                               'Authorization': 'Bearer ' + getAccessToken
                           }
                       })
                     } else {
                       pl=0;fetch('https://api.spotify.com/v1/me/player/pause', {
                            method: 'PUT',
                            headers: {
                                'Authorization': 'Bearer ' + getAccessToken
                            }
                        });
                     }
                     
                     ;la=n;reload(i)}}

}
  
      } else {
      
      const clientId = '282a9c9673294baf90f2d6e67603a888';
      const redirectUri = 'https://829449c6-5e5a-489a-9d24-4189ebefae68-00-32b01b05f09m0.janeway.replit.dev/endpoint.html';
      const scope = 'user-read-playback-state user-modify-playback-state';
      const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&response_type=token`;
      window.location.href=authorizeUrl
    }
            });}
