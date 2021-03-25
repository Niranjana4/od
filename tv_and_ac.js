tvav = "";
status_ac="";
tv_ac=[];

function preload() {
    tvav = loadImage("tvac.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_ac").innerHTML="Status= detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(tvav, gotResult);
}

function gotResult(error, results){
if(error)
{
    console.log(error);
}
else{
    console.log(results);
}
}

function draw() {
    image(tvav, 0, 0, 640, 420);

    
    if(status_ac !=""){
        for(i=0; i< objects.length; i++){
            document.getElementById("status_ac").innerHTML="Status= Object Detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}