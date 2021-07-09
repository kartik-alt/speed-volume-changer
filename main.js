rightwristy=0;
leftwristx=0;
leftwristy=0;
scoreRwrist=0;
scoreLwrist=0;
var song="";
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
pn=ml5.poseNet(video,modelLoaded);
pn.on("pose",gotPoses);

}
function draw(){
image(video ,0,0,600,500);
stroke ("red");
fill("red");
if(scoreLwrist>0.2){
circle(leftwristx,leftwristy,50);
if(leftwristy>0  && leftwristy<=100 ){
document.getElementById("vol1").innerHTML="volume:0.1";
song.setVolume(0.1);
}

if(leftwristy>100 && leftwristy<=250){
document.getElementById("vol1").innerHTML="volume:0.5";
song.setVolume(0.5);
}

if(leftwristy>250 && leftwristy<=350){
    document.getElementById("vol1").innerHTML="volume:0.7";
    song.setVolume(0.7);
    }

if(leftwristy>350 && leftwristy<=500){
        document.getElementById("vol1").innerHTML="volume:1";
        song.setVolume(1);
        }
}

if(scoreRwrist>0.2){
     circle(rightwristx,rightwristy,50);

if(rightwristy>0 && rightwristy<=100){
document.getElementById("speed1").innerHTML="speed:0.5";
 song.rate(0.5);
        }

if(rightwristy>100 && rightwristy<=200){
document.getElementById("speed1").innerHTML="speed:1";
 song.rate(1);
            }


if(rightwristy>200 && rightwristy<=350){
document.getElementById("speed1").innerHTML="speed:1.5";
 song.rate(1.5);
                }

if(rightwristy>350 && rightwristy<=500){
document.getElementById("speed1").innerHTML="speed:2";
 song.rate(2);


}






 }



}





function preload(){
    song=loadSound("music.mp3");
}

function play(){
song.play()
song.setVolume(1);
song.rate(1);

}

function modelLoaded(){
console.log("model has loaded")

}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    scoreRwrist=results[0].pose.keypoints[10].score;
    scoreLwrist=results[0].pose.keypoints[9].score;
    console.log("rwx= "+rightwristx+"rwy= "+rightwristy);
    console.log("lwx= "+leftwristx+"lwy= "+leftwristy);
    console.log("scoreRwrist= "+scoreRwrist+"scoreLwrist= "+scoreLwrist);
}

}