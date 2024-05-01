/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

const white = [255, 255, 255];
const black = [0, 0, 0];
const appleColour = [217, 2, 2];
const appleTopLipColour = [143, 1, 1];
const appleBottomLipColour = [252, 3, 32];

function Apple(tilt_value, eye_value, mouth_type) {
 
  let eyeSize = 4;
  let PupilSize = int(eyeSize/1.5);
  let centerX = 0;
  let Iy = -2;
  let DistanceBetweenEyes = 5

  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // apple
  noStroke();
  fill(appleColour);
  ellipse(centerX-2.5, 0, 10,15);
  ellipse(centerX+2.5, 0, 10,15);

  //stem
  fill(black);
  beginShape();
  vertex(0, -6);
  vertex(-2, -10);
  vertex(0, -9.5);
  endShape(CLOSE);



  // middle eye
  if (eye_value === 1 ) {
  
    fill(white);
    ellipse(centerX, Iy-1, 10,eyeSize);

    fill(black);
    ellipse(centerX,Iy-1,eyeSize);

    fill(white);
    ellipse(centerX,Iy-1,PupilSize);   
  }

 // two eyes
  if (eye_value === 2) {

    fill(white);
    // eye shape
    ellipse(centerX - DistanceBetweenEyes, Iy,10, eyeSize);
    ellipse(centerX + DistanceBetweenEyes, Iy, 10, eyeSize);

    // irises
    fill(black);
    ellipse(centerX-DistanceBetweenEyes, Iy, eyeSize);
    ellipse(centerX+ DistanceBetweenEyes, Iy, eyeSize);

    //pupils
    noStroke();
    fill(white);
    ellipse(centerX-DistanceBetweenEyes, Iy, PupilSize);
    ellipse(centerX+DistanceBetweenEyes, Iy, PupilSize);

  }

  if (eye_value === 3){

    // middle eye
    fill(white);
    ellipse(centerX, Iy-2, 10,eyeSize);

    fill(black);
    ellipse(centerX,Iy-2,eyeSize);

    fill(white);
    ellipse(centerX,Iy-2,PupilSize);   

    //two eyes

      // eye shape
      ellipse(centerX - DistanceBetweenEyes, Iy+2,10, eyeSize);
      ellipse(centerX + DistanceBetweenEyes, Iy+2, 10, eyeSize);
  
      // irises
      fill(fg_color3);
      ellipse(centerX-DistanceBetweenEyes, Iy+2, eyeSize);
      ellipse(centerX+ DistanceBetweenEyes, Iy+2, eyeSize);
  
      //pupils
      noStroke();
      fill(white);
      ellipse(centerX-DistanceBetweenEyes, Iy+2, PupilSize);
      ellipse(centerX+DistanceBetweenEyes, Iy+2, PupilSize);



  }

  // mouth

  if (mouth_type === 2){

   fill(appleTopLipColour);

   beginShape();
   vertex(0,1);
   vertex(1,0);
   vertex(5,3);
   vertex(-5,3);
   vertex(-1,0);
   endShape(CLOSE);

   fill(appleBottomLipColour);

   beginShape();
   vertex(5,3);
   vertex(2,5);
   vertex(-2,5);
   vertex(-5,3);
   endShape(CLOSE);

   line(5,3,-5,3);
  }

}


function Grapes( eye_value, eye_type,mouth_type, nose_type) {

  const white = [255, 255, 255];
  const grapeColour1 = [105, 78, 191]; // light purple
  const grapeColour2 = [52, 26, 138]; // dark purple
  const grapeColour3 = [166,58,174]; //light pink
  const grapeColour4 = [23,21,71]; // dark blue
  const grapeColour5 = [109,38,90]; //dark pink
  
  const stemColour = [52,88,57];

  let grapeColours = [grapeColour1, grapeColour2,grapeColour3,grapeColour4,grapeColour5]; // these colours will be randomised with each grape so they all are different colours
  ellipseMode(CENTER);


  
  // grapes
 


  // top row of grapes
  push();
  fill(random(grapeColours));
  ellipse(-4,-7,5); // left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(4,-7,5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(0,-7,5.5); // middle grape
  pop();

  // stem
  fill(stemColour);
  beginShape();
  vertex(0, -5);
  vertex(-1, -10);
  vertex(1, -10);
  endShape(CLOSE);

  // second from top row of grapes
  push();
  fill(random(grapeColours));
  ellipse(-5, -4, 5); // left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(5,-4, 5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(-2,-4, 6); // middle left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(2,-4, 6); // middle right grape
  pop();

  //bottom grape
  push();
  fill(random(grapeColours));
  ellipse(0,7,5);
  pop();
  
  //second from bottom row of grapes
  push();
  fill(random(grapeColours));
  ellipse(2,4,5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(-2,4,5); // left grape
  pop();

  // middle row of grapes
  push();
  fill(random(grapeColours));
  ellipse(-4,0,5); // left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(4,0,5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(0,0,5.5); // middle grape
  pop();

 
  //eyes 
  if (eye_value === 1){ //the grapes will have 1 eye

    //whites of eye
    push();
    fill(white);
    ellipse(0,0,3);
    pop();

    // pupil
    push();
    fill(black);
    ellipse(0,0,2);
    pop();

  }

  if(eye_value === 2){ // the grapes will have 2 eyes

    // whites of eyes
    push();
    fill(white);
    ellipse(-4.5,0, 3);
    ellipse(4.5, 0, 3);
    pop();

    //pupil
    push();
    fill(black);
    ellipse(-4.5,0,2);
    ellipse(4.5, 0, 2);
    pop();
  }

  if(eye_value ===3){ // the grapes will have 3 eyes

    //whites of eyes
    push();
    fill(white);
    ellipse(-4.5,0,3);
    ellipse(0,0,3);
    ellipse(4.5,0,3);
    pop;

    //pupil
    push();
    fill(black);
    ellipse(-4.5,0,2);
    ellipse(0,0,2);
    ellipse(4.5,0,2);
    pop();
  }


  if (mouth_type === 2){
    noFill();
    stroke(black);
    curve(4,-3,2,5,-2,5,-4,-3);

  }

  if (nose_type === 2){

    strokeWeight(0.5);
    stroke(black);
    line (1, 0, 1.5, 3);
    line (1.5,3,0,3);

  }

  
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function Pear(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
