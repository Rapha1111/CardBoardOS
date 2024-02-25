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

setBackdropColor("#97CCE8")
var sol = new Rectangle({
  width: 1000, 
  height: 1000, 
  color: "#61EC87",
  y: 800-maxY
})
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

var data = []
var text=[]
var objets = []
var objets2 = []
repeat(10, () => {
  var mbl = new Image({
  url: "assets/fondapp.png",
  width:1000,
  height:1000,
  x:100000000,
  y:100000000
})
objets.push(mbl)
    var mbl2 = new Image({
    url: "assets/fondapp.png",
    width:1000,
    height:1000,
    x:100000000,
    y:100000000
  })
objets2.push(mbl2)
})

//initialisation texts
var objtext = []
var objtext2 = []
repeat(10, () => {
  var mbl = new Text({
      text:" ",
      size:12,
      color: "black" ,
      textAlign : "center",
      x:100000000,
      y:100000000
    })
objtext.push(mbl)
    var mbl2 =new Text({
        text:" ",
        size:12,
        color: "black" ,
        textAlign : "center",
        x:100000000,
        y:100000000
      })
objtext2.push(mbl2)
})

//objets
if ($_GET("o")=="d"){
var center = new Circle({radius: 5, color: "white", x:
-3, y: 0})
} else {
  var center = new Circle({radius: 5, color: "white", x:
3, y: 0})
}
after(3, "seconds", ()=>{

    reloadimg()
  loadtext()
forever(()=>{


  sol.color=localStorage.getItem("sol")
  setBackdropColor(localStorage.getItem("bgcolor"))
  
  if (JSON.stringify(data) != localStorage.getItem("data")){
    data = JSON.parse(localStorage.getItem("data"))
    reloadimg()
  }
  if (JSON.stringify(text) != localStorage.getItem("text")){
    text = JSON.parse(localStorage.getItem("text"))
    loadtext()
  }
  /*test.x = parseInt(localStorage.getItem("alpha"))*3-maxX
  test.y = parseInt(localStorage.getItem("gamma"))*3-maxY-50
  test2.x = (parseInt(localStorage.getItem("alpha"))*3-maxX)+360*3
  test2.y = (parseInt(localStorage.getItem("gamma"))*3-maxY-50)*/
  sol.y = (parseInt(localStorage.getItem("gamma"))*3-maxY-50)-540
color = "white"
size = 3
for (let i = 0; i < data.length; i++) {
  objets[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(data[i]["x"]*-3)
  if ($_GET("o")=="d"){
    objets[i]["x"] = objets[i]["x"] + (Math.min(Math.max(data[i]["z"], 1), 100)/5)
  } else {
    objets[i]["x"] = objets[i]["x"] - (Math.min(Math.max(data[i]["z"], 1), 100)/5)
  }
  objets[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+data[i]["y"]+(data[i]["h"]*(Math.min(Math.max(101-data[i]["z"], 1), 100)/3)/2)-(Math.min(Math.max(101-data[i]["z"], 1), 100))
  objets[i]["width"] = data[i]["w"]*(Math.min(Math.max(101-data[i]["z"], 1), 100)/3)
  objets[i]["height"] = data[i]["h"]*(Math.min(Math.max(101-data[i]["z"], 1), 100)/3)
 
  
  objets2[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(data[i]["x"]*-3)+1080
  if ($_GET("o")=="d"){
  objets2[i]["x"] = objets2[i]["x"] + (Math.min(Math.max(data[i]["z"], 1), 100)/5)
  } else {
    objets2[i]["x"] = objets2[i]["x"] - (Math.min(Math.max(data[i]["z"], 1), 100)/5)
    
  }
  
  objets2[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+data[i]["y"]+(data[i]["h"]*(Math.min(Math.max(101-data[i]["z"], 1), 100)/3)/2)-(Math.min(Math.max(101-data[i]["z"], 1), 100))
  objets2[i]["width"] = data[i]["w"]*(Math.min(Math.max(101-data[i]["z"], 1), 100)/3)
  objets2[i]["height"] = data[i]["h"]*(Math.min(Math.max(101-data[i]["z"], 1), 100)/3)
  if (objets[i].touching(center) || objets2[i].touching(center)){
    if (data[i]["color"]){
      color = data[i]["color"]
    }
    if (gamepadclose()){
      localStorage.setItem("run", data[i]["app"]+"#close")
    }

  //interactions
  if (data[i]["onclick"]){
    //size = 5+(intouch[i]/10)
    //intouch[i]+= 0.1
    //size = 5+intouch[i]
    // size > 20 || 
    if (gamepadclick()){
      //intouch[i]= 0
      localStorage.setItem("run", data[i]["onclick"])
    }}
  } else {
    //intouch[i] = 0
  }
}
for (let i = 100; i > 0; i--) {
  for (let j = 0; j < data.length; j++) {
    if (data[j]["z"] == i){
      objets[j].sendToFront()
      objets2[j].sendToFront()
    }
  }

//les texts
  if (JSON.stringify(text) != localStorage.getItem("text")){
      text = JSON.parse(localStorage.getItem("text"))
      reloadimg()
    }
  for (let i = 0; i < text.length; i++) {
    objtext[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(text[i]["x"]*-3)
    if ($_GET("o")=="d"){
      objtext[i]["x"] = objtext[i]["x"] + (Math.min(Math.max(text[i]["z"], 1), 100)/5)
    } else {
      objtext[i]["x"] = objtext[i]["x"] - (Math.min(Math.max(text[i]["z"], 1), 100)/5)
    }
    objtext[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+text[i]["y"]+(5*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)/2)-(Math.min(Math.max(101-text[i]["z"], 1), 100))
    


    objtext2[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(text[i]["x"]*-3)+1080
    if ($_GET("o")=="d"){
    objtext2[i]["x"] = objtext2[i]["x"] + (Math.min(Math.max(text[i]["z"], 1), 100)/5)
    } else {
      objtext2[i]["x"] = objtext2[i]["x"] - (Math.min(Math.max(text[i]["z"], 1), 100)/5)

    }

    objtext2[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+text[i]["y"]+(5*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)/2)-(Math.min(Math.max(101-text[i]["z"], 1), 100))
    
  }
  for (let i = 100; i > 0; i--) {
    for (let j = 0; j < text.length; j++) {
      if (text[j]["z"] == i){
        objtext[j].sendToFront()
        objtext2[j].sendToFront()
      }
    }

  }
  
}

center.color = color
center.radius = size
center.sendToFront()
})})

function reloadimg(){
  if(data){
  console.log(data)
  while(data.length>objets.length){
        var mbl = new Image({
        url: "assets/fondapp.png",
        width:1000,
        height:1000,
        x:100000000,
        y:100000000
      })
      objets.push(mbl)    
  var mbl2 = new Image({
    url: "assets/fondapp.png",
    width:1000,
    height:1000,
    x:100000000,
    y:100000000
    })
    objets2.push(mbl2)
    }
  for (let i = 0; i < data.length; i++) {
    if (objets[i].url!=data[i]["img"]){
    objets[i].setImageURL(data[i]["img"])
    objets2[i].setImageURL(data[i]["img"])
  }}
  for (let i = 0; i < objets.length; i++) {
    objets[i]["x"] = 10000000
    objets[i]["y"] = 10000000
    objets2[i]["x"] = 10000000
    objets2[i]["y"] = 10000000
  }
}
}
function loadtext(){
  if(text){
    console.log(text)
    while (text.length>objtext.length){
       var mbl = new Text({
            text:" ",
            size:12,
            color: "black" ,
            textAlign : "center",
            x:100000000,
            y:100000000
          })
      objtext.push(mbl)
          var mbl2 =new Text({
              text:" ",
              size:12,
              color: "black" ,
              textAlign : "center",
              x:100000000,
              y:100000000
            })
      objtext2.push(mbl2)
      }
    for (let i = 0; i < text.length; i++) {
      objtext[i].text=text[i]["text"]
      objtext2[i].text=text[i]["text"]
      objtext[i].color=text[i]["color"]
      objtext2[i].color=text[i]["color"]
      objtext[i].size=text[i]["size"]
      objtext2[i].size=text[i]["size"]
    }
    for (let i = 0; i < objtext.length; i++) {
      objtext[i]["x"] = 10000000
      objtext[i]["y"] = 10000000
      objtext2[i]["x"] = 10000000
      objtext2[i]["y"] = 10000000
    }
  }
}


function gamepadclick() {
    // Obtenir la liste des gamepads connectés
    const gamepads = navigator.getGamepads();

    // Parcourir tous les gamepads
    for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        // Vérifier si le gamepad est connecté
        if (gamepad && gamepad.connected) {
            // Vérifier si la touche 0 ou 7 est appuyée
            if (gamepad.buttons[0].pressed || gamepad.buttons[7].pressed) {
                return true;
            }
        }
    }

    return false;
}
function gamepadclose() {
    // Obtenir la liste des gamepads connectés
    const gamepads = navigator.getGamepads();

    // Parcourir tous les gamepads
    for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        // Vérifier si le gamepad est connecté
        if (gamepad && gamepad.connected) {
            // Vérifier si la touche 0 ou 7 est appuyée
            if (gamepad.buttons[1].pressed || gamepad.buttons[2].pressed) {
                return true;
            }
        }
    }

    return false;
}