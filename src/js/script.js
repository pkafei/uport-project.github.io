const pvd = (e) => e.preventDefault()
const hide = (item) => { item.style.display = 'none' }
const show = (item) => { item.style.display = 'block' }
const $$ = (item) => document.querySelectorAll(item)
const sanitizeHash = (text) => text.toLowerCase().split(' ').join('-')
const WINDOW_WIDTH = window.document.body.clientWidth
const SITE_NAME = 'Developer Platform'
const analyticsPageFire = (name, link) => {
  if(window.location.hostname === 'developer.uport.me') {
    analytics.page(
      SITE_NAME,
      {
        title: SITE_NAME + ' - ' + name,
        url: link || window.location.href,
      },
      {
        integrations: {
          'All': false,
          'Intercom': false,
          'Crazy Egg': true,
          'Mixpanel': true,
          'Redshift': true,
          'Google Analytics': true
        }
      }
    )
  }
}
const analyticsLinkFire = (link) => {
  if(window.location.hostname === 'developer.uport.me') {
    analytics.page(
      SITE_NAME,
      {
        url: link
      },
      {
        integrations: {
          'All': false,
          'Intercom': false,
          'Crazy Egg': true,
          'Mixpanel': true,
          'Redshift': true,
          'Google Analytics': true
        }
      }
    )
  }
}
const ifPage = (pagename, cb) => {
  location.pathname.split('/')[1] === pagename ||
  location.origin + '/'+pagename + '.html' === location.href.split('#')[0]
    ? cb()
    : null
}

//////////////////////
// DOM HOOKS
///////////////////////
const mainDOM =
  $$('main')[0]

const headerDOM =
  $$('header')[0]

const navListDOM =
  $$('header .nav-list')[0]

const loadingWrapperParentDOM =
  $$('.loading-wrapper-parent')

const sideBarsDOM =
  $$('.sidebar')

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

const sidecarScriptInjectDOM =
  $$('#sidecarScriptInject')[0]



///////////////////////
// iFrame Lazy Loader
///////////////////////

