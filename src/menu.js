console.log("menu page");
import multiThaiImg from "./img/multi-dishes-thai.jpg";
import phoImg from "./img/pho-with-teapot.jpg";

export function menuPage() {
  const contentDiv = document.querySelector("#content");

  // Remove any existing DOM children if present
  contentDiv.replaceChildren();

  // DOM for heading
  const heading = document.createElement("h1");
  heading.textContent = "Chuncky's Menu";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  // DOM for multiThai
  const multiThai = document.createElement("img");
  multiThai.classList.add("image");
  multiThai.src = multiThaiImg;
  multiThai.alt = "Image of multiple thai dishes";
  contentDiv.appendChild(multiThai);

  // DOM for p tag for multiThai
  const para1multiThai = document.createElement("p");
  para1multiThai.classList.add("menu-copy");
  para1multiThai.textContent = "Try the Wonderful flavors of Thailand";
  contentDiv.appendChild(para1multiThai);

  // DOM for pho
  const pho = document.createElement("img");
  pho.classList.add("image");
  pho.src = phoImg;
  pho.alt = "Image of pho and tea";
  contentDiv.appendChild(pho);

  // DOM for p tag for pho
  const para1pho = document.createElement("p");
  para1pho.classList.add("menu-copy");
  para1pho.textContent = " Vietnamese Classic noodle soup dish ";
  contentDiv.appendChild(para1pho);
}
