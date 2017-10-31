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

const toggleVisible = (elem) => {
  if(elem.style.display === 'none' || elem.style.display === '') {
    show(elem)
  } else {
    hide(elem)
  }
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
////////////////////////

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
  if(sidebarLink){
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
}






////////////////////
// uPort Setup
////////////////////

const uport = new uportconnect.Connect('uPort Demo', {
  clientId: '0x2bede7ae69a9aa7684c373ae33fb21162e565e52',
  signer: uportconnect.SimpleSigner('d2942f08d12611429c0ab9ea39eeda128253553d356b4c9f9f17f95e141cafc8')
})

const web3 = uport.getWeb3()


////////////////////
// Contract setup BTN
////////////////////

function MyContractSetup () {
  let MyContractABI = web3.eth.contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "share",
          "type": "uint256"
        }
      ],
      "name": "updateShares",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getShares",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }
  ])
  let MyContractObj = MyContractABI.at("0x71845bbfe5ddfdb919e780febfff5eda62a30fdc")
  return MyContractObj
}

const MyContract = MyContractSetup()

////////////////////
// LOGIN BTN
////////////////////

// Simple button onclick handler
window.loginRequest = () => {
  
  // uport based login with...
  // specific credential requests
  // notifcations
  // custom QR
  // Clickable as a link for mobile

  if(!getUser()) {
    console.log('no user')
    uport.requestCredentials(
      {
        requested: ['name', 'avatar', 'phone', 'country'],
        notifications: true
      },
      (uri) => {
        
        const qrKJUA = kjua({
          text: uri,
          fill: '#000000',
          size: 300,
          back: 'rgba(255,255,255,0)'
        })

        if(window.location.pathname === '/') {
          $$('.state-1')[0].style.display='none';
          $$('.state-2b1')[0].style.display='block';

          // Create wrapping link for mobile touch
          let aTag = document.createElement('a')
          aTag.href = uri

          // Nest QR in <a> and inject
          aTag.appendChild(qrKJUA)
          $$('.kqr')[0].appendChild(aTag)
        }

        if(window.location.pathname === '/guides' || 
           window.location.pathname === '/guides.html') {

          $$('.kqr').forEach((qr) => {

            let aTag = document.createElement('a')
                aTag.href = uri
                aTag.style.display = 'block'
                aTag.appendChild(qrKJUA.cloneNode())

            qr.appendChild(aTag)
          })
          
        }

        
      }).then((userProfile) => {
        
        setUser(userProfile)
        uport.pushToken = getUser().pushToken

        if(window.location.pathname === '/') {
          rcExampleLoggedIn()
        }
        if(window.location.pathname === '/guides' || 
           window.location.pathname === '/guides.html') {
          rcExampleLoggedIn()
          togglePostLoggedIn_GUIDES()
        }
    })
  } else {
    console.log('yes user')
    if(window.location.pathname === '/') {
      rcExampleLoggedIn()
    }
    if(window.location.pathname === '/guides' || 
       window.location.pathname === '/guides.html') {
      togglePostLoggedIn_GUIDES()
    }
  }
}

function chooseShowQR () {
  $$('.state-1')[0].style.display='none';
  $$('.state-2b1')[0].style.display='block';
}



////////////////////
// Attest BTN
////////////////////

window.attestationBtn = () => {
  console.log('btn hit')
  if(!uport.pushToken){
    uport.pushToken = getUser().pushToken
    console.log('push token assigned')
  }
  console.log('get ready to call attestCreds')
  uport.attestCredentials({
    sub: getUser().address,
    claim: { "Docs Demo": "Unlocked Achievement" },
    exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000
  })
  console.log('called attestCreds')
  $$('.attestMessage')[0].style.display = 'block'; 
  console.log('show message')
}
////////////////////
// Sign BTN
////////////////////

