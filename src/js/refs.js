export default function getRefs() {
    const refs = {
        gallery: document.querySelector('.js-gallery'),
        goTopBtn: document.querySelector('.go-top'),

        projectTeam: document.querySelector('.js-team'),
        modal: document.querySelector('.js-overlay-modal'),

        queueBtn: document.querySelector('button[data-page="queue"]'),
        addToQueueBtn: document.querySelector('[data-add="queue"]'),
        watchedBtn: document.querySelector('button[data-page="watched"]'),
        addToWatchedBtn: document.querySelector('[data-add="wathced"]'),
        
        // modalWindow: document.querySelector(''),
        // overlay: document.querySelector('.overlay'),
        // btnCloseModal: document.querySelector(''),
        // btnOpenModal: document.querySelectorAll(''),



    };
    return refs;
};
