let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-contents")
console.log(tabLinks)

function openTab(tabName) {
   for (const tablink of tabLinks) {
     tablink.classList.remove("active-links")
   } 
   for (const tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-links")
  document.getElementById(tabName).classList.add("active-tab")
}

let sideMenu = document.getElementById("side-menu");

function openMenu() {
   sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbz67eDRzFr7Bo0P29jn2KXFWtGTTVvf0UXVSGhhB1JoLBwEhuGQlQzlyaDc1Cba1rFg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        msg.innerHTML = "Message sent successfully")
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })