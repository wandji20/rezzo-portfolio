
import './../assets/zattix_store.png'


export default function displayNav(){
  const body = document.querySelector('body')
  const nav = document.querySelector('nav')

  const navTitle = nav.appendChild(document.createElement('div'))
  navTitle.classList.add('nav-title')
  const titleName = navTitle.appendChild(document.createElement('a'))
  titleName.innerHTML = 'Wandji'
  titleName.href = '#home'
  // titleName.addEventListener('click',()=>{
  //   body.classList.remove('remove-y-scroll')
  // })

  const navLinks = nav.appendChild(document.createElement('div'))
  navLinks.classList.add('nav-links')
  
  const homeLink = navLinks.appendChild(document.createElement('a'))
  homeLink.innerHTML = 'Home'
  homeLink.href = '#home'

  const projectsLink = navLinks.appendChild(document.createElement('a'))
  projectsLink.innerHTML = 'Projects'
  projectsLink.href = '#projects'
  
  const skillsLink = navLinks.appendChild(document.createElement('a'))
  skillsLink.innerHTML = 'Skills'
  skillsLink.href = '#skills'
  
  const contactLink = navLinks.appendChild(document.createElement('a'))
  contactLink.innerHTML = 'Contact'
  contactLink.href = '#contact'
  
  const navToggle = nav.appendChild(document.createElement('div'))
  navToggle.classList.add('nav-toggle')
  
  let toggleIcon = navToggle.appendChild(document.createElement('i'))
  toggleIcon.setAttribute('class','bi bi-list')
  
  navToggle.addEventListener('click', ()=>{ 
    let closeIcon = document.createElement('i')
    closeIcon.setAttribute('class','bi bi-x-octagon-fill')
    
    if (navToggle.firstChild === toggleIcon){
      navToggle.innerHTML = ''
      navToggle.appendChild(closeIcon)
      body.classList.add('remove-y-scroll')
      navLinks.setAttribute('id', 'toggle-nav')
      navTitle.style.display = 'none'
    }else{
      navToggle.innerHTML = ''
      navToggle.appendChild(toggleIcon)
      navLinks.removeAttribute('id')
      body.classList.remove('remove-y-scroll')
      start()
      
    }
  })
  
  function resetNav(){
    body.classList.remove('remove-y-scroll')
    navTitle.style.display = ''
    navToggle.innerHTML = ''
    navToggle.appendChild(toggleIcon)
    navLinks.removeAttribute('id')
  }
  contactLink.addEventListener('click',()=>{
    resetNav()
  })
  projectsLink.addEventListener('click',()=>{
    resetNav()
  })
  skillsLink.addEventListener('click',()=>{
    resetNav()
  })
  homeLink.addEventListener('click',()=>{
    resetNav()
  })
}

function start() {
  document.querySelector('nav').innerHTML = ''
  displayNav()

}


