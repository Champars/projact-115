function preload() {

}

function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();
    pn = ml5.poseNet(video, modelloaded);
    pn.on('pose', gotposes)
}


function draw() {
    image(video, 0, 0, 450, 400);
}

function modelloaded() {
    console.log("Posenet Is Loaded");
}

function snapshot() {
    save('mustache.png');
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
    }
}