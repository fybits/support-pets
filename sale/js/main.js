/// <reference path="../../typings/globals/jquery/index.d.ts" />

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
  $('.tab').on('click', (event) => {
    event.preventDefault();
    let newTab = $(event.currentTarget);
    if (!newTab.hasClass('hidden')) {
      newTab.addClass('active');
      newTab.removeClass('done');
      newTab.siblings().removeClass('active');
      newTab.siblings().addClass('done');
      let tabContent = $(`.tab-pane${event.currentTarget.getAttribute('href')}`);
      tabContent.addClass('active');
      tabContent.addClass('show');
      tabContent.siblings().removeClass('active');
      tabContent.siblings().removeClass('show');
    }
  });
  $('.form').on('submit', (event) => {
    event.preventDefault();
    window.location.href = '#form';
    
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
      next.removeClass('done');
      next.tab('show');
    }
    window.scrollTo()
  });
  $('input[type=phone]').mask("(999) 999-9999");
  $('input#card-number').mask("9999 9999 9999 9999");
});

window.addEventListener('resize', disableHiddenInputs)