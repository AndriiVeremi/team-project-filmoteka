// const active = document.querySelector('button')
// active.addEventListener('click', function () {
//     active.classList.toggle("active");
// })
//     .active {
//     display: none;
// }
// <button>Text</button>

import  getRefs  from './refs';

const refs = getRefs();

// refs.pageHome.addEventListener("click", toggleBtn);
refs.pageLibrary.addEventListener("click", toggleBtn);
  
    function toggleBtn() {
        refs.pageHome.classList.remove('active');
        refs.pageLibrary.classList.add('active');
            return;
    }