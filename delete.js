function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

setBackdropColor("#97CCE8")
var sol = new Rectangle({
  width: 1000, 
  height: 1000, 
  color: "#61EC87",
  y: 800-maxY
})
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}
/*
var test = new Image({
  url: "https://www.missnumerique.com/blog/wp-content/uploads/Paysage-en-panoramique-par-Kenneth-Hargrave.jpg",
  x: 0,
  width:maxX*5,
  height:maxY*5
})
var test2 = new Image({
  url: "https://www.missnumerique.com/blog/wp-content/uploads/Paysage-en-panoramique-par-Kenneth-Hargrave.jpg",
  x: 0,
  width:maxX*5,
  height:maxY*5
})*/

intouch = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var data = [{"img":"https://metaverse.rapha1112.repl.co/meuble/maison.svg","x":20, "y":0, "z": 50, "color":"black", "w":10, "h":10},{"img":"https://metaverse.rapha1112.repl.co/meuble/maison.svg","x":90, "y":0, "z": 20, "color":"pink", "w":10, "h":10},{"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWekNUcroskKDY6EQdBxVP3JNUBGS1VKx_6w&usqp=CAU","x":-20, "y":0, "z": 50, "color":"red", "w":10, "h":10}]

var objets = []
var objets2 = []
repeat(10, () => {
  var mbl = new Image({
  url: "https://metaverse.rapha1112.repl.co/meuble/maison.svg",
  width:1000,
  height:1000,
  x:100000000,
  y:100000000
})
objets.push(mbl)
  var mbl2 = new Image({
  url: "https://metaverse.rapha1112.repl.co/meuble/maison.svg",
  width:1000,
  height:1000,
  x:100000000,
  y:100000000
})
objets2.push(mbl2)
})

var posx = 0
var posz = 0
var vitesse = 1

