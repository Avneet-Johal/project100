var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start()
{
   recognition.start();
}

recognition.onresult=function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    
    console.log(content);
    if(content=="selfie")
    {
        console.log("taking selfies and to make a Collage");
     speak();
    }
   
} 


function speak()
{
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 10 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
 setTimeout(function() 
 {
    img_id="selfie1"
    take_snapshot();
   save();
 },5000);

setTimeout(function() 
{
   img_id="selfie2"
   take_snapshot();
  save();
},10000);

setTimeout(function() 
{
   img_id="selfie3"
   take_snapshot();
  save();
},15000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
});


  function take_snapshot()
 {
    console.log(img_id);

     Webcam.snap (function(data_uri) {
    if(img_id=="selfie1"){
      document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
   }
   if(img_id="selfie2"){
   document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
  }
  if(img_id="selfie3"){
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
  }
  });
  }