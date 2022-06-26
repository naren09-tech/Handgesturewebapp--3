prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is - "+prediction_1;
    speak_data_2="The second prediction is- "+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log("ml5 version - ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O22iHm3TP/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is Loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
            document.getElementById("result_emotion_name").innerHTML=results[0].label;
            document.getElementById("result_emotion_name2").innerHTML=results[0].label;
            prediction_1=results[0].label;
            prediction_2=results[1].label;
            speak();
            if(prediction_1=="Amazing"){
                document.getElementById("result_emotion_name").innerHTML="&#128076;";
            }
            else if(prediction_1=="Victory"){
                document.getElementById("result_emotion_name").innerHTML="&#9996;";
                
            }
            else if(prediction_1=="Best"){
                document.getElementById("result_emotion_name").innerHTML="&#128076;";
                
            }
            else{
                document.getElementById("result_emotion_name2").innerHTML="&#9995;";    
            }



            if(prediction_2=="Amazing"){
                document.getElementById("result_emotion_name2").innerHTML="&#128076;";
            }
            else if(prediction_2=="Victory"){
                document.getElementById("result_emotion_name2").innerHTML="&#9996;";
                
            }
            else if(prediction_2=="Best"){
                document.getElementById("result_emotion_name2").innerHTML="&#128076;";
                
            }
            else{
                document.getElementById("result_emotion_name2").innerHTML="&#9995;";    
            }             
    }
}
//https://teachablemachine.withgoogle.com/models/O22iHm3TP/model.json
//https://teachablemachine.withgoogle.com/models/O22iHm3TP/model.json
//https://teachablemachine.withgoogle.com/models/O22iHm3TP/model.json