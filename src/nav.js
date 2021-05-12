import './../assets/zattix_store.png'


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
  let toggleIcon = navToggle.appendChild(document.createElement('i'))
  toggleIcon.setAttribute('class','bi bi-list')

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

}


