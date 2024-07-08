const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let contents = document.querySelectorAll('section')

let activePage = window.location.href;
let navLinks = document.querySelectorAll('#nav-itens a')

navLinks.forEach(links => {
    links.classList.remove('active');

    if (links.href == activePage){
        links.classList.add('active');
    }
})

window.onscroll = () => {
    contents.forEach(cont => {
        let top = window.scrollY;
        let offset = cont.offsetTop - 300;
        let height = cont.offsetHeight;
        let id = cont.getAttribute('id');

        if (top > offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');

                let teste = document.querySelector('#nav-itens a[href*='+ id +']');
                teste.classList.add('active')
            })

            
        }
    })
}

