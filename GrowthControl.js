let ifClicked = 0, j = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
    fill(212, 175, 55);
    if (ifClicked == 0) {
      j = j + 1;
    } else {
      j = j - 1;
    }
  
    circle(width/2, height/2, j);
  }

  function mouseClicked() {
    if(ifClicked == 1) {
        ifClicked = 0
    } else {
     ifClicked = 1
    }
  }