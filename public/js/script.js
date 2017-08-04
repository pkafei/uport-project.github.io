'use strict';

///////////////////////
// Window URL Bar Clear
///////////////////////
window.history.pushState('', '', window.location.pathname);

///////////////////////
// Utilities
///////////////////////
var pvd = function pvd(e) {
  return e.preventDefault();
};
var hide = function hide(item) {
  item.style.display = 'none';
};
var show = function show(item) {
  item.style.display = 'block';
};
var $$ = function $$(item) {
  return document.querySelectorAll(item);
};
var sanitizeHash = function sanitizeHash(text) {
  return text.toLowerCase().split(' ').join('-');
};

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

var mainDOM = $$('main')[0];

var navDOM = $$('header')[0];

var userAreaDOM = $$('.user-area')[0];

var sideBarsDOM = $$('.sidebar');

var libDocDOM = $$('.lib-doc')[0];

var guideAreaDOM = $$('.guide section');

var docAreaDOM = $$('.lib section');

var rcIframeInjectDOM = $$('#rcIframeInject')[0];

var acIframeInjectDOM = $$('#acIframeInject')[0];

var stIframeInjectDOM = $$('#stIframeInject')[0];

var contentShortcutsDOM = $$('.content-shortcuts')[0];

///////////////////////
// Router Logic
///////////////////////

function changeMainClass(desiredHashText) {
  mainDOM.classList.forEach(function (mainClass) {
    mainClass !== 'main' ? mainDOM.classList.remove(mainClass) : null;
  });
  mainDOM.classList.add(desiredHashText);
}

contentShortcutsDOM.onclick = function (evt) {
  var tabArea = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList[0].split('-').join('');
  changeMainClass(tabArea);
};

navDOM.onclick = function (evt) {
  var desiredHash = evt.target.parentElement.hash;

  if (desiredHash !== undefined && desiredHash !== '') {
    var desiredHashText = evt.target.parentElement.hash.replace('#', '');
    changeMainClass(desiredHashText);

    // TODO: upgrade to scrolltop sniff
    // Get the number of pixels scrolled
    // var  intElemScrollTop = $$(someElement).scrollTop;

    // Late injection for webpackbin to render correct
    if (desiredHashText === 'guides') {
      if (rcIframeInjectDOM.childNodes.length === 0) {
        rcIframeInjectDOM.innerHTML = "<iframe style='width:100%; max-width:95%; height: 800px' src='https://www.webpackbin.com/bins/-Kq-LKec34MlPK9_UMVr'/>";
      }
      if (acIframeInjectDOM.childNodes.length === 0) {
        acIframeInjectDOM.innerHTML = "<iframe style='width:100%; max-width:95%; height: 800px' src='https://www.webpackbin.com/bins/-KqPA8lwzM77gVsDtV8V'/>";
      }
      if (stIframeInjectDOM.childNodes.length === 0) {
        stIframeInjectDOM.innerHTML = "<iframe style='width:100%; max-width:95%; height: 800px' src='https://www.webpackbin.com/bins/-KqPKG4Ap74btrL3DU94'/>";
      }
    }
  }

  // Exception for external links
  if (desiredHash !== '') {
    pvd(evt);
  }
};

///////////////////////
// Sidebar Creator
///////////////////////

function createSidebarList(contextArea, flag) {

  var list = document.createElement('ul');

  if (flag === 'guide') {
    var contextAreaH2s = contextArea.querySelectorAll('h2');

    contextAreaH2s.forEach(function (el) {
      var url = sanitizeHash(el.innerHTML);
      var listItem = document.createElement('li');
      var link = document.createElement('a');

      el.id = url;
      link.innerHTML = el.innerHTML;
      link.href = '#' + url;

      listItem.appendChild(link);
      list.appendChild(listItem);
    });
  }

  if (flag === 'doc') {
    var docTOCpath = 'ul:nth-of-type(1) li ul li';
    var ucContentListItems = contextArea.querySelectorAll(docTOCpath);
    var cloneArry = [];

    ucContentListItems.forEach(function (item) {
      cloneArry.push(item.cloneNode(true));
    });

    if (cloneArry.length > 0) {
      cloneArry.forEach(function (item) {
        if (item.childNodes[1] !== undefined) {
          item.childNodes[1].remove();
        }
        list.appendChild(item);
      });
    }
  }

  return list;
}

function createSidebarAreas(currentSource, sourceFlag) {
  var contextArea = currentSource;

  var createdSection = document.createElement('section');

  var contextAreaH1 = contextArea.querySelector('h1');
  contextAreaH1.id = contextAreaH1.textContent.toLowerCase().split(' ').join('-');

  var contextAreaH1Clone = contextAreaH1.cloneNode(true);
  contextAreaH1Clone.id = '';

  var h1Link = document.createElement('a');
  h1Link.href = "#" + contextAreaH1.textContent.toLowerCase().split(' ').join('-');
  h1Link.appendChild(contextAreaH1Clone);

  return {
    section: createdSection,
    header: h1Link,
    list: createSidebarList(contextArea, sourceFlag)
  };
}

function createSidebars(sources) {
  sources.forEach(function (source) {
    var flag = void 0;
    source[0].parentNode.className === 'guide' ? flag = 'guide' : flag = 'doc';
    for (var i = 0; i < source.length; i++) {
      var createdElements = createSidebarAreas(source[i], flag);
      createdElements.section.appendChild(createdElements.header);
      createdElements.section.appendChild(createdElements.list);
      flag === 'guide' ? sideBarsDOM[0].appendChild(createdElements.section) : sideBarsDOM[1].appendChild(createdElements.section);
    }
  });
}

createSidebars([guideAreaDOM, docAreaDOM]);

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
var uch2cc = '#uport-connect .lib-doc > h2:nth-of-type(3)';
var uch2ccDOM = $$(uch2cc)[0];
var uch2ccDOMPlusAll = $$(uch2cc + ' ~ *');
hide(uch2ccDOM);
uch2ccDOMPlusAll.forEach(function (el) {
  hide(el);
});