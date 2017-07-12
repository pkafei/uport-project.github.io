'use strict';

// Utils
var $$ = function $$(item) {
  return document.querySelectorAll(item);
};

var pvd = function pvd(e) {
  return e.preventDefault();
};

// Button assignments
var developersBtn = $$('a.logo-link')[0];

var guidesBtn = $$('[href="#guides"]')[0];

var apidocsBtn = $$('[href="#apidocs"]')[0];

var toolsBtn = $$('[href="#tools"]')[0];

var myappsBtn = $$('[href="#myapps"]')[0];

var gitterBtn = $$('[href="#gitter"]')[0];

var signInBtn = $$('.sign-in-link')[0];

var logOutBtn = $$('.log-out a')[0];

// Main hook
var mainArea = $$('main')[0];

// Navigation click handeling
developersBtn.onclick = function (e) {
  pvd(e);
  mainArea.classList.add('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

guidesBtn.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.add('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

apidocsBtn.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.add('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

toolsBtn.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.add('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.remove('gitter');
};

myappsBtn.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.add('myapps');
  mainArea.classList.remove('gitter');
};

gitterBtn.onclick = function (e) {
  pvd(e);
  mainArea.classList.remove('portal');
  mainArea.classList.remove('guides');
  mainArea.classList.remove('apidocs');
  mainArea.classList.remove('tools');
  mainArea.classList.remove('myapps');
  mainArea.classList.add('gitter');
};

signInBtn.onclick = function (e) {
  pvd(e);
  $$('.user-area')[0].classList.add('menu-open');
};

logOutBtn.onclick = function (e) {
  pvd(e);
  $$('.user-area')[0].classList.remove('menu-open');
};