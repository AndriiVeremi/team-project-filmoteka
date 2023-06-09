import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import getRefs from './refs.js';

import photoAndrii from '../images/team/andrii.jpg';
import photoAlla from '../images/team/alla.jpg';
import photoIvan from '../images/team/Ivan.jpg';
import photoIryna from '../images/team/iryna.jpg';
import photoOleksandra from '../images/team/oleksandra.jpg';
import photoJaroslav from '../images/team/jaroslav.jpg';
import photoOlia from '../images/team/olia.jpg';
import photoKonstantyn from '../images/team/konstantyn.jpg';
import photoNadiia from '../images/team/nadiia.jpg';
import spriteUrl from '../images/btnUp.png';
import svgUrl from '../images/icons.svg';

const refs = getRefs();

const markup = `
<div class = 'modal-container'>
<div class="team-wrapper">
<div class="team-card">
    <img src="${photoAndrii}" alt="Andrii" class="team-image">
    <div class = 'team-info'>
    <a href="https://github.com/ZubkoA" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </a>
   
    <p class="team-name">Andrii</p>
    <p class="team-role">Team Lead</p>
   
    </div>
</div>
<div class="team-card">
    <img src="${photoAlla}" alt="Alla" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Alla</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/ZubkoA" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
</div>
</div>
<div class="team-card">
    <img src="${photoIvan}" alt="Ivan" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Ivan</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/IvanSkidan" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
</div>
</div>
<div class="team-card">
    <img src="${photoIryna}" alt="Iryna" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Iryna</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/IrynaKyslytsia" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
    </div>
</div>
<div class="team-card">
    <img src="${photoOleksandra}" alt="Oleksandra" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Oleksandra</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/OleksandraParkhomenko" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
    </div>
</div>
<div class="team-card">
    <img src="${photoJaroslav}" alt="Jaroslav" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Jaroslav</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Y-Savushchyk" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
    </div>
</div>
<div class="team-card">
    <img src="${photoOlia}" alt="Olia" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Olia</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/mrs-ktulhu" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
    </div>
</div>
<div class="team-card">
    <img src="${photoKonstantyn}" alt="Konstantyn" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Konstantyn</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/const604" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
    </div>
</div>
<div class="team-card">
    <img src="${photoNadiia}" alt="Nadiia" class="team-image">
     <div class = 'team-info'>
    <p class="team-name">Nadiia</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/tizzifona" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${svgUrl}#github"></use>
    </svg></a>
    </div>
</div>

</div>
<button class="button-close" type="button" data-add=close>
    <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
    <path stroke-width="2" d="m8 8 14 14M8 22 22 8"/>
  </svg>
        </button>
</div>`;

refs.projectTeam.addEventListener('click', openModal);

const modal = basicLightbox.create(markup, {
  onShow: modal => {
    refs.body.classList.add('no-scroll');
  },
  onClose: modal => {
    document.querySelector('.modal-container').style.overflowY = 'scroll';
    refs.body.classList.remove('no-scroll');
  },
});

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);
  window.addEventListener('click', closeModalHandler)

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
      return
    }

    if (e.target.closest('.button-close')) {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
    
  }
}
