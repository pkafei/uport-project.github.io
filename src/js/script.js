// Utils
const $$ = (item) =>
  document.querySelectorAll(item)

const pvd = (e) => e.preventDefault();

// Button assignments
const developersBtn =
  $$('a.logo-link')[0]

const guidesBtn =
  $$('[href="#guides"]')[0]

const apidocsBtn =
  $$('[href="#apidocs"]')[0]

const toolsBtn =
  $$('[href="#tools"]')[0]

const myappsBtn =
  $$('[href="#myapps"]')[0]

const gitterBtn =
  $$('[href="#gitter"]')[0]

const signInBtn =
  $$('.sign-in-link')[0]

const logOutBtn =
  $$('.log-out a')[0]

// Main hook
const mainArea =
  $$('main')[0]

// Navigation click handeling
developersBtn.onclick = (e) => {
  pvd(e);
  mainArea.classList.add('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

guidesBtn.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.add('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

apidocsBtn.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.add('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

toolsBtn.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.add('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.remove('gitter')
}

myappsBtn.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.add('myapps')
  mainArea.classList.remove('gitter')
}

gitterBtn.onclick = (e) => {
  pvd(e);
  mainArea.classList.remove('portal')
  mainArea.classList.remove('guides')
  mainArea.classList.remove('apidocs')
  mainArea.classList.remove('tools')
  mainArea.classList.remove('myapps')
  mainArea.classList.add('gitter')
}

signInBtn.onclick = (e) => {
  pvd(e);
  $$('.user-area')[0]
    .classList.add('menu-open')
}

logOutBtn.onclick = (e) => {
  pvd(e);
  $$('.user-area')[0]
    .classList.remove('menu-open')
}
