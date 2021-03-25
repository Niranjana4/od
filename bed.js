bed = "";
status_be="";
object_bed=[];

function preload() {
    bed = loadImage("bed.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_be").innerHTML="Status= detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status_be=true;
    objectDetector.detect(bed, gotResult);
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
    image(bed, 0, 0, 640, 420);
    
    if(status_be !=""){
        for(i=0; i< objects.length; i++){
            document.getElementById("status_be").innerHTML="Status= Object Detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}