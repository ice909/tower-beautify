// ==UserScript==
// @name         Tower美化
// @namespace    http://tampermonkey.net/
// @version      2025-07-28
// @description  Tower美化
// @author       Ice
// @match        https://tower.im/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function applyImprovedGlassEffect() {
    const element = document.querySelector('.page.page-root.simple-pjax');

    element.style.background = 'rgba(255, 255, 255, 0.2)';
    element.style.backdropFilter = 'blur(20px)';
    element.style.webkitBackdropFilter = 'blur(20px)';
    element.style.border = '1px solid rgba(255, 255, 255, 0.8)';
    element.style.borderRadius = '8px';
    element.style.boxShadow = '0 4px 20px 0 rgba(0, 0, 0, 0.1)';

    const todoContainer = document.querySelectorAll(
      'tr-todo-item-plus .todo-content-container'
    );
    todoContainer.forEach((e) => {
      e.style.opacity = 1;
    });

    const todoProjects = document.querySelectorAll(
      'tr-todo-item-plus .todo-content .todo-infos .todo-project'
    );
    todoProjects.forEach((e) => {
      e.style.color = '#000';
    });
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyImprovedGlassEffect);
  } else {
    applyImprovedGlassEffect();
  }
})();
