/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [39, 42, 46];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let faceSelector;
let faceGuideCheckbox;

function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);
  slider8 = createSlider(0, 100, 50);
  slider9 = createSlider(0, 100, 50); // not in use
  slider10 = createSlider(0, 100, 50); // not in use

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');
  slider9.parent('slider9Container'); // not in use
  slider10.parent('slider10Container'); // not in use

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}



function draw () {
 noStroke();

  let mode = faceSelector.value();

  background(39, 42, 46);

  let s1 = slider1.value(); //tilt value
  let s2 = slider2.value(); // type of eyes
  let s3 = slider3.value(); // number of eyes
  let s4 = slider4.value(); // type of mouth
  let s5 = slider5.value(); // type of nose 
  let s6 = slider6.value(); // eyebrows, yes/no
  let s7 = slider7.value(); // eyebrow height
  let s8 = slider8.value(); // eyebrow length
  

  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);


  // value indications

  let tilt_value = map(s1, 0, 100, -90, 90);
   let mouth_type = int(map(s4, 0, 100, 1,4));
   let nose_type = int(map( s5, 0, 100, 1, 4));
  let eye_value = int(map(s3, 0, 100, 1, 3));
  let eye_type = int(map(s2, 0, 100, 1,4));
  let eyebrows_yesno = int(map(s6, 0, 100, 1,3));
  let eyebrow_height = map(s7, 0, 100, 0 , 6 );
  let eyebrow_length = map(s8, 0, 100, 0, 7);


  push();
  if (mode == '1') {
    Apple(tilt_value, eye_value,mouth_type, eye_type,eyebrows_yesno,eyebrow_height,eyebrow_length);
  
  }
  if (mode == '2') {
     Pear(tilt_value, eye_value, eye_type,mouth_type,nose_type,eyebrows_yesno,eyebrow_height,eyebrow_length);
  }
  if (mode == '3') {

    randomSeed(3);
    Grapes(tilt_value, eye_value, eye_type,mouth_type, nose_type,eyebrows_yesno,eyebrow_height,eyebrow_length);
  }

  pop();

  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

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
