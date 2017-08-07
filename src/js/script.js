///////////////////////
// Window URL Bar Clear
///////////////////////
window.history.pushState('', '', window.location.pathname)

///////////////////////
// Utilities
///////////////////////
const pvd = (e) => e.preventDefault()
const hide = (item) => { item.style.display = 'none' }
const show = (item) => { item.style.display = 'block' }
const $$ = (item) => document.querySelectorAll(item)
const sanitizeHash = (text) => text.toLowerCase().split(' ').join('-')

// TODO: Logo / Sign In
  // const developersNav =
  //   $$('a.logo-link')[0]
  //
  // const signInNav =
  //   $$('.sign-in-link')[0]
  //
  // const logOutNav =
  //   $$('.log-out a')[0]

///////////////////////
// DOM HOOKS
///////////////////////

const mainDOM =
  $$('main')[0]

const navDOM =
  $$('header')[0]

const userAreaDOM =
  $$('.user-area')[0]

const sideBarsDOM =
  $$('.sidebar')

const libDocDOM =
  $$('.lib-doc')[0]

const guideAreaDOM =
  $$('.guide section')

const docAreaDOM =
  $$('.lib section')

const rcIframeInjectDOM =
  $$('#rcIframeInject')[0]

const acIframeInjectDOM =
  $$('#acIframeInject')[0]

const stIframeInjectDOM =
  $$('#stIframeInject')[0]

const contentShortcutsDOM =
  $$('.content-shortcuts')[0]

const guideContentDOM =
  $$('.guides .content')[0]

const guideiFrameDOM =
  $$('.guides iframe')

const appmanagerInjectDOM =
  $$('#appmanagerinject')[0]

///////////////////////
// Global Event Listeners
///////////////////////

guideContentDOM.onscroll = () => iframeLazyLoad()

///////////////////////
// iFrame Lazy Loader
///////////////////////

function iframeLazyLoad () {
  let guidestop = guideContentDOM.scrollTop
  let viewArea = document.body.offsetHeight
  let bottomBar = guidestop + viewArea

  guideiFrameDOM.forEach((item) => {
   let iframetop = item.parentElement.offsetTop
   let itop = item.id + ":" + iframetop

   if (!item.getAttribute('loaded') && bottomBar >= iframetop) {

     const setIframe = (url) => {
       item.setAttribute('src', 'https://www.webpackbin.com/bins/'+url)
       item.setAttribute('loaded', true)
     }

     switch (item.id) {
       case 'rcIframeInject':
         setIframe('-Kql3OAxjMEtK4Vn2M3o')
         break
       case 'acIframeInject':
         setIframe('-Kql5WgV-D0sZrabxJ2_')
         break
       case 'stIframeInject':
         setIframe('-Kqcukv7y_qg-05zwEci')
         break
     }
   }
  })
}

///////////////////////
// Router Logic
///////////////////////

function changeMainClass(desiredHashText) {
  mainDOM.classList.forEach((mainClass) => {
    mainClass !== 'main'
      ? mainDOM.classList.remove(mainClass)
      : null
  })
  mainDOM.classList.add(desiredHashText)
}

contentShortcutsDOM.onclick = (evt) => {
  const tabArea = evt.target.parentElement
                            .parentElement
                            .parentElement
                            .parentElement
                            .parentElement
                            .classList[0].split('-').join('')
  changeMainClass(tabArea)
}

navDOM.onclick = (evt) => {
  const desiredParent = evt.target.parentElement

  if (desiredParent.hash) {
    const desiredHash = desiredParent.hash
    const desiredHashText = desiredHash.replace('#','')

    if (desiredHash !== undefined && desiredHash !== '') {
      changeMainClass(desiredHashText)
    }

    // Exception for external links
    if (desiredHash !== ''){ pvd(evt) }

    // Gitter Inject
    if (desiredHashText === 'gitter' && $$('#sidecarScriptInject').length === 0) {
      let sidecarScriptInjectDOM = document.createElement('script')
      sidecarScriptInjectDOM.id="sidecarScriptInject"
      sidecarScriptInjectDOM.src="https://sidecar.gitter.im/dist/sidecar.v1.js"
      document.body.appendChild(sidecarScriptInjectDOM)
    }

    // App Manager Inject
    if (desiredHashText === 'myapps' && appmanagerInjectDOM.childNodes.length === 0) {
      appmanagerInjectDOM.src="https://appmanager.uport.me/"
    }
  }
}