if ($_GET("o")=="d"){
var center = new Circle({radius: 5, color: "white", x:
-5, y: 0})
} else {
  var center = new Circle({radius: 5, color: "white", x:
5, y: 0})
}
after(3, "seconds", ()=>{
  reloadimg()
forever(()=>{
  if (JSON.stringify(data) != localStorage.getItem("data")){
    data = JSON.parse(localStorage.getItem("data"))
    reloadimg()
  }
  /*test.x = parseInt(localStorage.getItem("alpha"))*3-maxX
  test.y = parseInt(localStorage.getItem("gamma"))*3-maxY-50
  test2.x = (parseInt(localStorage.getItem("alpha"))*3-maxX)+360*3
  test2.y = (parseInt(localStorage.getItem("gamma"))*3-maxY-50)*/
  sol.y = (parseInt(localStorage.getItem("gamma"))*3-maxY-50)-540
color = "white"
size = 5
for (let i = 0; i < data.length; i++) {
  var d={}
  posx=localStorage.getItem("x")
  posz=localStorage.getItem("z")
  
  if (data[i]["x"]+posx < 0){
    if (data[i]["z"]+posz < 0){
      d.x=90+calcAngle(data[i]["z"]+posz, data[i]["x"]+posx)
      d.z=Math.sqrt((data[i]["z"]+posz*data[i]["z"]+posz)+(data[i]["x"]+posx)*(data[i]["x"]+posx))
    } else {
      d.x=180+calcAngle(data[i]["z"]+posz, data[i]["x"]+posx)
      d.z=Math.sqrt((data[i]["z"]+posz*data[i]["z"]+posz)+(data[i]["x"]+posx)*(data[i]["x"]+posx))
    }
  } else {
    if (data[i]["z"]+posz < 0){
      d.x=0+calcAngle(data[i]["z"]+posz, data[i]["x"]+posx)
      d.z=Math.sqrt((data[i]["z"]+posz*data[i]["z"]+posz)+(data[i]["x"]+posx)*(data[i]["x"]+posx))
    } else {
      d.x=270+calcAngle(data[i]["z"]+posz, data[i]["x"]+posx)
      d.z=Math.sqrt((data[i]["z"]+posz*data[i]["z"]+posz)+(data[i]["x"]+posx)*(data[i]["x"]+posx))
    }
  }

  objets[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(d.x*-3)
  if ($_GET("o")=="d"){
    objets[i]["x"] = objets[i]["x"] + (Math.min(Math.max(d.z, 1), 100)/5)
  } else {
    objets[i]["x"] = objets[i]["x"] - (Math.min(Math.max(d.z, 1), 100)/5)
  }
  objets[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+data[i]["y"]+(data[i]["h"]*(Math.min(Math.max(101-d.z, 1), 100)/3)/2)-(Math.min(Math.max(101-d.z, 1), 100))
  objets[i]["width"] = data[i]["w"]*(Math.min(Math.max(101-d.z, 1), 100)/3)
  objets[i]["height"] = data[i]["h"]*(Math.min(Math.max(101-d.z, 1), 100)/3)
 
  
  objets2[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(d.x*-3)+1080
  if ($_GET("o")=="d"){
  objets2[i]["x"] = objets2[i]["x"] + (Math.min(Math.max(d.z, 1), 100)/5)
  } else {
    objets2[i]["x"] = objets2[i]["x"] - (Math.min(Math.max(d.z, 1), 100)/5)
    
  }
  
  objets2[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+data[i]["y"]+(data[i]["h"]*(Math.min(Math.max(101-d.z, 1), 100)/3)/2)-(Math.min(Math.max(101-d.z, 1), 100))
  objets2[i]["width"] = data[i]["w"]*(Math.min(Math.max(101-d.z, 1), 100)/3)
  objets2[i]["height"] = data[i]["h"]*(Math.min(Math.max(101-d.z, 1), 100)/3)
  if (objets[i].touching(center) || objets2[i].touching(center)){
    if (data[i]["color"]){
      color = data[i]["color"]
    }
  if (data[i]["setworld"]||data[i]["setscene"]){

    size = 5+(intouch[i]/10)
    intouch[i]+= 0.1
    size = 5+intouch[i]
    if (size > 20){
      intouch[i]= 0
      if (data[i]["setworld"]){
        localStorage.setItem("monde", data[i]["setworld"])
        localStorage.setItem("scene", "hub")
      } else if (data[i]["setscene"]) {
        localStorage.setItem("scene", data[i]["setscene"])
      }
    }}
  } else {
    intouch[i] = 0
  }
}
for (let i = 100; i > 0; i--) {
  for (let j = 0; j < data.length; j++) {
    if (data[j]["z"] == i){
      objets[j].sendToFront()
      objets2[j].sendToFront()
    }
  }
  
}

center.color = color
center.radius = size
center.sendToFront()






/*
if(gamepadIndex !== undefined) {
  // a gamepad is connected and has an index
  const myGamepad = navigator.getGamepads()[gamepadIndex];
  myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
      if(isPressed) {
          if (buttonIndex==8){
            monde = prompt("nom du monde")
            place(monde)
          } else if (buttonIndex==9){
            spectat = prompt("Qui voulez-vous regarder ?")
            player = 0
          } else if (buttonIndex==12){
            say=prompt("message")
after(5, "seconds", () => {
say=""
})
          }
      }
  })
  if (myGamepad.axes[0] > 0.2){
    posx+=Math.floor(vitesse/4)
  }
  if (myGamepad.axes[0] < -0.2){
    posx+=Math.floor(vitesse*-1/4)
  }
  if (myGamepad.axes[1] > 0.2){
    posz+=Math.floor(vitesse*-1/4)
  }
  if (myGamepad.axes[1] < -0.2){
    posz+=Math.floor(vitesse/4)
  }
}*/
})})

function reloadimg(){
  for (let i = 0; i < data.length; i++) {
    objets[i].setImageURL(data[i]["img"])
    objets2[i].setImageURL(data[i]["img"])
  }
  for (let i = 0; i < objets.length; i++) {
    objets[i]["x"] = 10000000
    objets[i]["y"] = 10000000
    objets2[i]["x"] = 10000000
    objets2[i]["y"] = 10000000
  }
}