// ==UserScript==
// @name         Youtube no home page
// @namespace    http://tampermonkey.net/
// @version      2024-01-07
// @description  try to take over the world!
// @author       You
// @match        *://music.youtube.com/*
// @match        *://.*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("primary").style.display="none";
})();
