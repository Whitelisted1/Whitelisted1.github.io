function * generateDigitsOfPi() {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;
    while (true) {
        let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
        yield Number(digit);
        let u = i * 3n;
        u = (u + 1n) * 3n * (u + 2n);
        r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
        q *= 10n * i * (i++ * 2n - 1n);
        t *= u;
    }
}

let iter = generateDigitsOfPi();

window.onload = function() {
    let output = document.getElementById("pitext");
    let updatedHeight = window.innerHeight*1.1;
    window.onresize = function(){
        let updatedHeight = window.innerHeight*1.1;
    }
    
    function displayNextDigits(updateInterval) {
        if(window.updateInterval != 200){
            output.innerText += iter.next().value;
            outputscrollTop = output.scrollHeight;
        }

        if(output.offsetHeight > updatedHeight){
            return true;
        }
        return false;

    };
    

    window.updateInterval = 20;

    function updateCycle(){
        if(displayNextDigits(updateInterval)){
            window.updateInterval = 200;
            console.log("Not loading text, it's not on screen") // Make it so the text scrolls independantly when typing the digits
        } else {
            window.updateInterval = 20;
        }
        setTimeout(updateCycle, window.updateInterval);
    }

    setTimeout(() => {
        updateCycle()
        output.innerHTML += "."
    }, window.updateInterval);

};