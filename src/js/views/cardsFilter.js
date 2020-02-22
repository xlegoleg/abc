$(document).ready(() => {
  const tabs = $('.branch-tab');
  let cards = $('.branch-card');

  // tabs.click(function(e) {
  //   let branch = $(this).attr('id');
  //   cards.each((index,card) => {
  //     if(branch == "all"){
  //       $(card).parent().fadeIn(600);
  //     }
  //     else{
  //       $(card).not("."+branch).parent().fadeOut(300);
  //       $(card).filter("."+branch).parent().fadeIn(1200);
  //     }
  //   })
  // });

  tabs.click(function(e) {
    let branch = $(this).attr('id');
    if (branch === "all") {
      $(cards).parent().animate({"width":165,"margin":10},300)
      .animate({"opacity":1},700)
    }
    else {
      $(cards).not('.'+branch).parent().animate({"opacity":0},300)
      .animate({"width":0,"margin":0},700);
      $(cards).filter('.'+branch).parent().animate({"width":165,"margin":10},300)
      .animate({"opacity":1},700)
    }
  })
});