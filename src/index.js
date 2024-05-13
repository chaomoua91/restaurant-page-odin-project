import _ from 'lodash';
import './style.css';
import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';

homePage();

let tabSwitchingModule = (function() {
    
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", homePage);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menuPage);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contactPage);

})();