///////////////////////
// Sidebar Creator
///////////////////////

function createSidebarList (contextArea, flag) {

  let list = document.createElement('ul')

  if (flag === 'guide') {
    let contextAreaH2s = contextArea.querySelectorAll('h2')

    contextAreaH2s.forEach((el) => {
      let url = sanitizeHash(el.innerHTML)
      let listItem = document.createElement('li')
      let link = document.createElement('a')

      el.id = url
      link.innerHTML = el.innerHTML
      link.href = '#' + url

      listItem.appendChild(link)
      list.appendChild(listItem)
    })
  }

  if (flag === 'doc') {
    let docTOCpath = 'ul:nth-of-type(1) li ul li'
    let ucContentListItems = contextArea.querySelectorAll(docTOCpath)
    let cloneArry = []

    ucContentListItems.forEach((item) => {
      cloneArry.push(item.cloneNode(true))
    })

    if (cloneArry.length > 0){
      cloneArry.forEach((item) => {
        if (item.childNodes[1] !== undefined){
          item.childNodes[1].remove()
        }
        list.appendChild(item)
      })
    }
  }

  return list
}

function createSidebarAreas (currentSource, sourceFlag) {
  let contextArea = currentSource

  let createdSection = document.createElement('section')

  let contextAreaH1 = contextArea.querySelector('h1')
  contextAreaH1.id = contextAreaH1.textContent.toLowerCase().split(' ').join('-')

  let contextAreaH1Clone = contextAreaH1.cloneNode(true)
  contextAreaH1Clone.id = ''

  let h1Link = document.createElement('a')
  h1Link.href="#" + contextAreaH1.textContent.toLowerCase().split(' ').join('-')
  h1Link.appendChild(contextAreaH1Clone)

  return {
    section: createdSection,
    header: h1Link,
    list: createSidebarList(contextArea, sourceFlag)
  }
}

function createSidebars (sources) {

  sources.forEach((source) => {
    let flag
    source[0].parentNode.className === 'guide'
      ? flag = 'guide'
      : flag = 'doc'

    for (let i = 0; i < source.length; i++) {
      let createdElements = createSidebarAreas(source[i], flag)

      createdElements.section.appendChild(createdElements.header)
      createdElements.section.appendChild(createdElements.list)

      flag === 'guide'
        ? sideBarsDOM[0].appendChild(createdElements.section)
        : sideBarsDOM[1].appendChild(createdElements.section)
    }
  })
}

createSidebars([guideAreaDOM, docAreaDOM])

// TODO: Get JSDOC based stuff in there
// ujContentLinks.forEach((el) => {
//   let li = document.createElement('li')
//       li.appendChild(el)
//   sideBarLibBDOM.appendChild(li)
// })
//
// urContentLinks.forEach((el) => {
//   let li = document.createElement('li')
//       li.appendChild(el)
//   sideBarLibCDOM.appendChild(li)
// })

// signInNav.onclick = (e) => {userAreaDOM.classList.add('menu-open')}
// logOutNav.onclick = (e) => {userAreaDOM.classList.remove('menu-open')}

///////////////////////
// HAX
///////////////////////

// Hide dupe of ConnectCore
const uch2cc = '#uport-connect .lib-doc > h2:nth-of-type(3)'
const uch2ccDOM = $$(uch2cc)[0]
const uch2ccDOMPlusAll = $$(uch2cc + ' ~ *')
hide(uch2ccDOM)
uch2ccDOMPlusAll.forEach((el) => {hide(el)})
