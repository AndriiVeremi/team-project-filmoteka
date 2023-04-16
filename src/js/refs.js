export default function getRefs() {
    const refs = {
        gallery: document.querySelector('.js-gallery'),
        goTopBtn: document.querySelector('.go-top'),

        projectTeam: document.querySelector('.js-team'),
        modal: document.querySelector('.js-overlay-modal'),
        body: document.querySelector('body'),

        queueBtn: document.querySelector('button[data-page="queue"]'),        
        watchedBtn: document.querySelector('button[data-page="watched"]'),

        addToQueueBtn: document.querySelector('[data-add="queue"]'),
        addToWatchedBtn: document.querySelector('[data-add="wathced"]'),
       
    };
    return refs;
};
