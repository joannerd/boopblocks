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
const playButtons = document.querySelectorAll(".play");

const playSound = (synth) => {
  let sound = new Sound(context);
  sound.play(synth.dataset.frequency);
  // console.log('play')
  this.setTimeout(() => {
    sound.stop();
  }, 100000);
}

synthnotes.forEach((synth, i) => {
  playButtons[i].addEventListener('click', () => {
    // console.log('click')
    synth.addEventListener('mouseenter', () => {
      playSound(synth)
    })
    synth.addEventListener('mouseleave', () => {
    })
  })
})