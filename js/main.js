/// <reference path="../typings/globals/jquery/index.d.ts" />

function disableHiddenInputs() {
  let form = $('form');
    console.log(form.find('.form-control'));
    [...form.find('.form-group')].forEach((elem) => {
      let jq = $(elem);
      console.log(jq.css('display'))
      if (jq.css('display') == 'none') {
        console.log(jq.find('input'))
        jq.find('input').attr('disabled', true);
      } else {
        jq.find('input').attr('disabled', false);
      }
    });
}

$('form').on('submit', (event) => {
  event.preventDefault();

  let prev = $(`.tab[href="#${event.target.id}"]`);
  prev.addClass('done');
  prev.find('img').get(0).src = 'imgs/icon_complete.png';
  
  let tabs = $('.tabs');
  tabs.removeClass('d-none');
  tabs.addClass('d-flex');

  if (event.target.nextElementSibling) {
    let nextForm = $(event.target.nextElementSibling);
    disableHiddenInputs();
    let next = $(`.tab[href="#${nextForm.get(0).id}"]`);
    next.removeClass('hidden');
    next.tab('show');
  }
  let formData = new FormData(event.target)
  console.log(...formData.entries());
});

window.addEventListener('resize', disableHiddenInputs)