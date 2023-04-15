export default function getRefs() {
    const refs = {
        gallery: document.querySelector('.gallery'),
        goTopBtn: document.querySelector('.go-top'),
        
        queueBtn: document.querySelector('.queueBtn'),
        addToQueueBtn: document.querySelector('.addToQueueBtn'),
        watchedBtn: document.querySelector('.watchedBtn'),
        addToWatchedBtn: document.querySelector('.addToWatchedBtn'),
        
        modalWindow: document.querySelector('.'),
        overlay: document.querySelector('.overlay'),
        btnCloseModal: document.querySelector('.'),
        btnOpenModal: document.querySelectorAll('.'),


    };
    return refs;
};