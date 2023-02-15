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

cursorFollow = document.getElementsByClassName('cursorFollow')[0];

// Make the cursor follow element follow the mouse
mouseMoveUpdateCount = 2;
document.addEventListener('mousemove', (e) => {
    mouseMoveUpdateCount--;
    
    if(mouseMoveUpdateCount == 0) {
        cursorFollow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        
        mouseMoveUpdateCount = 5;
    }
});

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