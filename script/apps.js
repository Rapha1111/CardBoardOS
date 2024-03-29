//open menu onclick
let tabPresse = false;
document.addEventListener('keyup', function(event) {
    if (event.key === '²') {
        tabPresse = false;
    }
});
document.addEventListener('keydown', function(event) { 
  if (event.key === '²') {
        tabPresse = true;
    }
});

//click on a 3d item
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      localStorage.setItem("enter", "no")
    }
});
document.addEventListener('keydown', function(event) { 
  if (event.key === 'Enter') {
    localStorage.setItem("enter", "yes")
    }
});

//close a 3d item
document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
      localStorage.setItem("quit", "no")
    }
});
document.addEventListener('keydown', function(event) { 
  if (event.key === 'Escape') {
    localStorage.setItem("quit", "yes")
    }
});


function gamepadopenhome() {
    // Obtenir la liste des gamepads connectés
    const gamepads = navigator.getGamepads();

    // Parcourir tous les gamepads
    for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad && gamepad.connected) {
            if (gamepad.buttons[5].pressed || gamepad.buttons[3].pressed || tabPresse) {
                return true;
            }
        }  
    }
    if (tabPresse) {
      return true
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
    apps[i]["el"]=[{"img": "assets/close.svg", "x": 0, "y": 0, "z": 0, "color": "black", "w": 0.5, "h": 0.5, "onclick":"close"}]
    apps[i]["appname"]="time"
    apps[i]["text"]=[{"text":heure, "x": 0, "y": 0, "z": 0, "size":50, "color":"#505050"}]
}

//FOR THE COLOR SELECTOR
function opencolor(i){
  apps[i]["el"]=[{"img": "assets/fondapp.png", "x": 0, "y": 0, "z": 0, "color": "black", "w": 5, "h": 4},{"img": "color/b1.svg", "x": 15, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"b1"},{"img": "color/b2.svg", "x": 5, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"b2"},{"img": "color/b3.svg", "x": -5, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"b3"},{"img": "color/b.svg", "x": -15, "y": 90, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"bc"},{"img": "color/g1.svg", "x": 15, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"g1"},{"img": "color/g2.svg", "x": 5, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"g2"},{"img": "color/g3.svg", "x": -5, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"g3"},{"img": "color/b.svg", "x": -15, "y": 50, "z": 0, "color": "black", "w": 0.7, "h": 0.7, "onclick":"bs"}]
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
  apps[i]["el"]=[{"img": "assets/fondapp.png", "x": 0, "y": 0, "z": 0, "color": "black", "w": 5, "h": 4},{"img": "assets/cache.svg", "x": 0, "y": 5, "z": 0, "color": "black", "w": 4.5, "h": 0.45, "onclick":"cache"}]
  apps[i]["appname"]="Méditation"
  apps[i]["text"]=[{"text":()=>{return "MINDFULNESS"}, "x": 0, "y": 43, "z": 0, "size":12},{"text":textmind, "x": 0, "y": 15, "z": 0, "size":25}]
  apps[i]["fct"]={"cache":(i)=>{localStorage.setItem("bgcolor", "#000000");localStorage.setItem("sol", "#000000")}}
}

//SPOTIFY
if (localStorage.getItem("spotify")){
  var getAccessToken=localStorage.getItem("spotify")
}
/*function play() {
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
}*/
la=0
pl = 0

