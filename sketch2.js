
let slider, current_value, my_button;
function setup(){
    createCanvas(400,400);
    slider = createSlider(0,200,25,5);
    slider.position(10,10);

    button = createButton("click")
    button.position(10,40);

    button.mousePressed(repaint)

    r = 100
    g = 150
    b = 200
}
function draw(){
    current_value = slider.value()
    console.log(current_value)
    background(220);

    fill(r,g,b)
    circle(width/2, height/2, current_value);
}

function repaint(){
    console.log("button is clicked")
    r = random(255)
    g = random(255)
    b = random(255)
}