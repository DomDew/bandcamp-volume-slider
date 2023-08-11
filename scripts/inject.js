const player = document.querySelector('.inline_player');
const audio = document.querySelector('audio');

if (player && audio) {
  /**
   * Create elements
   */
  const volWrapper = document.createElement('div');
  volWrapper.className = 'volume-wrapper';

  const label = document.createElement('label');
  label.setAttribute('for', 'volume');
  label.className = 'volume-label';
  label.innerText = 'Volume';

  const volSlider = document.createElement('input');
  volSlider.setAttribute('name', 'volume');
  volSlider.setAttribute('type', 'range');
  volSlider.setAttribute('min', 0);
  volSlider.setAttribute('max', 100);
  volSlider.setAttribute('step', 1);
  volSlider.className = 'volume-slider';
  volSlider.value = audio.volume * 100;

  /**
   * Insert elements
   */
  player.appendChild(volWrapper);
  volWrapper.appendChild(label);
  volWrapper.appendChild(volSlider);

  /**
   * Event handlers
   */
  const handleChange = (e) => {
    audio.volume = e.target.value / 100;
  };

  volSlider.onchange = handleChange;
}