window.signTxBtn = () => { 
    // Transaction signing (that will fire a QR to scan or card in the mobile app)
    MyContract.updateShares('10', (error, txHash) => {
      if (error) { throw error }
        waitForMined(txHash, { blockNumber: null }, // see next area
        function pendingCB () {
          // Signal to the user you're still waiting
          // for a block confirmation
          $$('.signTxPending')[0].style.display = 'block';
        },
        function successCB (data) {
          // Great Success!
          // Likely you'll call some eventPublisherMethod(txHash, data)
          $$('.signTxComplete')[0].style.display = 'block';
          getCurrentDataFromChain(window.loggedInUser.rinkebyID)
          $$('.signTxConfirm')[0].style.display = 'inline';
        }
      )
    })
    
    $$('.signTxMessage')[0].style.display = 'block'; 
}
////////////////////
// SET/GET USER
////////////////////
function setUser (credentials) {

  window.loggedInUser = credentials
  
  // uPort addresses are a hash of all
  // its different network identities

  // We must grab the explicit address 
  // of the ID to match the network the contract is on!
  
  const decodedId = uportconnect.MNID.decode(window.loggedInUser.address)
  window.loggedInUser.rinkebyID = decodedId.address
  
  console.log(window.loggedInUser)
  
  // The networks are identified as such
  // Mainnet (network: 0x1)
  // Ropsten (network: 0x3)
  // Rinkeby (network: 0x4)
  // Kovan   (network: 0x42)

  // Put the object into storage
  localStorage.setItem('loggedInUser', JSON.stringify(window.loggedInUser))

  var retrievedObject = JSON.parse(localStorage.getItem('loggedInUser'))

  console.log('retrievedObject: ', retrievedObject);
  
  console.log("uPort master address: " + window.loggedInUser.address)
  console.log("uPort Rinkeby address: " + window.loggedInUser.rinkebyID)
}
function unSetUser () {
  window.loggedInUser = {}
  window.localStorage.removeItem('loggedInUser')
  $$('.nav-item.nav-Luser-area')[0].remove()
}
function getUser () {
  window.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  return window.loggedInUser
}
/////////////////////
// DATA Utilities
/////////////////////
// Populate UI
function getCurrentDataFromChain (userID) {
  if(userID === undefined) {
    let user = getUser()
    userID = user.rinkebyID
  }
  MyContract.getShares.call(userID, (error, response) => {
    if (error) { throw error }
    console.log(response.c)
    toggleExistingDataLoad(response.c)
  })  
}
// Callback handler for whether it was mined or not
const waitForMined = (txHash, response, pendingCB, successCB) => {
  if (response.blockNumber) {
    successCB()
  } else {
    pendingCB()
    pollingLoop(txHash, response, pendingCB, successCB)
  }
}
// Recursive polling to do continuous checks for when the transaction was mined
const pollingLoop = (txHash, response, pendingCB, successCB) => {
  setTimeout(function () {
    web3.eth.getTransaction(txHash, (error, response) => {
      if (error) { throw error }
        if (response === null) {
          response = { blockNumber: null }
        } // Some ETH nodes do not return pending tx
        waitForMined(txHash, response, pendingCB, successCB)
    })
  }, 1000) // check again in one sec.
}






/////////////////////
// UI Updates
/////////////////////
function hideQRs () {
  $$('.kqr').forEach((qr) => qr.style.display = 'none')
}
// function userProfileDataInjection () {
//   $$('#userProfileData')[0].innerHTML = 
//     JSON.stringify(window.loggedInUser, undefined, 2)
// }
// function avatarSafeInject(domImgElement) {
//   if(!(window.loggedInUser.avatar.uri.indexOf('ipfs') !== -1)){
//     domImgElement.src = 
//       "data:image/png;base64, " + 
//       window.loggedInUser.avatar.data
//   } else {
//     domImgElement.src =
//       window.loggedInUser.avatar.uri
//   }
// }
// function injectName () {
//     $$('.user-wrap .name')[0].innerHTML = 
//     window.loggedInUser.name;
// }
// function showDataAndUser () {
//   show($$('.data-wrap')[0])
//   show($$('.user-wrap')[0])
// }

function showAttestationArea() {
  show($$('.attestation-area')[0])
}
function showSignTxArea() {
  show($$('.signTx-area')[0])

}

