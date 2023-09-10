import './index.html';
import './index.scss';
import mainImage from './img/1.png'
import negotiation from './img/negotiation.svg'
import deal from './img/deal.svg'
import './modules/slider';

//images 
const imgTransparent = document.querySelector('.about-image');
const imageSecond = new Image();
imageSecond.src = mainImage;
imageSecond.width = 700;
imageSecond.className = 'img'
imgTransparent.append(imageSecond);

const iconOne = document.querySelector('.about-icon__second');
const icon = new Image();
icon.src = negotiation;
icon.className = 'img'
iconOne.append(icon);

const iconSecond = document.querySelector('.about-icon__one');
const iconDeal = new Image();
iconDeal.src = deal;
iconSecond.append(iconDeal);



//advantages numbers
document.addEventListener('DOMContentLoaded', function() {
    var paragraphs = document.querySelectorAll('.about-advantages p');
    for (var i = 0; i < paragraphs.length; i++) {
        
        var span = document.createElement('span');
        span.innerText = i + 1;
        span.style.cssText = 'font-size:16px;width:40px; height:40px; background: rgba(213,80,81, .4); border-radius: 50%; display: flex;justify-content:center;align-items:center; color: #000; text-align: center; position:absolute;margin-right:-30px;margin-top:-15px;';
        span.innerText = (i + 1) + '.';

        paragraphs[i].insertBefore(span, paragraphs[i].firstChild);
    }
});


// dark mode
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.classList.toggle('active');
    
    var containers = document.querySelectorAll('.about-container');
    containers.forEach(function(container) {
        container.classList.toggle('dark-mode');
    });

    var subs = document.querySelectorAll('.about-sub');
    subs.forEach(function(sub) {
        sub.classList.toggle('dark-mode');
    });

    var dropdownContents = document.querySelectorAll('.about-dropdown__content');
    dropdownContents.forEach(function(content) {
        content.classList.toggle('dark-mode');
    });
});

// ltr mode
document.getElementById('toggleDirection').addEventListener('click', function() {
    document.body.classList.toggle('ltr-mode');
    this.classList.toggle('active');

    var elementsToToggle = document.querySelectorAll('.about-title, .about-description, .about-info,.about-advantages__details, .about-text, .about-image');
    elementsToToggle.forEach(function(element) {
        element.classList.toggle('active');
    });
});



