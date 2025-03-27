let my_capture;

function setup() {
  createCanvas(640, 480);
  my_capture = createCapture(VIDEO);
  my_capture.size(640, 480);
  my_capture.hide();
}

function draw() {
  image(my_capture, 0, 0);
  
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    if (pixels[i] < 128) {
      pixels[i] = 255 - pixels[i];     
      pixels[i + 1] = 255 - pixels[i + 1]; 
      pixels[i + 2] = 255 - pixels[i + 2]; 
    }
  }
  updatePixels();
  
  let mode = floor(frameCount / 60) % 4;
  if (mode === 0) {
    filter(GRAY);
  } else if (mode === 1) {
    filter(INVERT);
  } else if (mode === 2) {
    filter(THRESHOLD, 0.5);
  } else if (mode === 3) {
    filter(POSTERIZE, 3);
  }
}