function changeMusic() {
    const songName = localStorage.getItem("keyboard")
    localStorage.setItem("keyboard","")
    if (!songName) {
        return;
    }

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(songName)}&type=track`, {
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.tracks && data.tracks.items && data.tracks.items.length > 0) {
            const trackId = data.tracks.items[0].id;
            playTrack(trackId);
        } else {
        }
    })
    .catch(error => {
        console.error('Error searching for track:', error);
    });
}

function playTrack(trackId) {
    // Récupérer l'appareil actuellement utilisé pour la lecture
    fetch('https://api.spotify.com/v1/me/player', {
        headers: {
            'Authorization': 'Bearer ' + getAccessToken
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.device && data.device.id) {
            const deviceId = data.device.id;

            // Lecture de la musique sur l'appareil actuellement utilisé
            fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + getAccessToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'uris': [`spotify:track:${trackId}`]
                })
            })
            .then()
            .catch(error => {
                console.error('Error changing music:', error);
            });
        } else {
        }
    })
    .catch(error => {
        console.error('Error retrieving active device:', error);
    });
}


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
    apps[i]["el"]=[{"img": "assets/fond spotify.svg", "x": 0, "y": 0, "z": 0, "color": "black", "w": 6, "h": 3.75}, {"img": "assets/empty song.svg", "x": 15, "y": 10, "z": 0, "color": "black", "w": 2.5, "h": 2.5}, {"img": "assets/previous-spotify.png", "x": -5, "y": 15, "z": 0, "color": "white", "w": 0.5, "h": 0.5, "onclick":"previous"}, {"img": "assets/play-spotify.png", "x": -15, "y": 8, "z": 0, "color": "white", "w": 0.9, "h": 0.9, "onclick":"play"}, {"img": "assets/next-spotify.png", "x": -25, "y": 15, "z": 0, "color": "white", "w": 0.5, "h": 0.5, "onclick":"next"}, {"img": "assets/musicchanger.png", "x": -27, "y": 95, "z": 0, "color": "white", "w": 0.8, "h": 0.8, "onclick":"change"}]
    apps[i]["appname"]="Spotify"
    reload(i)
    apps[i]["fct"]={"previous":(a)=>{
      z=new Date();n=z.getTime()
      if ((n-la)>300){fetch('https://api.spotify.com/v1/me/player/previous', {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer ' + getAccessToken
          }
      });la=n;reload(i)}},"next":(a)=>{
                    z=new Date();n=z.getTime()
                    if ((n-la)>300){fetch('https://api.spotify.com/v1/me/player/next', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + getAccessToken
                        }
                    });setTimeout(reload, 3000, i);la=n}}
                   
            ,"play":(a)=>{
                   z=new Date();n=z.getTime()
                   if ((n-la)>300){
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
                     
                     ;la=n;reload(i)}},"change":(a)=>{changeMusic();setTimeout(reload, 3000, a)}} 

  
      } else {
      
      const clientId = '282a9c9673294baf90f2d6e67603a888';
        var redirectUri = 'https://rapha1111.github.io/CardBoardOS/endpoint.html';

      if (window.location.href.includes("github.io")){
        redirectUri = 'https://rapha1111.github.io/CardBoardOS/endpoint.html';
      }  else {
        redirectUri = 'https://829449c6-5e5a-489a-9d24-4189ebefae68-00-32b01b05f09m0.janeway.replit.dev/endpoint.html';
      }
       
          
        const scope = 'user-read-playback-state user-modify-playback-state';
      const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&response_type=token`;
      window.location.href=authorizeUrl
    }
            });}

//POUR PHOTO-VIEW
if (!localStorage.getItem("photo")){
  localStorage.setItem("photo", "{}")
}
photos=JSON.parse(localStorage.getItem("photo"))

function chooseImageFromGallery() {
    return new Promise((resolve, reject) => {
      document.getElementById("file").hidden=false  
      const input = document.getElementById('photo');
      
        input.value = "";
        input.onchange = function() {
            const file = this.files[0];
            const reader = new FileReader();
            
                reader.onload = function(event) {
                        document.getElementById("file").hidden=true  
                        resolve(event.target.result);
                }
            
            
            reader.readAsDataURL(file);
        };
        
    });
}
function getImageProportions(base64Data) {
    return new Promise((resolve, reject)=>{
    var img = new Image();

    // Lorsque l'image est chargée
    img.onload = function() {
        // Récupérer les dimensions de l'image
        var width = this.width;
        var height = this.height;
        // Retourner les dimensions de l'image
        resolve( { width: width, height: height })
    };

    // Définir la source de l'image comme étant la chaîne base64
    img.src = base64Data;
})}

