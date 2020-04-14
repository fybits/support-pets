/// <reference path="../typings/globals/jquery/index.d.ts" />

function disableHiddenInputs() {
  let form = $('form');
    [...form.find('.form-group')].forEach((elem) => {
      let jq = $(elem);
      if (jq.css('display') == 'none') {
        jq.find('input').attr('disabled', true);
      } else {
        jq.find('input').attr('disabled', false);
      }
    });
}

$(() => {
  
  $('form').on('submit', (event) => {
    event.preventDefault();
  
    let prev = $(`.tab[href="#${event.target.id}"]`);
    prev.addClass('done');
    prev.find('img').get(0).src = 'imgs/icon_complete.png';
    
    let tabs = $('.tabs');
    tabs.removeClass('d-none');
    tabs.addClass('d-flex');
  
    if (event.target.nextElementSibling) {
      console.log('changing')
      let nextForm = $(event.target.nextElementSibling);
      disableHiddenInputs();
      let next = $(`.tab[href="#${nextForm.get(0).id}"]`);
      next.removeClass('hidden');
      next.tab('show');
    }
  });
  $('input[type=phone]').mask("999-999-9999")
});

window.addEventListener('resize', disableHiddenInputs)