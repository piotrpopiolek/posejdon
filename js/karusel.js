let time = 3000;
let i = 0;
let slidesAbout = [];
slidesAbout[0] = 'images/g1.jpg';
slidesAbout[1] = 'images/g2.jpg';
slidesAbout[2] = 'images/g3.jpg';
slidesAbout[3] = 'images/g4.jpg';

function changeSlideAbout() {
  document.carouselAbout.src = slidesAbout[i];
  if (i < slidesAbout.length - 1) {
    i++;
  }
  else {
    i = 0;
  }
  setTimeout("changeSlideAbout()", time);
}

window.onload = changeSlideAbout;
