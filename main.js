p1="";
p2="";
Webcam.attach('camera');
camera=document.getElementById("camera");

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

function q(){
Webcam.snap(function(image){
document.getElementById("result").innerHTML='<img id="s" src="'+image+'"/>';
});
}
console.log("ml5 version is",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/POppXaqna/model.json',ModelLoaded);

function ModelLoaded(){
console.log("model Loaded");
}

function z(){
m=document.getElementById("s");
x.classify(m,gotResult);

}
function speak(){
synth=window.speechSynthesis;
c1="the first prediction is - "+p1;
c2="the second prediction is - "+p2;
s1=new SpeechSynthesisUtterance(c1+c2);
synth.speak(s1);
}
function gotResult(error,result){
if (error) {
    console.log(error);
}
else{
console.log(result);
p1=result[0].label;
p2=result[1].label;
speak();
document.getElementById("result_emotion_name").innerHTML=result[0].label;
document.getElementById("result_emotion_name2").innerHTML=result[1].label;
if (result[0].label=="happy") {
document.getElementById("p2").innerHTML="&#128512;";
}
if (result[0].label=="neutral") {
    document.getElementById("p2").innerHTML="&#128528;";
    }
    if (result[0].label=="angry") {
        document.getElementById("p2").innerHTML="&#128545;";
        }

        if (result[1].label=="happy") {
            document.getElementById("p3").innerHTML="&#128512;";
            }
            if (result[1].label=="neutral") {
                document.getElementById("p3").innerHTML="&#128528;";
                }
                if (result[1].label=="angry") {
                    document.getElementById("p3").innerHTML="&#128545;";
                    }
}
}