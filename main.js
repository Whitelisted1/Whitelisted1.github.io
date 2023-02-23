const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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

tsParticles.load('background', {
    fpsLimit: 48,

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
