import icon from 'url:../../src/images/icon.svg';
export const parentEl = document.querySelector('');

export const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
  <svg>
  <use href="${icon}#icon-spinner"></use>
  </svg>
  </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
  console.log(markup);
};
