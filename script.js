// II.08. First we're saving the toggle id to a variable:
const toggle = document.getElementById('toggle');
// II.09. We also want to grab the nav, by using it's id:
const nav = document.getElementById('nav'); 
 
// II.10. Adding en eventlistener on toggle:
toggle.addEventListener('click', () => {
    // NOTE: We want to toggle the active class on nav!
    nav.classList.toggle('active');
})
// EXTRA NOTE: With arrow function