function opengallery(i, opt){
  function theapp(data, ratio, size=5, pinned=false){
    apps[i]["el"]=[{"img":data, "x":0, "y":0, "z":0, "color":"white", "h":size, "w":size*ratio, "r":ratio, "close":pinned ? false : true},{"img":"assets/plus.svg", "x":10, "y":-35, "z":0, "color":"black", "h":0.7, "w":0.7, "onclick":"plus"},{"img":"assets/moins.svg", "x":0, "y":-35, "z":0, "color":"black", "h":0.7, "w":0.7, "onclick":"moins"},{"img":pinned ? "assets/pinned.svg" : "assets/pin.svg", "x":-10, "y":-35, "z":0, "color":"black", "h":0.7, "w":0.7, "onclick":"pin"}]
    apps[i]["appname"]="photo"
    apps[i]["text"]=[]
    apps[i]["fct"]={"plus":(a)=>{
      apps[a]["el"][0]["h"]+=0.5
      apps[a]["el"][0]["w"]=apps[a]["el"][0]["h"]*apps[a]["el"][0]["r"]

    },"moins":(a)=>{
                     apps[a]["el"][0]["h"]-=0.5
                     apps[a]["el"][0]["w"]=apps[a]["el"][0]["h"]*apps[a]["el"][0]["r"]

                   }, "pin":(a)=>{
      if (apps[i]["el"][0]["close"]){
        apps[i]["el"][0]["close"]=false
        apps[i]["el"][3]["img"]="assets/pinned.svg"
        apps[i]["z"]=-1
        photos[data]={"h":apps[a]["el"][0]["h"], "r":apps[a]["el"][0]["r"], "x":apps[a]["x"], "y":apps[a]["y"]}
        localStorage.setItem("photo", JSON.stringify(photos))
      } else {
        apps[i]["el"][0]["close"]=true
        apps[i]["z"]=0
        apps[i]["el"][3]["img"]="assets/pin.svg"
        delete photos[data]
        localStorage.setItem("photo", JSON.stringify(photo))
      }}}
  }
  
  if (opt==undefined){
    chooseImageFromGallery().then((data)=>{
      getImageProportions(data).then((prop)=>{
        theapp(data, prop.width/prop.height)
    })})
  } else {
    theapp(opt[0], opt[1], opt[2], true)
  }
}

//TO CHARGE PHOTO PINNED
document.addEventListener('DOMContentLoaded', function() {
  
for (var i in photos) {
  if (photos.hasOwnProperty(i)) {
      var max = 1000000000
      var id = Math.floor(Math.random() * max).toString();
      apps[id]={"appname":"photo", "x":photos[i]["x"], "y":photos[i]["y"], "text":[], "el":[], "fct":[]}
      opengallery(id, [i, photos[i]["r"], photos[i]["h"]])
}}
});



//THE CHRONO APP
let timerInterval;
let seconds = 0, minutes = 0, hours = 0;
let running = false;
lacpp=0
function startStop(i) {
  z=new Date();n=z.getTime()
  if ((n-lacpp)>500){if (running) {
        clearInterval(timerInterval);
        running = false;
        apps[i]["el"][0]["img"]="assets/play.svg"
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        running = true;
        apps[i]["el"][0]["img"]="assets/pause.svg"
    };lacpp=n}
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    running = false;
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    return formattedTime;
}

function pad(val) {
    return val > 9 ? val : "0" + val;
}


function openchrono(i){
    apps[i]["el"]=[{"img": "assets/play.svg", "x": 15, "y": 0, "z": 0, "color": "black", "w": 1, "h": 1, "onclick":"play"},{"img": "assets/reset.svg", "x": 0, "y": 0, "z": 0, "color": "black", "w": 1, "h": 1, "onclick":"reset"},{"img": "assets/close.svg", "x": -15, "y": 0, "z": 0, "color": "black", "w": 1, "h": 1, "onclick":"close"}]
    apps[i]["appname"]="time"
    apps[i]["text"]=[{"text":updateDisplay, "x": 0, "y": 0, "z": 0, "size":50, "color":"#505050"}]
    apps[i]["fct"]={"play":startStop, "reset":resetTimer}
    
}

//THE NEWS APP
function fetchRedditWorldNews() {
    return new Promise((resolve, reject) => {
        fetch('https://www.reddit.com/r/worldnews/top.json?limit=10')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data from Reddit');
                }
                return response.json();
            })
            .then(data => resolve(data.data.children[Math.floor(Math.random() * 10)].data.title))
            .catch(error => reject(error));
    });
}



function opennews(i){
  fetchRedditWorldNews().then((news)=>{
  apps[i]["el"]=[{"img": "assets/reset.svg", "x": 10, "y": 0, "z": 0, "color": "black", "w": 1, "h": 1, "onclick":"reset"},{"img": "assets/close.svg", "x": -10, "y": 0, "z": 0, "color": "black", "w": 1, "h": 1, "onclick":"close"}]
  apps[i]["appname"]="time"
  apps[i]["text"]=[{"text":()=>{return news}, "x": 0, "y": 0, "z": 0, "size":15, "color":"#505050"}]
  apps[i]["fct"]={"reset":opennews}
  })}


//THE KEYBOARD
localStorage.setItem("keyboard","")

