import './views/video.js';
import './views/label.js';
import './views/cardsHover.js'
import './views/cardsFilter.js'


// jQuery
$(document).ready(() => {
  const button = $('.top-secondView__button');
  const cross = $('.popup-cross');
  const popup = $('.popup');
  const background = $('.popup-wrapper');
  const form = $('.popup-form');

  hideAll();

  button.click((e) => {
    e.preventDefault();
    showAll();
  })

  cross.click((e) => {
    hideAll();
  })

  function showAll() {
    popup.show(0);
    background.show(0);
    form.show(300);
  }

  function hideAll() {
    popup.hide(0);
    background.hide(0);
    form.hide(0);
  }


  
})
