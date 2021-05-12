import './../assets/zattix_store.png'
import './../assets/culture.png'
import './../assets/linters.png'
import './../assets/todo.png'

export default function displayNav(){
  const body = document.querySelector('body')
  const nav = document.querySelector('nav')

  const navTitle = nav.appendChild(document.createElement('div'))
  navTitle.classList.add('nav-title')
  const titleName = navTitle.appendChild(document.createElement('a'))
  titleName.innerHTML = 'Wandji'

  const navLinks = nav.appendChild(document.createElement('div'))
  navLinks.classList.add('nav-links')
  const homeLink = navLinks.appendChild(document.createElement('a'))
  homeLink.innerHTML = 'Home'
  const projectsLink = navLinks.appendChild(document.createElement('a'))
  projectsLink.innerHTML = 'Projects'
  const skillsLink = navLinks.appendChild(document.createElement('a'))
  skillsLink.innerHTML = 'Skills'
  const contactLink = navLinks.appendChild(document.createElement('a'))
  contactLink.innerHTML = 'Contact'

  const navToggle = nav.appendChild(document.createElement('div'))
  navToggle.classList.add('nav-toggle')
  navToggle.appendChild(document.createElement('hr'))
  navToggle.appendChild(document.createElement('hr'))
  navToggle.appendChild(document.createElement('hr'))

  navToggle.addEventListener('click', ()=>{ 
    if (navToggle.innerHTML === 'X'){
      navLinks.removeAttribute('id')
      body.classList.remove('remove-y-scroll')
      start()
    }else{
      
      body.classList.add('remove-y-scroll')
      navLinks.setAttribute('id', 'toggle-nav')

      navToggle.innerHTML ='X'
      navTitle.style.display = 'none'

      
    }
  })
}



function start() {
  document.querySelector('nav').innerHTML = ''
  displayNav()
  const img1 = document.querySelector('.img1')
  img1.src = './../assets/culture.png'
  const img2 = document.querySelector('.img2')
  img2.src = './../assets/zattix_store.png'
  const img3 = document.querySelector('.img3')
  img3.src = './../assets/todo.png'
  const img4 = document.querySelector('.img4')
  img4.src = './../assets/linters.png'
}


