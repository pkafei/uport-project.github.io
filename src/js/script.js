// Utils
const $$ = (item) =>
  document.querySelectorAll(item)

const pvd = (e) => e.preventDefault();

// Button assignments
const developersNav =
  $$('a.logo-link')[0]

const guidesNav =
  $$('[href="#guides"]')[0]

const apidocsNav =
  $$('[href="#apidocs"]')[0]

const toolsNav =
  $$('[href="#tools"]')[0]

const myappsNav =
  $$('[href="#myapps"]')[0]

const gitterNav =
  $$('[href="#gitter"]')[0]

const signInNav =
  $$('.sign-in-link')[0]

const logOutNav =
  $$('.log-out a')[0]

// Main hook
const mainArea =
  $$('main')[0]

// Navigation click handeling
developersNav.onclick = (e) => {
  pvd(e);
  mainArea.classList.add('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

guidesNav.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.add('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

apidocsNav.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.add('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

toolsNav.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.add('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

myappsNav.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.add('myapps')
  mainArea.classList.remove('gitter')
}

gitterNav.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.add('gitter')
}

signInNav.onclick = (e) => {
  pvd(e);
  $$('.user-area')[0]
    .classList.add('menu-open')
}

logOutNav.onclick = (e) => {
  pvd(e);
  $$('.user-area')[0]
    .classList.remove('menu-open')
}
