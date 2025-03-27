let my_capture, handPose;
let hands = []//dected hands get stored here

function preload(){
    handPose = ml5.handPose();//loading the hand pose model
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    my_capture = createCapture(VIDEO);
    my_capture.hide();
    handPose.detectStart(my_capture, gotHands);
    //starrt the model to detect hands/ model start, looking for hand/ find hand,call gothands

}
function draw(){
    background(220);
    image(my_capture,0,0);

    for(let i = 0; i < hands.length; i++){
        let hand = hands[i];
        let key_points = hands[i].keypoints
        for(let j = 0; j< hand.keypoints.length; j++){
            let keypoint = hand.keypoints[j];
            fill(0,255,0);
            noStroke();
            circle(keypoint.x, keypoint.y,10);

        }
        console.log(hand)
    }
}
function gotHands(results){
    hands = results;

}