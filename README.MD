# Pages
- /twostep.html
- /threestep.html
# Sale(updated) pages
- /sale/noprogress.html
- /sale/twostep.html

# Counter
To set counter's initial time add `data-start-time` attribute to element with class countdown.

```html
<div class="countdown" data-start-time="2400">
```
To indicate which field is which add `data-scale` attribute to the element, which has element with class `content` as it's child, and set it to a symbol that corresponds to specific time scale e.g. `d`, `h`, `m`, `s`.
```html
<div class="countdown" data-start-time="2400">
    <div class="digits" data-scale="d">
        <div class="content">00</div>
        <div class="caption">Days</div>
    </div>
    <div class="digits" data-scale="h">
        <div class="content">00</div>
        <div class="caption">Hours</div>
    </div>
    <div class="digits" data-scale="m">
        <div class="content">00</div>
        <div class="caption">Minutes</div>
    </div>
    <div class="digits" data-scale="s">
        <div class="content">00</div>
        <div class="caption">Seconds</div>
    </div>
</div>
```
Timer runs as soon as page is loaded.