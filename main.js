let settings;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}
function updateSettings(changedSettings) {
	document.cookie = "settings=" + btoa(JSON.stringify(changedSettings)) + ";"
	settings = changedSettings;
}
try { settings = JSON.parse(atob(getCookie('settings')));
} catch {
  updateSettings({
      particles: { fpsLimit: 48 }
   });
}
console.log(settings);

function randomInteger(min, max) {
    return  Math.floor(Math.random()*(max-min+1)+min);
}

// ---

mainTitle = document.getElementById("Whitelisted");
mainTitleText = "Whitelisted";

(async() => {
    for (var i = 0; i < mainTitleText.length; i++) {
        mainTitle.innerText += mainTitleText[i];
        await sleep(randomInteger(80, 175));
    }
})();

optionsHide = document.getElementById('optionsHide');
optionsMenu = document.getElementById('options');
optionsHidden = false;
optionsHide.addEventListener('click', () => {
	optionsHidden = !optionsHidden;
	if (optionsHidden) 
		optionsMenu.classList.add("hidden")
	else optionsMenu.classList.remove("hidden")
})

const defaultFPSLimit = settings.particles.fpsLimit;
const maxFPSLimit = 120;
const minFPSLimit = 20;

tsParticles.load('background', {
  fpsLimit: defaultFPSLimit,

  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      attract: {
        distance: 200,
        duration: 1,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
      },
      grab: {
        distance: 200,
        links: {
          blink: false,
          consent: false,
          opacity: .75
        }
      },
      slow: {
        factor: 3,
        radius: 200
      }
    }
  },

  particles: {
    number: {
      value: 45,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#FFFFFF'
    },
    shape: {
      type: 'circle'
    },

    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FFFFFF',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },

  retina_detect: true
});


fpsLimitOption = document.getElementById('fpsValue');
fpsLimitOption.value = defaultFPSLimit;

fpsLimitOption.addEventListener("change", function() {
	particles = tsParticles.domItem(0);
	options = particles.options;

	fps = parseInt(fpsLimitOption.value);

	if (fps > maxFPSLimit) fps = maxFPSLimit;
	if (fps < minFPSLimit) fps = minFPSLimit;

	fpsLimitOption.value = fps;
	settings.particles.fpsLimit = fps;
	updateSettings(settings);

	particles.refresh();
});