// active section for animation on scroll  
// if {
//     sec.classList.classList.add('show-animate');
// }
// if want to use animation that repeats on scroll use this 
// else {
//     sec.classList.classList.remove('show-animate');

// }





// header start 
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navber.classList.toggle('active');
    }
    // header end 

// scroll section start

window.onscroll = () => {
        let header = document.querySelector('.header-bg');
        header.classList.toggle('sticky', window.scrollY > 100);
    }
    // scroll section end



// ============================================
// toggle icon navber

// mb header start 
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}

// mb header end 

// scroll section 
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
        menuIcon.classList.remove('box-x');
        navber.classList.remove('active');

    }
    // ============================================
    // ============================================
    //  =========== header start =========== //
    // responsive menu start 
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}

// responsive menu end 

window.onscroll = () => {
    // sticky section start
    let header = document.querySelector('.header-bg');
    header.classList.toggle('sticky', window.scrollY > 100);
    // sticky section end

}

//   =========== header end =========== //
// ============================================