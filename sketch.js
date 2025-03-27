
let slider, current_value;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 200, 25, 1);
  slider.position(10, 10);
}

function draw() {
  current_value = slider.value();
  console.log(current_value);
  background(220);

  circle(width/2, height/2, current_value);
}
