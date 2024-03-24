// variabele aanmaken
const vierkanten = document.querySelectorAll('.vierkant');
const klik = document.querySelector('.klik');

let tijd = document.querySelector('#tijd');
let punten = document.querySelector('#punten');
let hitPosition;
let result = 0;
let currentTime = 30;
let tijdId = null;
// bron: https://pixabay.com/sound-effects/correct-156911/
let correct = new Audio('correct-6033.mp3');
// bron: https://pixabay.com/sound-effects/negative-beeps-6008/
let mis = new Audio('negative_beeps-6008.mp3');

// laat de vakjes inkleuren met een random volgorde
function randomSquare(){
    vierkanten.forEach(vierkant => {
        vierkant.classList.remove('klik');
    });

        let randomIndex = Math.floor(Math.random() * 9);
            console.log(randomIndex);
    
        let randomPosition = vierkanten[randomIndex];
            randomPosition.classList.add('klik');
            console.log(randomPosition);

        hitPosition = randomPosition.id;
}

// punten teller
vierkanten.forEach(vierkant => {
    vierkant.addEventListener('mousedown', () => {
        if (vierkant.id == hitPosition){
            result++;
            console.log(result);
            punten.innerHTML = result;
            hitPosition = null;
            correct.play();
        } else { console.log("mis");
            mis.play();
        }
    });
});

// hoe snel de klik/(kleur) veranderd
function veranderklik(){
    console.log(tijdId);
    tijdId =setInterval(randomSquare, 1000);
}

veranderklik();
randomSquare();

// timer + melding als de tijd voorbij is
function countDown() {
    currentTime--;
    tijd.innerHTML = currentTime;
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(tijdId);
      alert('GAME OVER! Jouw score is ' + result);
    }
   
   }
   
   let countDownTimerId = setInterval(countDown, 1000);