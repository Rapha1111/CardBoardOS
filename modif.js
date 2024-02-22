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


//forever(()=>{
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
  objtext[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+text[i]["y"]+(text[i]["h"]*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)/2)-(Math.min(Math.max(101-text[i]["z"], 1), 100))
  objtext[i]["width"] = text[i]["w"]*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)
  objtext[i]["height"] = text[i]["h"]*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)


  objtext2[i]["x"] = parseInt(localStorage.getItem("alpha"))*3+(text[i]["x"]*-3)+1080
  if ($_GET("o")=="d"){
  objtext2[i]["x"] = objtext2[i]["x"] + (Math.min(Math.max(text[i]["z"], 1), 100)/5)
  } else {
    objtext2[i]["x"] = objtext2[i]["x"] - (Math.min(Math.max(text[i]["z"], 1), 100)/5)

  }

  objtext2[i]["y"] = parseInt(localStorage.getItem("gamma"))*3-255+text[i]["y"]+(text[i]["h"]*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)/2)-(Math.min(Math.max(101-text[i]["z"], 1), 100))
  objtext2[i]["width"] = text[i]["w"]*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)
  objtext2[i]["height"] = text[i]["h"]*(Math.min(Math.max(101-text[i]["z"], 1), 100)/3)
}
for (let i = 100; i > 0; i--) {
  for (let j = 0; j < text.length; j++) {
    if (text[j]["z"] == i){
      objtext[j].sendToFront()
      objtext2[j].sendToFront()
    }
  }

}


function reloadimg(){
  if(text){
  console.log(text)
  if (text.length>objtext.length-2){
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
    objtext[i].text(text[i]["text"])
    objtext2[i].text(text[i]["text"])
  }
  for (let i = 0; i < objtext.length; i++) {
    objtext[i]["x"] = 10000000
    objtext[i]["y"] = 10000000
    objtext2[i]["x"] = 10000000
    objtext2[i]["y"] = 10000000
  }
}}

