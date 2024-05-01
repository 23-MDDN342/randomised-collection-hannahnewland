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
function Apple(tilt_value, eye_value, mouth_value) {
  const white = [255, 255, 255];
  const fg_color3 = [0, 0, 0];
  const appleColour = [217, 2, 2];
  const appleTopLipColour = [143, 1, 1];
  const appleBottomLipColour = [252, 3, 32];

  let headSize = 20;
  let eyeSize = 4;
  let PupilSize = int(eyeSize/1.5);
  let centerX = 0;
  let Iy = -2;
  let DistanceBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // apple
  noStroke();
  fill(appleColour);
  ellipse(centerX-2.5, 0, 10,15);
  ellipse(centerX+2.5, 0, 10,15);

  //stem
  fill(fg_color3);
  beginShape();
  vertex(0, -6);
  vertex(-2, -10);
  vertex(0, -9.5);
  endShape(CLOSE);



  // middle eye
  if (eye_value === 1 ) {
    //stroke(0,0,0);
    fill(white);
    ellipse(centerX, Iy-1, 10,eyeSize);

    fill(fg_color3);
    ellipse(centerX,Iy-1,eyeSize);

    fill(white);
    ellipse(centerX,Iy-1,PupilSize);   
  }

// // two eyes
  if (eye_value === 2) {
    //stroke(0,0,0);
    fill(white);
    // eye shape
    ellipse(centerX - DistanceBetweenEyes, Iy,10, eyeSize);
    ellipse(centerX + DistanceBetweenEyes, Iy, 10, eyeSize);

    // irises
    fill(fg_color3);
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

    fill(fg_color3);
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
//   // mouth

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


function Grapes() {
  ellipseMode(CENTER);
  
  fill(105, 78, 191);
  
  //noStroke();
  // grapes

  // top row of grapes
  ellipse(-4,-7,5); // left grape
  ellipse(4,-7,5); // right grape
  ellipse(0,-7,5.5); // middle grape
  
  // second from top row of grapes
  ellipse(-5, -4, 5); // left grape
  ellipse(5,-4, 5); // right grape
  ellipse(-2,-4, 6); // middle left grape
  ellipse(2,-4, 6); // middle right grape

  //bottom grape
  ellipse(0,7,5);
  
  //second from bottom row of grapes
  ellipse(2,4,5); // right grape
  ellipse(-2,4,5); // left grape

  // middle row of grapes
  ellipse(-4,0,5); // left grape
  ellipse(4,0,5); // right grape
  ellipse(0,0,5.5); // middle grape

 


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
