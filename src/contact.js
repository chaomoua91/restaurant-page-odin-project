console.log("contact page");

export function contactPage() {
  const contentDiv = document.querySelector("#content");

  // Remove any existing DOM children if present
  contentDiv.replaceChildren();

  // DOM for heading
  const heading = document.createElement("h1");
  heading.textContent = "We would love to talk to you!";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  // DOM for p tag for phoneImage
  const para1PhoneImage = document.createElement("p");
  para1PhoneImage.classList.add("contact-copy");
  para1PhoneImage.textContent = "Call us!";
  contentDiv.appendChild(para1PhoneImage);

  // DOM for p tag for emailImage
  const para2EmailImage = document.createElement("p");
  para2EmailImage.classList.add("contact-copy");
  para2EmailImage.textContent = "Email us at fake@fake.com";
  contentDiv.appendChild(para2EmailImage);

  // DOM for p tag for addressImage
  const para3AddressImage = document.createElement("p");
  para3AddressImage.classList.add("contact-copy");
  para3AddressImage.textContent =
    "Our address is 1234 Fake Lane, Fake Town, IA, 52345.  We look forward to seeing you!";
  contentDiv.appendChild(para3AddressImage);
}
