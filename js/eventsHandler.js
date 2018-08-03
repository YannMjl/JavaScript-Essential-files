// Event handlers - listeners
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#Change-color");

CTA.classList.remove("hide");
ALERT.classList.remove("hide");

function reveal(e, current) {
  // this prevent the default behavoir of the page which is cliking in this case
  e.preventDefault();

  current.innerHTML = "Change color" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Change Color";

  ALERT.classList.toggle("hide");
}

// event handler
//CTA.onclick = reveal;

// Event listeners
CTA.addEventListner("click", function(e){ reveal(e, this); }, false);
CTA.addEventListner("click", function(){ console.log("The button was clicked"); }, false);
