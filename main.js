imgHall = "";
imgMBedroom = "";
imgBathroom = "";
imgKBedroom = "";
imgMulroom = "";
curHeading = "";
curImage = "";
status1 = "";
object = [];

function preload() {}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {}

function hall() {
    curHeading = "Hall";
    curImage = "";
//    window.location = "show.html";
}

function mBedroom() {
    curHeading = "Master Bedroom";
    curImage = "";
//    window.location = "show.html";
}

function bathroom() {
    curHeading = "Bathroom";
    curImage = "";
//    window.location = "show.html";
}

function kBedroom() {
    curHeading = "Kid's Bedroom";
    curImage = "";
//    window.location = "show.html";
}

function mulroom() {
    curHeading = "Multiperpose Room";
    curImage = "";
//    window.location = "show.html";
}

function draw() {
    image(curImage, 0, 0, 640, 420);
    if (status1 != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            percent = floor(object[i].confidence * 100);
            var d = random(100, 255);
            var e = random(100, 255);
            var f = random(100, 255);
            fill("#FF0000");
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke(d, e, f);
            strokeWeight(4);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
    objectDetector.detect(curImage, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    object = result;
}