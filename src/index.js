import loadHome, { initialPage } from './pages/initial-page.js';
import _ from 'lodash';
import './style.css';


loadHome();

let tabSwitchingModule = (function() {
    
  const homeTab = document.querySelector(".home");
  homeTab.addEventListener("click", initialPageLoad);

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", menu);

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", contact);

})();