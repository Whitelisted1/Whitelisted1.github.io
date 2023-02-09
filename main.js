function findAngle(x1, y1, x2, y2) {
    const dy = y2 - y1;
    const dx = x2 - x1;
    const radians = Math.atan2(dy, dx);
    const degrees = radians * 180 / Math.PI;
    return degrees;
}

cursorFollow = document.getElementsByClassName('cursorFollow')[0];
background = document.getElementsByClassName('backgroundImage')[0];


// Make the cursor follwo element follow the mouse
mouseMoveUpdateCount = 2;
document.addEventListener('mousemove', (e) => {
    mouseMoveUpdateCount--;

    if(mouseMoveUpdateCount == 0) {
        cursorFollow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';

        mouseMoveUpdateCount = 2;
    }
});

// document.addEventListener('resize', () => {
    
// });