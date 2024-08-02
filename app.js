const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let contents = document.querySelectorAll('section')

let activePage = window.location.href;
let navLinks = document.querySelectorAll('#nav-itens a')
let navbar = document.querySelector('#nav-itens');
let icon = document.querySelector('#ham-icon');
let ham = document.querySelector('.ham');
navLinks.forEach(links => {
    links.classList.remove('active');

    if (links.href == activePage) {
        links.classList.add('active');
    }
})

window.onscroll = () => {
    contents.forEach(cont => {
        let top = window.scrollY;
        let offset = cont.offsetTop - 300;
        let height = cont.offsetHeight;
        let id = cont.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');

                let teste = document.querySelector('#nav-itens a[href*=' + id + ']');
                teste.classList.add('active')
            })


        }
    })

}

window.addEventListener('click', function(event) {
    if (event.target !== navbar && event.target !== ham) {
        navbar.classList.remove('show-menu');
        navbar.classList.add('hide-menu');
        icon.className = 'fa-solid fa-bars';
    }
  })



function toggleMenu() {
    
    
    if (navbar.classList.value == 'hide-menu') {
        navbar.classList.remove('hide-menu');
        navbar.classList.add('show-menu');
        icon.className = 'fa-solid fa-xmark';
        
    } else {
        navbar.classList.remove('show-menu');
        navbar.classList.add('hide-menu');
        icon.className = 'fa-solid fa-bars';
        
    }
}


