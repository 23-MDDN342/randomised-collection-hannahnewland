/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

let pear_tilt = 0;
let apple_tilt = 0;
let grape_tilt = 0;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();

  pear_tilt = Math.random() * 90 - 45;
  apple_tilt = Math.random() * 90 - 45;
  grape_tilt = Math.random() * 90 - 45;

}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(39, 42, 46);
 

        let mouth_type = int(random(1,4));
        let nose_type = int(random( 1, 4));
        let eye_value = int(random(1, 3));
        let eye_type = int(random (1,4));
        let eyebrows_yesno = int(random(1,3));
        let eyebrow_height = random (0 , 6 );
        let eyebrow_length = random(0, 7);


// Pear, located on the right.
        push();

        translate(width/4 *3 , height/2);
        tilt_value = random(-450,450)/10;
        nose_type = int(random(1,4));
        eyebrows_yesno = int(random(1,3));
        eyebrow_height = random(0,6);
        eyebrow_length = random(0,7);

        let pearFeatures = random(0,100);
        if (pearFeatures <70){
          eye_type = 3;
          mouth_type = 3;
        }

        if (eye_value == 2 && eye_type == 3){
        
          eyebrows_yesno = 2;
          eyebrow_height = random(3,6);
          eyebrow_length = random(4.5,7);
        }

        scale(10);
       
        Pear(pear_tilt, eye_value, eye_type,mouth_type,nose_type,eyebrows_yesno,eyebrow_height,eyebrow_length);

        pop();
     
        

// Apple, located in the centre.

push();
translate(width/4 * 2, height/2);
eyebrows_yesno = int(random(1,3));
let appleFeatures = random(0,100);
if (appleFeatures < 70){
  eye_type = 1;
  mouth_type = 1;
}

scale(10);
noStroke();

Apple(apple_tilt, eye_value,mouth_type, eye_type,eyebrows_yesno,eyebrow_height,eyebrow_length);
pop();




// Grapes, located on the left. 
push();
noStroke();

let grapeFeatures = random(0,100);

nose_type = int(random(1,4));
eyebrows_yesno = int(random(1,3));
if (grapeFeatures < 70){

  eye_type = 2;
  mouth_type = 2;

}

tilt_value = random(-45, 45);
print(grape_tilt);

translate(width/4, height/2);
 scale(10);

 Grapes(grape_tilt, eye_value, eye_type,mouth_type,nose_type,eyebrows_yesno,eyebrow_height,eyebrow_length);


pop();

    }






function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
