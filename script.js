let images = 
    ['https://i.imgur.com/Pa94msC.jpg', 
     'https://bit.ly/3HSVblI',
     'https://bit.ly/3rPkyPX'];
let curIndex = 0;

function returnImage() {
  if (curIndex == images.length) {
    curIndex = 0;
    return images[curIndex];
  }
  else {
    return images[curIndex];
  }
}

function handleClick() {
 document.getElementById("image").src = 
   returnImage();
  curIndex++;
}