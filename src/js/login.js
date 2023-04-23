import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
} from 'firebase/auth';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Notiflix, { Notify } from 'notiflix';

import getRefs from './refs.js';

const refs = getRefs();

const firebaseConfig = {
    apiKey: "AIzaSyAh0cEdhazYQGw94peOpXQKnKRWcQGbcqQ",
    authDomain: "team-project-filmoteka-1.firebaseapp.com",
    projectId: "team-project-filmoteka-1",
    storageBucket: "team-project-filmoteka-1.appspot.com",
    messagingSenderId: "852911069820",
    appId: "1:852911069820:web:dbdb32d089b5dfd5ef07f9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.querySelector('button[data-page="login"]');
loginBtn.addEventListener('click', onModalLogin);

function onModalLogin() {
    const markup = `<div class="signIn-wrapper">
    <h2 class="signIn-title">Hello</h2>
    <form class="signIn-form">     
      <lable class="signIn-lable">
        <input type="email" id="email" class="signIn-input" placeholder="Email" autocomplete="off"/>
      </lable>
      <lable class="signIn-lable">
        <input id="password" type="password" class="signIn-input" placeholder="Password" autocomplete="off"/>
      </lable>     
      <button type="submit" class="signIn-button" data-page="signIn">Sign In</button>
      <span class="signIn-text">Create account</span>
      <button type="button" class="signUp-button" data-page="signUp">Sign up</button>
    </form>
    </div>`

    const instance = basicLightbox.create(markup, {
        onShow: instance => {          
            refs.body.classList.add('no-scroll');           
            window.addEventListener('keydown', event => closeModalEscape(event));           
        },
        onClose: instance => {
            refs.body.classList.remove('no-scroll');
            window.removeEventListener('keydown', event => closeModalEscape(event));          
        },
    });

    if (loginBtn.textContent === 'LOGIN') {
        instance.show();
    } else {
        signOut(auth);
        loginBtn.textContent = 'LOGIN'
    }
    
    function closeModalEscape(event) {
        if (event.key !== 'Escape') {
            return;
        }
        instance.close();
    }

    const logInBtn = document.querySelector('button[data-page="signIn"]');
    const regInBtn = document.querySelector('button[data-page="signUp"]');

    logInBtn.addEventListener('click', onLogIn);
    regInBtn.addEventListener('click', onRegisIn);

    function onLogIn(event) {
        event.preventDefault();
        if (auth.currentUser) {
            signOut(auth);
        } else {
            loginBtn.textContent = 'EXIT'
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            if (password.length < 5) {
                Notiflix.Report.failure('Enter your password, the password must be longer than 5 characters');
                return;
            }

            signInWithEmailAndPassword(auth, email, password)
                .then(response => {
                    if (auth.currentUser.emailVerified === false) {
                        Notiflix.Report.success('Verification letter received by mail!');
                        return;
                    }

                    Notiflix.Report.success('Hello My Friend !');

                    instance.close();
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode === 'auth/wrong-password') {
                        Notiflix.Report.failure('Wrong password.');
                    } else {
                        Notiflix.Report.failure(errorMessage);
                    }
                });
        }
    }

    function onRegisIn() {

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (password.length < 5) {
            Notiflix.Report.failure('Enter your password, the password must be longer than 5 characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                sendEmailVerif(auth.currentUser);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    Notiflix.Report.failure('The password is too weak.');
                } else if (errorCode == 'auth/email-already-in-use') {
                    Notiflix.Report.failure('An account with this email already exist!');
                } else {
                    Notiflix.Report.failure(errorMessage);
                }
            });
    };

    function sendEmailVerif(currentUser) {
        sendEmailVerification(currentUser).then(response => {
            Notiflix.Report.success(`Verification letter received by mail!`);
        });
    };
}

