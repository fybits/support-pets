/// <reference path="../../typings/globals/jquery/index.d.ts" />

const countdown = $('.countdown');
let time = countdown.data('start-time');

setInterval(()=> {
    let digits = countdown.children();
    while (digits.length > 0) {
        let num = 0;
        switch (digits.data('scale')) {
            case 'd':
                num = Math.floor((time/360/24)%99);
                break
            case 'h':
                num = Math.floor((time/3600)%24);
                break
            case 'm':
                num = Math.floor((time/60)%60);
                break
            case 's':
                num = Math.floor(time%60);
                break
        }
        digits.children().first().text(String(num).padStart(2, '0'));
        digits = digits.next();
    }
    time--;
}, 1000);

