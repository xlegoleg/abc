$(document).ready(() => {
  const cards = $('.branch-card');
  
  //Events
  cards.mouseover(function(e) {
    classChanger($(this));
  });

  cards.mouseout(function(e) {
    classChanger($(this));
  });

  //Changer
  function classChanger(card) {
    card.toggleClass('branch-card_active');
    card.children('.branch-card__title').toggleClass('branch-card__title_active');
    card.children('.branch-card__descr').toggleClass('branch-card__descr_active');
    card.children('.branch-card__svg').toggleClass('branch-card__svg_active');
  }
});