function showUserinHeader () {
  let userData = JSON.parse(localStorage.getItem('loggedInUser'))
  let userTemplate = `
    <li class="nav-item nav-Luser-area">
      <div class="Luser" onclick="if($$('.log-out')[0]){toggleVisible($$('.log-out')[0])}" style="height: 0;position: relative;top: -25px;">
        <img class="Luser-pic" src="${ userData.avatar.uri }">
        <div class="Luser-menu">
          <ul>
            <li class="Luser">
              <div class="Luser-name"><b>${ userData.name }</b></div>
              <div class="Luser-addr">${ userData.address.substr(0,10) + '...' }</div>
            </li>
            <li class="log-out" onclick="unSetUser()">Log Out</li>
          </ul>
        </div>
      </div>
    </li>
  `
  navListDOM.innerHTML += userTemplate
}

////////////////////
// UIToggles
////////////////////

function rcExampleLoggedIn () {

  $$('.state-2b2')[0].style.display='block';
  $$('.state-2b1')[0].style.display = 'none'

  console.log(window.loggedInUser)

  // JSON DATA
  $$('.state-2b2 .user-data-payload')[0].innerHTML = 
    JSON.stringify(window.loggedInUser, undefined, 2)
  
  // AVATAR
  if(!(window.loggedInUser.avatar.uri.indexOf('ipfs') !== -1)){
    $$('.state-2b2 .status-user-box .user-pic')[0].src = 
      "data:image/png;base64, " + window.loggedInUser.avatar.data
  } else {
     $$('.state-2b2 .status-user-box .user-pic')[0].src = window.loggedInUser.avatar.uri
  }

  // NAME
  $$('.state-2b2 .status-user-box .user-name')[0].innerHTML = window.loggedInUser.name;

  window.showUserinHeader()
}

function togglePostLoggedIn_GUIDES () {
  hideQRs()
  // userProfileDataInjection()
  // avatarSafeInject($$('.user-wrap .avatar')[0])
  // injectName()
  // showDataAndUser()f
  showAttestationArea()
  showSignTxArea()
  getCurrentDataFromChain(window.loggedInUser.decodedID)
}

function toggleExistingDataLoad (data) {
  $$('.signTxCurrent .number')[0].textContent = data
  $$('.signTx-area')[0].style.display = 'block'
}

function toggleViewSample () {
  document.querySelector('.state-2a.sample').style.display='block';
  document.querySelector('.state-1').style.display='none';
}

window.onload = () => { 

  //////////////////////
  // ROUTER Logic
  //////////////////////

  ifPage('', () => {
    
    // Scroll area
    let portalDOM = mainDOM.querySelector('.portal')
    
    // Last know position
    let lastScrollTop = 0;
    
    // Event listener
    portalDOM.onscroll = () => { 

      // Current position
      let scrolltop = portalDOM.scrollTop;

      // Clear pre-existing page-load state
      if (headerDOM.style.background = 'none') { headerDOM.style.background = 'rgba(52,52,79,0)';}           

      // Logic of scrolling up or down
      if (scrolltop > lastScrollTop){ lastScrollTop = lastScrollTop + 1}
      if (scrolltop < lastScrollTop){ lastScrollTop = lastScrollTop - 1}

      // Set last known position
      lastScrollTop = scrolltop;
    
      // Change the color 
      headerDOM.style.background = 'rgba(52,52,79,'+( (lastScrollTop*.01) / 3)+')';  
    }
  })

  ifPage('guides', () => {
    analyticsPageFire('Guides')  
    changeNavClass('guides')
    createSidebars([guideAreaDOM])
    window.loginRequest()

    if(WINDOW_WIDTH > '794') {
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
    if(WINDOW_WIDTH > '794') {
      createSidebars([docAreaDOM])
    }

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

  // Execute Nav if URL is full
  if (location.hash) {
    const sidebarLink = $$('*[href="'+ location.hash + '"]')[0]
    setTimeout(() => {
        sidebarLink.click()
        changeSideBarLinkClass(sidebarLink)
    },2)
  } else {
    ifPage('guides', () => { changeSideBarLinkClass($$('.sidebar a:first-child')[0]) })
    ifPage('apidocs', () => { changeSideBarLinkClass($$('.sidebar a:first-child')[0]) })
  }

  // ANALYTICS
  $$('body')[0].onclick = (evt) => {
    evt.target.href
      ? analyticsLinkFire(evt.target.href)
      : null
  }

  JSON.parse(localStorage.getItem('loggedInUser'))
    ? showUserinHeader()
    : null
}