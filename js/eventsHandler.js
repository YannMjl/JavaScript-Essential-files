// Event handlers - listeners
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.remove("hide");

function reveal(e) {
  // this prevent the default behavoir of the page which is cliking in this case
  e.preventDefault();

  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

// event handler
//CTA.onclick = reveal;

// Event listeners
CTA.addEventListner("click", reveal, false);
