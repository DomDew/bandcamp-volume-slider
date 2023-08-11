const player = document.getElementsByClassName('inline_player')[0];
const audio = document.getElementsByTagName()[0];

if (!player || !audio) return;

/**
 * Create elements
 */
const volWrapper = document.createElement('div');

const label = document.createElement('label');
label.setAttribute('for', 'volume');
label.className = 'volume-label';

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
