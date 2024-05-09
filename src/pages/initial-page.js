import '../style.css';
import background from '../img/paper-lanturns.jpg';

console.log("hello world");

function loadHome() {
    document.body.style.background = `url(${background})`
    document.body.style.backgroundSize = "cover"

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Jaybees Tech Talk Restaurant And Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for p tag #1
    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is an upscale restaurant that touts its elegance and spacious dining/lounge area.";
    contentDiv.appendChild(para1);

    // DOM for p tag #2
    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Attire required for this facility is business casual at a minimum, please!";
    contentDiv.appendChild(para2);

    // DOM for p tag #3
    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks, Management";
    contentDiv.appendChild(para3);
  

  }
  
  export default loadHome;
