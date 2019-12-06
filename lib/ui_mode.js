const MODES = ['dark', 'light']


MODES.forEach(mode => {
  document.querySelector(`#${mode}`).addEventListener('click', () => {
    document.querySelector('body').className = `${mode}`;
    document.querySelector(`#color`).className = '';
    document.querySelector(`#dark`).className = '';
    document.querySelector(`#light`).className = '';
    document.querySelector(`#${mode}`).className = `${mode}`;
    document.querySelector('#social-icons').className = `${mode}`;
    document.querySelector('#play-pause').className = `${mode}`;
    document.querySelector('#synth-container').className = `${mode}`;
  })
})

document.querySelector(`#color`).addEventListener('click', () => {
  document.querySelector('body').className = '';
  document.querySelector('#dark').className = '';
  document.querySelector('#light').className = '';
  document.querySelector('#color').className = 'color';
  document.querySelector('#social-icons').className = '';
  document.querySelector('#play-pause').className = '';
  document.querySelector('#synth-container').className = '';
})