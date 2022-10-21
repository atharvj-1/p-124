function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);

    canvas=createCanvas(600,500);
    canvas.position(650,100);
    
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}

function modalLoaded(){
    console.log('poseNet is initialise');
}

function gotPoses(results){
    if (results.lenght > 0){
        console.log(results);
    }
}

function draw(){
    background("cyan");
}