function iframeLazyLoad () {
  let guidestop = guideContentDOM.scrollTop
  let viewArea = document.body.offsetHeight
  let bottomBar = guidestop + viewArea

  guideiFrameDOM.forEach((item) => {
   let iframetop = item.parentElement.offsetTop

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

function sidebarStateCheckerOnScroll (scrollContainer) {
  
  // Set visiable area
  let topBar = scrollContainer.scrollTop
  let viewArea = document.body.offsetHeight
  let bottomBar = topBar + viewArea

  const headers = scrollContainer.querySelectorAll('h1, h2[id], h3')

  // State vars
  let invisibleHeadersByID = []
  let visibleHeadersByID = []
  
  headers
    .forEach((item) => {

     // Specific item's top
     let itemTopBar = item.offsetTop

     if(item.id) {
      visibleHeadersByID.push(item.id) 
     }
     else { 
      visibleHeadersByID.push(
        item.previousElementSibling.querySelectorAll('a[name]')[0].name
      )
     }
     
     // List invisible headers
    if(item.id) {
      topBar >= itemTopBar
       ? invisibleHeadersByID.push(item.id)
       : null
      bottomBar <= itemTopBar
       ? invisibleHeadersByID.push(item.id)
       : null
     }
     else {
      topBar >= itemTopBar
       ? invisibleHeadersByID.push(item.previousElementSibling.querySelectorAll('a[name]')[0].name)
       : null
      bottomBar <= itemTopBar
       ? invisibleHeadersByID.push(item.previousElementSibling.querySelectorAll('a[name]')[0].name)
       : null
     }

     // Filter out only visible headers
     for (var i = invisibleHeadersByID.length - 1; i >= 0; i--) {
       invisibleHeadersByID[i] === visibleHeadersByID[visibleHeadersByID.length-1]
         ? visibleHeadersByID.pop()
         : null
     }
  })
  
  // Clear any active class
  $$('.sidebar *.active').forEach((item) => {item.classList.remove('active')})
  
  // Get the current item
  let currentSideBarItemToHighlight = $$('a[href="#' + visibleHeadersByID[0] + '"]')[0]

  if(currentSideBarItemToHighlight !== undefined) {
    currentSideBarItemToHighlight.parentElement.classList.add('active')  
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
      link.onclick = (evt) => {
        changeSideBarLinkClass(evt.target)
      }

      listItem.appendChild(link)
      list.appendChild(listItem)
    })
  }

  if (flag === 'doc') {
    let docTOCpath = 'ul:nth-of-type(1) li ul li'
    let ucContentListItems = contextArea.querySelectorAll(docTOCpath)
    let cloneArry = []

    ucContentListItems.forEach((item) => {
      let newClone = item.cloneNode(true)
      newClone.childNodes[0].onclick = (evt) => {
        changeSideBarLinkClass(evt.target)
      }
      cloneArry.push(newClone)
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

      sideBarsDOM[0].appendChild(createdElements.section)
    }
  })
}

///////////////////////
// Router functions
///////////////////////

function changeNavClass(pagename) {
  $$('.nav-' + pagename)[0].classList.add('active')
}

function changeSideBarLinkClass(sidebarLink) {
  sidebarLink.closest('.sidebar')
             .querySelectorAll('li a')
             .forEach((aLink) => {
                 aLink.parentElement
                      .classList
                      .remove('active')
             })

  sidebarLink.parentElement
             .classList
             .add('active')
}

//////////////////////
// ROUTER Logic
//////////////////////

ifPage('guides', () => {
  analyticsPageFire('Guides')  
  changeNavClass('guides')

  if(WINDOW_WIDTH > '794') {
    createSidebars([guideAreaDOM])
    guideContentDOM.onscroll = () => {
      iframeLazyLoad()
      sidebarStateCheckerOnScroll(guideContentDOM)
    }
  } else {
    loadingWrapperParentDOM.forEach((item) => {
      const warningText = 'Interactive code playground not available in mobile'
      const warningDom = document.createElement('p')
      const warningDomChild = document.createElement('b')
      warningDomChild.textContent = warningText
      warningDom.appendChild(warningDomChild)
      item.parentNode.appendChild(warningDom)
      item.remove()
    })
  }
})

ifPage('apidocs', () => {
  analyticsPageFire('API Docs')
  changeNavClass('apidocs')
  createSidebars([docAreaDOM])

  // Hack for hiding dupe of ConnectCore
  const uch2cc = '#uport-connect .lib-doc > h2:nth-of-type(3)'
  const uch2ccDOM = $$(uch2cc)[0]
  const uch2ccDOMPlusAll = $$(uch2cc + ' ~ *')
  // hide(uch2ccDOM)
  // uch2ccDOMPlusAll.forEach((el) => {hide(el)})

  uch2ccDOM.remove()
  uch2ccDOMPlusAll.forEach((el) => {el.remove()})

  if(WINDOW_WIDTH > '794') {
    const docsContent = $$('.apidocs .content')[0]
    docsContent.onscroll = () => {
      sidebarStateCheckerOnScroll(docsContent)
    }
  }
})

ifPage('myapps', () => {
  analyticsPageFire('My Apps')
  changeNavClass('myapps')

  if (appmanagerInjectDOM.childNodes.length === 0 &&
    !(appmanagerInjectDOM.src)) {
      appmanagerInjectDOM.src="https://appmanager.uport.space/"
  }
})

ifPage('gitter', () => { 
  analyticsPageFire('Gitter')
  changeNavClass('gitter')

  if (sidecarScriptInjectDOM === undefined) {
    const elemID = 'sidecarScriptInject'
    if (!($$('#' + elemID)[0])) {
      let sidecarScriptInjectDOM = document.createElement('script')
      sidecarScriptInjectDOM.id="sidecarScriptInject"
      sidecarScriptInjectDOM.src="https://sidecar.gitter.im/dist/sidecar.v1.js"
      document.body.appendChild(sidecarScriptInjectDOM)
    }
  }
})

// TODO - Nav highlights in server side style
// Execute Nav if URL is full
if (!!location.hash) {
  const sidebarLink = $$('*[href="'+ location.hash + '"]')[0]
  setTimeout(() => {
      sidebarLink.click()
      changeSideBarLinkClass(sidebarLink)
  },2)
} else {
  ifPage('guides', () => { changeSideBarLinkClass($$('.sidebar a:first-child')[0]) })
  ifPage('apidocs', () => { changeSideBarLinkClass($$('.sidebar a:first-child')[0]) })
}

//////////////////////
// ANALYTICS
//////////////////////
$$('body')[0].onclick = (evt) => {
  evt.target.href
    ? analyticsLinkFire(evt.target.href)
    : null
}
