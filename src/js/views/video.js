$(document).ready(() => {

  //Variables
  const video = $('.top-video');
  const rectangle = $('.top-rectangle');
  const firstView = $('.top-firstView');
  const secondView = $('.top-secondView');

  //Animate functions
  
  const showVideo = () => {
    rectangle.animate({
      left: '150%'
    },2000);
    setTimeout(() => {
      video.show();
    },1000);
  };

  const showFirstView = () =>{
    setTimeout(() => {
      firstView.animate({
        top: '50%',
        opacity: 1
      },1200).promise().then(() => {
        firstView.animate({
          top: '45%',
          opacity: 0
        },1200);
      });
    },2000);
  };

  const showSecondView = () => {
    setTimeout(() => {
      secondView.animate({
        top: '50%',
        opacity: 1
      },1200)
    },4000);
  }


  
  showVideo();
  showFirstView();
  showSecondView();
  
});
