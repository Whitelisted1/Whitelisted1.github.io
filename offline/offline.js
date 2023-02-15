const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function randomInteger(min, max) {
    return  Math.floor(Math.random()*(max-min+1)+min);
}

mainTitle = document.getElementById("Whitelisted");
subTitle = document.getElementById("WhitelistedSubText");

mainTitleText = "Whitelisted";
subTitleText = "You are offline.";

(async() => {
    for (var i = 0; i < mainTitleText.length; i++) {
        mainTitle.innerText += mainTitleText[i];
        await sleep(randomInteger(80, 175));
    }

    await sleep(275);
    mainTitle.classList.remove('blinkingCursor');
    subTitle.classList.add('blinkingCursor');
    
    for (var i = 0; i < subTitleText.length; i++) {
        subTitle.innerText += subTitleText[i];
        await sleep(randomInteger(80, 175));
    }
})();

// ------

function checkUpdateStatus() {
    if (navigator.onLine) {
        // this.window.location = "/";
    } else {
        console.log("you are still offline.");
    }
}

setInterval(checkUpdateStatus, 5000);

checkUpdateStatus();