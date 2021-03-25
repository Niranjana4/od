bottle = "";
status_bo="";
object_bottle=[];

function preload() {
    bottle_img = loadImage("bottle.jpeg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_bo").innerHTML="Status= detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status_bo=true;
    objectDetector.detect(bottle_img, gotResult);
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
    image(bottle_img, 0, 0, 640, 420);

    if(status_bo !=""){
        for(i=0; i< objects.length; i++){
            document.getElementById("status_bo").innerHTML="Status= Object Detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}