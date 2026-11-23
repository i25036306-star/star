const revealButton = document.querySelector('#reveal-button');
const observation = document.querySelector('#observation');

revealButton.addEventListener('click', () => {
  const isOpen = revealButton.getAttribute('aria-expanded') === 'true';
  revealButton.setAttribute('aria-expanded', String(!isOpen));
  observation.hidden = isOpen;
  revealButton.querySelector('.button-label').textContent = isOpen
    ? 'Open the observation note'
    : 'Close the observation note';
});
