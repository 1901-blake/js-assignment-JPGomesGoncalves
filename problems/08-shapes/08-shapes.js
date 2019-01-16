/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

  if(shape.toLowerCase() == 'square'){
    let lengtharr = [height];
    for (let row = 0; row < height; row++) {

      for (let col = 0; col < height; col++) {

        lengtharr[row,col] = character;
      }
      console.log(lengtharr); 
    }
  }
  else if(shape.toLowerCase() == 'triangle'){
    let lengtharr = [height];
    let colinc = 1;

    for (let row = 0; row < height; row++) {
      if (colinc <= height) {
        
      
        for (let col = 0; col < colinc; col++) {

          lengtharr[row,col] = character;
        }
      }
      colinc++;
      console.log(lengtharr); 
    }
  }
  else if(shape.toLowerCase() == 'diamond'){
    let lengtharr = [];
    let pattern = 0;// iadjusts the characters indexes in each row
    let balance = 0;// keep track of how many character are on each side
    let decrease = false;// halfway mark indicator
    let thatextragap = false;// offsets the pattern so that it fixes every even number with the same patter after the halfway mark is reached
    
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < height; col++) 
      {
        if (col < Math.trunc(height/2) - pattern || col > Math.trunc(height/2) + pattern) {
          lengtharr[row,col] = '_';
        }
          if (col === Math.trunc(height/2)) {
            lengtharr[row,col] = character;
            lengtharr[row,col + pattern] = character;
            lengtharr[row,col - pattern] = character;
          }

      }

      if (balance + 2 >= height) {
        decrease = true;
      }

        if (decrease ===true ) {
          pattern--;
          if (height % 2 == 0 && thatextragap == false) {
            pattern++;
            thatextragap = true;
          }
        } else{
          pattern++;
          balance += 2;
        }

      console.log(lengtharr); 
    }
  }
}

printShape('diamond',6,'@');