//  ------------------ scroll indicator -------------

window.onscroll = function(){
    let html = document.documentElement;
    let scrol_top = html.scrollTop;
    let height = html.scrollHeight - html.clientHeight;

    let unit = (scrol_top/height)*100;
    document.getElementById("scroll").style.width = unit+ "%";
}


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
  