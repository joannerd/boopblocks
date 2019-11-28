class Sound {
  constructor(context) {
    this.context = context;
  }

  setup() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value) {
    this.setup();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);

    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime);
  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
    this.oscillator.stop(this.context.currentTime + 1);
  }
}

let context = new (window.AudioContext || window.webkitAudioContext)();
const synthnotes = document.querySelectorAll('.synth');
const playButtons = document.querySelectorAll('.play');

const playSound = (synth) => {
  let sound = new Sound(context);
  sound.play(synth.dataset.frequency);
  this.setTimeout(() => {
    sound.stop();
    console.log('sound')
  }, 1000);
}

synthnotes.forEach((synth, i) => {
  const paths = document.querySelectorAll(`.path-${i+1}`);

  playButtons[i].addEventListener('click', () => {   

    Array.from(synth.children[0].children[0].children).forEach(child => {
      child.addEventListener("mouseenter", () => playSound(synth));
      child.addEventListener("click", () => playSound(synth));
    })

    let j = 0;
    window.setInterval(() => {
      paths[j].classList.value === `path-${i + 1}`
        ? paths[j].setAttribute('class', `path-${i + 1} opaq`)
        : paths[j].setAttribute('class', `path-${i + 1}`);

      playSound(synth);
      j++;
      if (j === paths.length) j = 0;
    }, 4500 / paths.length);
  })
})

// document.querySelector('#master-play').addEventListener('click', () => {
document.addEventListener('DOMContentLoaded', () => {
console.log('loaded')
  synthnotes.forEach((synth, i) => {
    Array.from(synth.children[0].children[0].children).forEach(child => {
      child.addEventListener("mouseenter", () => playSound(synth));
      child.addEventListener("click", () => playSound(synth));
    })
    const paths = document.querySelectorAll(`.path-${i+1}`);
  
    let j = 0;
    window.setInterval(() => {
      paths[j].classList.value === `path-${i + 1}`
        ? paths[j].setAttribute('class', `path-${i + 1} opaq`)
        : paths[j].setAttribute('class', `path-${i + 1}`);

      playSound(synth);
      
      j++;
      if (j === paths.length) j = 0;
    }, 4500 / paths.length);
  })
})