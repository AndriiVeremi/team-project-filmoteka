import { dataTeam } from './dataTeam.js';
// import  foto  from 'url:../../src/images/team/andrii.png'
// console.log(foto)
import getRefs from './refs.js';

const refs = getRefs();

console.log(refs.queueBtn)

export function renderTeam(dataTeam) {   
    const team = dataTeam.map(({ imgUrl, name, role, gitUrl, gitImg, }) => {
        return `      
        <div class="team-card">
           <img src="${imgUrl}" alt="Team foto" class="team-image">
              <p class="team-name">${name}</p>
              <p class="team-role">${role}</p>

            <a href="${gitUrl}" target="_blank" class="team-git">
             <svg class="ico" width="24" height="24">
              <use href="${gitImg}"></use>
             </svg>
            </a>
        </div>`;
    }).join("");

    refs.gallery.insertAdjacentHTML("beforeend", team);  
}

console.log(renderTeam(dataTeam))























