
// code written for hamburger menu
function menu(){
    
    document.getElementById("panel").classList.toggle(("active"));

    const menuLinks = document.querySelectorAll("#panel a");
    menuLinks.forEach(link =>{
        link.addEventListener('click', () =>{
            document.getElementById("panel").classList.remove("active");
        });
    });
}




//  typewritter effect
var typed = new Typed('#element', {
    strings: ['coder','web developer','web designer','photo editor','coding enthusiast','video editor'],
  
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
  