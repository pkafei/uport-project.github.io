'use strict';

// Utils
var $$ = function $$(item) {
  return document.querySelectorAll(item);
};

var pvd = function pvd(e) {
  return e.preventDefault();
};

// Button assignments
var developersNav = $$('a.logo-link')[0];

var guidesNav = $$('[href="#guides"]')[0];

var apidocsNav = $$('[href="#apidocs"]')[0];

var toolsNav = $$('[href="#tools"]')[0];

var myappsNav = $$('[href="#myapps"]')[0];

var gitterNav = $$('[href="#gitter"]')[0];

var signInNav = $$('.sign-in-link')[0];

var logOutNav = $$('.log-out a')[0];

// Main hook
var mainArea = $$('main')[0];

var docmethodsParent = $$('.lib-doc ul:first-child')[0];

var docmethodsList = $$('.lib-doc ul:first-child li ul li a');

console.log('xxxx');
console.dir(docmethodsList);

docmethodsList.forEach(function (link) {
  console.log(link.hash);
});
console.log('ho');

// Navigation click handeling
developersNav.onclick = function (e) {
  pvd(e);
  mainArea.classList.add('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

guidesNav.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.add('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

apidocsNav.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.add('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

toolsNav.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.add('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

myappsNav.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.add('myapps');
  mainArea.classList.remove('gitter');
};

gitterNav.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.add('gitter');
};

signInNav.onclick = function (e) {
  pvd(e);
  $$('.user-area')[0].classList.add('menu-open');
};

logOutNav.onclick = function (e) {
  pvd(e);
  $$('.user-area')[0].classList.remove('menu-open');
};