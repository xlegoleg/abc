$(document).ready(() => {

  const inputs = $('.popup-form__input');

  inputs.change((e)=> {
    input = $(e.target);
    let label = $(`label[for=${input.attr('id')}]`);
    if (input.val()){
      label.addClass('popup-form__label_active');
    }
    else{
      label.removeClass('popup-form__label_active');
    }
  })
})