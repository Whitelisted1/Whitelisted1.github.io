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

    // -----

    
})();


(async() => {
    async function checkUpdateStatus() {
        timesTried = 0;
        timeUntilRetryText = document.getElementById('onlineUpdateText');
        timesRetriedText = document.getElementById('timesRetried');
        
        while (true) {
            timesTried ++;
            for (var i = 5; i > -1; i--) {
                timeUntilRetryText.innerText = i;
                await sleep(1000);
            }
            
            // If the client is now online or the client is manually viewing the page
            if (navigator.onLine) {
                window.location.reload();
            } else {
                console.log("Client is still offline. Client has attempted to connect " + timesTried + " time(s)");
            }
            timesRetriedText.innerText = timesTried;
        }
    }

    await checkUpdateStatus();
})();