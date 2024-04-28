let scroll;
        window.addEventListener('scroll', function() {
        scroll = window.pageYOffset;
        let navMenu = document.querySelector("#navMenu");
        let blackButton = document.querySelector('#blackToGreen');
        if (scroll > 350) {            
            navMenu.classList.remove('navToYellow', 'colorNav')
            navMenu.classList.add('whiteNav');
            blackButton.classList.remove('blackToGeenStart', 'greenToBlack');
            blackButton.classList.add('animationGreenButton')
        } else {
            navMenu.classList.replace('whiteNav', 'navToYellow');
            blackButton.classList.replace('animationGreenButton', 'greenToBlack');
            }
        });