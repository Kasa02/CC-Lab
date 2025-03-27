let my_capture, handPose;
let hands = []; 
let currentFilterMode = 0; 
let handWasDetected = false; 

function preload(){
  handPose = ml5.handPose();
}

function setup(){
  createCanvas(640, 480);
  my_capture = createCapture(VIDEO);
  my_capture.size(640, 480);
  my_capture.hide();
  handPose.detectStart(my_capture, gotHands);
}

function draw(){
  background(220);
  image(my_capture, 0, 0, 640, 480);
  
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    if (pixels[i] < 128) {
      pixels[i]     = 255 - pixels[i];     // red
      pixels[i + 1] = 255 - pixels[i + 1]; // green
      pixels[i + 2] = 255 - pixels[i + 2]; // blue
    }
  }
  updatePixels();
  
  // switch filter while hand is detected
  let handDetected = (hands.length > 0);
  if (handDetected && !handWasDetected) {
    currentFilterMode = (currentFilterMode + 1) % 4;
  }
  handWasDetected = handDetected;
  
  //filters
  if (currentFilterMode === 0) {
    filter(GRAY);
  } else if (currentFilterMode === 1) {
    filter(INVERT);
  } else if (currentFilterMode === 2) {
    filter(THRESHOLD, 0.5);
  } else if (currentFilterMode === 3) {
    filter(POSTERIZE, 3);
  }
  

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

function gotHands(results){
  hands = results;
}
