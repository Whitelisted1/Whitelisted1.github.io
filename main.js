const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// function findAngle(x1, y1, x2, y2) {
//     const dy = y2 - y1;
//     const dx = x2 - x1;
//     const radians = Math.atan2(dy, dx);
//     const degrees = radians * 180 / Math.PI;
//     return degrees;
// }

function randomInteger(min, max) {
    return  Math.floor(Math.random()*(max-min+1)+min);
}

// ---

// cursorFollow = document.getElementsByClassName('cursorFollow')[0];

// Make the cursor follow element follow the mouse
// mouseMoveUpdateCount = 2;
// document.addEventListener('mousemove', (e) => {
//     mouseMoveUpdateCount--;
    
//     if(mouseMoveUpdateCount == 0) {
//         cursorFollow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        
//         mouseMoveUpdateCount = 5;
//     }
// });

mainTitle = document.getElementById("Whitelisted");
mainTitleText = "Whitelisted";

(async() => {
    for (var i = 0; i < mainTitleText.length; i++) {
        mainTitle.innerText += mainTitleText[i];
        await sleep(randomInteger(80, 175));
    }
})();

// background = document.getElementsByClassName('backgroundImage')[0];
// window.addEventListener("resize", (e) => {
//     aspectRatioDecimal = document.body.clientWidth/document.body.clientHeight;
    
//     console.log(aspectRatioDecimal);
//     thinMode = aspectRatioDecimal < .95;
    
//     if(thinMode) {
//         console.log("In thin mode!")
//     } else {
//         console.log("No longer in thin mode!")
//     }
// });

particlesJS("background", {"particles":{"number":{"value":45,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":1,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":.5,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.2}},"bubble":{"distance":400,"size":15,"duration":0.5,"opacity":0.5,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
