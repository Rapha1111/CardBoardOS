function $_GET(param) {
  var vars = {};
  window.location.href.replace(location.hash, '').replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function(m, key, value) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );

  if (param) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}
localStorage.setItem("run","")
if (localStorage.getItem("sol")){} else {
  localStorage.setItem("sol","#2cff00")
}
if (localStorage.getItem("bgcolor")){} else {
  localStorage.setItem("bgcolor","#0088ff")
}

/*
if ($_GET("monde")) {
  anmonde = decodeURI($_GET("monde"))
} else {
  anmonde = "hub"
  scenes = { "hub": [{ "img": "panacc.svg", "x": 10, "y": 0, "z": 10, "color": "black", "w": 15, "h": 15 }, { "img": "portailmondetest.svg", "x": 180, "y": 0, "z": 50, "color": "black", "w": 10, "h": 15, "setscene": "test" }, { "img": "portailrmonde.svg", "x": 90, "y": 0, "z": 50, "color": "black", "w": 10, "h": 15, "setworld": "rmonde" }], "test": [{ "img": "https://metaverse.rapha1112.repl.co/meuble/maison.svg", "x": 20, "y": 0, "z": 50, "color": "black", "w": 10, "h": 10 }, { "img": "https://metaverse.rapha1112.repl.co/meuble/maison.svg", "x": 90, "y": 0, "z": 20, "color": "pink", "w": 10, "h": 10 }, { "img": "portailhub.svg", "x": -20, "y": 0, "z": 50, "color": "red", "w": 10, "h": 15, "setscene": "hub" }, { "img": "portailerror.svg", "x": -100, "y": 0, "z": 51, "color": "red", "w": 10, "h": 15, "setscene": "ezd" }] }
}
*/
apps=[]
localStorage.setItem("data", JSON.stringify([]))
localStorage.setItem("text", JSON.stringify([]))


//
function start() {
  try {
    DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
        document.querySelector(".alert").hidden = true

        window.addEventListener('deviceorientation', (event) => {main(event)});
      }
    });
  } catch {
    try {

      document.querySelector(".alert").hidden = true
       window.addEventListener('deviceorientation', (event) => {main(event)});


    } catch {
      alert("non disponible")
    }
  }
}

function main(event){
  data=[]
  for (var i in apps) {
    if (apps.hasOwnProperty(i)) {
        
      for (var l = 0; l < apps[i].el.length; l++) {
        ob=apps[i]["el"][l]
        if (ob["onclick"]){
          data.push({"img": ob["img"], "x": ob["x"]+apps[i]["x"], "y": ob["y"]+apps[i]["y"], "z": ob["z"], "color": ob["color"], "w": ob["w"], "h": ob["h"], "onclick":i+"#"+ob["onclick"],"app":i})
        } else {
          data.push({"img": ob["img"], "x": ob["x"]+apps[i]["x"], "y": ob["y"]+apps[i]["y"], "z": ob["z"], "color": ob["color"], "w": ob["w"], "h": ob["h"],"app":i})
        }
      }
  }}

  
  
  localStorage.setItem("data", JSON.stringify(data))

  text=[]
  for (var i in apps) {
    if (apps.hasOwnProperty(i)) {

      for (var l = 0; l < apps[i].text.length; l++) {
          ob=apps[i]["text"][l]
          text.push({"text": ob["text"](), "x": ob["x"]+apps[i]["x"], "y": ob["y"]+apps[i]["y"], "z": ob["z"], "size": (ob["size"]) ? ob["size"] : 12, "color": (ob["color"]) ? ob["color"] : "black"})
        }
      }
  }
  localStorage.setItem("text", JSON.stringify(text))

  rotation_degrees = event.alpha;
  frontToBack_degrees = event.beta;
  leftToRight_degrees = event.gamma;
  if (event.gamma > 0) {
    rotation_degrees -= 180
  } else {
    leftToRight_degrees = 90 + ((leftToRight_degrees * -1 - 90) * -1)
    if (rotation_degrees > 180) {
      rotation_degrees = rotation_degrees - 360
    }

  }
  a = "alpha : " + Math.floor(rotation_degrees)
  document.getElementById("alpha").innerHTML = a
  b = "beta : " + Math.floor(event.beta)
  document.getElementById("beta").innerHTML = b
  g = "gamma : " + Math.floor(leftToRight_degrees) + " / " + Math.floor(event.gamma)
  
  document.getElementById("gamma").innerHTML = g
  localStorage.setItem("alpha", Math.floor(rotation_degrees))
  localStorage.setItem("beta", Math.floor(event.beta))
  localStorage.setItem("gamma", Math.floor(leftToRight_degrees))

  if (gamepadopenhome()){
    ok=1
    for (var i in apps) {
      if (apps.hasOwnProperty(i)) {
      if (apps[i]["appname"]=="home"){
        ok=0
      }
    }}
    if (ok){
      var max = 1000000000
      var id = Math.floor(Math.random() * max).toString();
    apps[id]={"appname":"home","x":rotation_degrees, "y":event.beta,"text":[{"text":()=>{return "CardBoard OS"}, "x": 0, "y": 20, "z": 0}], "el":[{"img": "apps-icon/horloge.png", "x": 0, "y": -50, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"clock"},{"img": "apps-icon/color.png", "x": -20, "y": -50, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"color"},{"img": "apps-icon/meditation.png", "x": -20, "y": 50, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"meditation"},{"img": "apps-icon/chrono.png", "x": 20, "y": -50, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"chrono"},{"img": "apps-icon/gallery.png", "x": 20, "y": 50, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"gallery"},{"img": "apps-icon/makeform.png", "x": 0, "y": 50, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"makeform"},{"img": "apps-icon/youtube.png", "x": 20, "y": 0, "z": 0, "color": "black", "w": 1.2, "h": 1, "onclick":"youtube"},{"img": "apps-icon/spotify.png", "x": 0, "y": 0, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"spotify"},{"img": "apps-icon/app+.svg", "x": -20, "y": 0, "z": 0, "color": "black", "w": 1.2, "h": 1.2, "onclick":"app+"},], "fct":{"clock":(a)=>{openclock(a)}, "color":(a)=>{opencolor(a)}, "meditation":(a)=>{openmindfulness(a)}, "spotify":(a)=>{openspotify(a)}}, "gallery":(a)=>{opengallery(a)}}
    }
    }

  if (localStorage.getItem("run")!=""){
    a=localStorage.getItem("run").split("#")
    if (a[1]=="close"){
      try{
        delete apps[a[0]]
      } catch{}
    }
    try{
      apps[a[0]]["fct"][a[1]](a[0])
    }catch{}
    localStorage.setItem("run","")
  }

}
