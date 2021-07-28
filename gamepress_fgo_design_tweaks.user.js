// ==UserScript==
// @name         Gamepress FGO Design Tweaks
// @namespace    https://github.com/Hoithmach/gamepress-fgo-design-tweaks
// @version      0.1
// @description  Adjusts Gamepress' layout
// @author       Hoithmach
// @match        https://gamepress.gg/grandorder/*
// @icon         https://gamepress.gg/grandorder/sites/grandorder/files/fgo-favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("menu-container")[0].remove()
    document.getElementsByClassName("gamepress-top-branding")[0].remove()

    var search = document.getElementsByClassName("gamepress-top-container")[0]

    search.style.position = "fixed";
    search.style.zIndex = 1000;
    search.style.width = "100vw";

    document.getElementsByClassName("top-search-menu")[0].style.margin = "10px 10px";

})();