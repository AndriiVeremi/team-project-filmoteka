

import photoAndrii from "../images/team/andrii.png";
import photoAlla from "../images/team/alla.png";
import photoIvan from "../images/team/ivan.png";
import photoIryna from "../images/team/iryna.png";
import photoOleksandra from "../images/team/oleksandra.png";
import photoJaroslav from "../images/team/jaroslav.png";
import photoOlia from "../images/team/olia.png";
import photoKonstantyn from "../images/team/konstantyn.png";

// import spriteUrl from '../images/sprite.svg';


const markup = `<div class="team-wrapper"><div class="team-card">
    <img src="${photoAndrii}" alt="Andrii" class="team-image">
    <p class="team-name">Andrii</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/AndriiVeremii" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoAlla}" alt="Alla" class="team-image">
    <p class="team-name">Alla</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoIvan}" alt="Ivan" class="team-image">
    <p class="team-name">Ivan</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoIryna}" alt="Iryna" class="team-image">
    <p class="team-name">Iryna</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoOleksandra}" alt="Oleksandra" class="team-image">
    <p class="team-name">Oleksandra</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoJaroslav}" alt="Jaroslav" class="team-image">
    <p class="team-name">Jaroslav</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoOlia}" alt="Olia" class="team-image">
    <p class="team-name">Olia</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo-icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${photoKonstantyn}" alt="Konstantyn" class="team-image">
    <p class="team-name">Konstantyn</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git">
    <svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div></div>`;

const container = document.querySelector('.js-team-modal');


container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
    modal.show();

    window.addEventListener('keydown', closeModalHandler);

    function closeModalHandler(e) {
        if (e.code === 'Escape') {
            modal.close();
            window.removeEventListener('keydown', closeModalHandler);
        }
    }
}
























