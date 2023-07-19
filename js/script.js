// scroll section 
// responsive menu start 
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}

// responsive menu end 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // action navber links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use Animation that repeat on scroll use this 
        else {
            sec.classList.remove('show-animate');

        }

    });

    // sticky header start 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // sticky header end 
    // remove toggle icon and navber when click navber link (scroll) 
    // menuIcon.classList.remove('box-x');
    // navber.classList.remove('active');

    // Animation footer on scroll 
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}