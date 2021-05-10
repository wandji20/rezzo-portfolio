export default function displayNav(){
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
      navTitle.style.display = ''
      navLinks.style.display = 'none'
      navToggle.innerHTML = ''
      navToggle.appendChild(document.createElement('hr'))
      navToggle.appendChild(document.createElement('hr'))
      navToggle.appendChild(document.createElement('hr'))
    }else{
      navToggle.innerHTML ='X'
      navTitle.style.display = 'none'
      navLinks.style.display = 'flex'
      navLinks.style.flexDirection = 'column'
      navLinks.style.width = 'fit-content'
      
    }
  })
}


function displaySmNav() {
  const nav = document.querySelector('nav')
}