function keyboardImg(letter){
  return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><ellipse style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" cx="251.532" cy="252.297" rx="248.162" ry="245.405"/><text style="white-space: pre; fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 21.4px;" x="217.218" y="260.57" transform="matrix(19.252544, 0, 0, 17.217403, -4066.938537, -4111.155335)">'+letter+'</text></svg>'
}
ltype=0
function typekeyboard(letter){
  z=new Date();n=z.getTime()
  if ((n-ltype)>300){
    localStorage.setItem("keyboard",localStorage.getItem("keyboard")+letter)
    ltype=n
  }
}

function backspace(){
  z=new Date();n=z.getTime()
  if ((n-ltype)>300){
    localStorage.setItem("keyboard",localStorage.getItem("keyboard").slice(0, -1))
    ltype=n
  }
}

function showkeyboard(i){
  el=[]
  fct={}
  kb=["1234567890","AZERTYUIOP","QSDFGHJKLM",".,WXCVBN?!"]
  for (let i = 0; i < 4; i++) {
      for (let l = 0; l < 10; l++) {
        el.push({"img":keyboardImg(kb[i][l]), "x":(l*-7)+35, "y":i*(-20)+43, "z":0, "color":"black", "w":0.5, "h":0.5, "onclick":kb[i][l]})
        fct[kb[i][l]]=(a)=>{typekeyboard(kb[i][l])}
      }
  }
  el.push({"img":"assets/clear.svg","x":31.5, "y":-35, "z":0, "color":"black", "w":1, "h":0.5, "onclick":"clear"},{"img":"assets/spacebar.svg","x":2.5, "y":-35, "z":0, "color":"black", "w":3.5, "h":0.5, "onclick":"space"},{"img":"assets/back.svg","x":-24.5, "y":-35, "z":0, "color":"black", "w":1, "h":0.5, "onclick":"back"})
  fct["space"]=(a)=>{typekeyboard(" ")}
  fct["back"]=(a)=>{backspace()}
  fct["clear"]=(a)=>{localStorage.setItem("keyboard", "")}

  apps[i]["el"]=el
  apps[i]["fct"]=fct
  apps[i]["appname"]="keyboard"
  apps[i]["text"]=[{"text":()=>{return localStorage.getItem("keyboard")}, "x": 0, "y": 0, "z": 0, "size":15, "color":"#505050"}]
}

//For the timebulleapp
function opentimebullapp(i){
  apps[i]["el"]=[{"img": "assets/bulleapp.svg", "x": 0, "y": -30, "z": 0, "color": "black", "w": 6, "h": 3}, {"img": "apps-icon/horloge.png", "x": 20, "y": 0, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"clock"}, {"img": "apps-icon/chrono.png", "x": 0, "y": 0, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"chrono"}, {"img": "apps-icon/timer.png", "x": -20, "y": 0, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"clock"}]
}

//for rappels
if (!localStorage.getItem("rappels")){
  localStorage.setItem("rappels","[]")
}
rappels = JSON.parse(localStorage.getItem("rappels"))

function newrappel(i){
  if (localStorage.getItem("keyboard")){
    rappels.push(localStorage.getItem("keyboard"))
    localStorage.setItem("keyboard", "")
    localStorage.setItem("rappels", JSON.stringify(rappels))
    openrappels(i)
  }
}
lr=0
function deleterappel(i, rappelid){
  z=new Date();n=z.getTime()
  if ((n-lr)>300){
  r=[]

  for (let i = 0; i < rappels.length; i++) {
    if (i!=rappelid){
      r.push(rappels[i])
    }
  }
  rappels=r
  localStorage.setItem("rappels", JSON.stringify(rappels))
  openrappels(i)
  lr=n
}}

function openrappels(l){
  el=[{"img":"assets/plus.svg", "x":0, "y":30,"z":0, "w":1, "h":1, "color":"black", "onclick":"new"}]
  text=[]
  fct={"new":(a)=>newrappel(a)}
  for (let i = 0; i < rappels.length; i++) {
    el.push({"img":"assets/check.svg", "x":0, "y":i*-30,"z":0, "w":0.7, "h":0.7, "color":"black", "onclick":"delete-"+i})
    text.push({"text":()=>{return rappels[i]}, "x": -10, "y": (i*-30)-70, "z": 0, "size":15, "color":"#505050", "align":"start"})
    fct["delete-"+i]=(a)=>deleterappel(a, i)
  }
  apps[l]["appname"]="rappels"
  apps[l]["el"]=el
  apps[l]["fct"]=fct
  apps[l]["text"]=text
}

