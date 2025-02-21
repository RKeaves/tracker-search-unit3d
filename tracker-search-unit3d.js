// ==UserScript==
// @name        tracker-search-unit3d
// @version     1.1
// @namespace   https://github.com/rkeaves
// @description This Tampermonkey script enhances torrent and request pages on supported UNIT3D based sites by automatically adding search links to other related sites. The script extracts the IMDb ID from the page and creates clickable links for quick searches on various torrent sites.
// @match       https://privatesilverscreen.cc/torrents/*
// @match       https://privatesilverscreen.cc/requests/*
// @match       https://onlyencodes.cc/torrents/*
// @match       https://onlyencodes.cc/requests/*
// @match       https://blutopia.cc/torrents/*
// @match       https://blutopia.cc/requests/*
// @match       https://upload.cx/torrents/*
// @match       https://upload.cx/requests/*
// @match       https://fearnopeer.com/torrents/*
// @match       https://fearnopeer.com/requests/*
// @downloadURL https://github.com/rkeaves/tracker-search-unit3d/raw/main/tracker-search-unit3d.js
// @updateURL   https://github.com/rkeaves/tracker-search-unit3d/raw/main/tracker-search-unit3d.js
// @author       -
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    function insertCustomLinks() {
        const metaIdsList = document.querySelector('ul.meta__ids');
        const imdbLink = document.querySelector('a[href^="https://www.imdb.com/title/tt"]');

        if (metaIdsList && imdbLink) {
            const imdbNumber = imdbLink.href.match(/tt(\d+)/)[1];

            const PSSLi = createCustomLink('PSS', `https://privatesilverscreen.cc/torrents?imdbId=${imdbNumber}`, 'Search PSS');
            const ptpLi = createCustomLink('PTP', `https://passthepopcorn.me/torrents.php?searchstr=tt${imdbNumber}`, 'Search PTP');
            const AntLi = createCustomLink('ANT', `https://anthelion.me/torrents.php?advgroupname=${imdbNumber}&searchsubmit=1`, 'Search ANT');
            const HawkLi = createCustomLink('HAWK', `https://hawke.uno/torrents?imdbId=${imdbNumber}&perPage=25`, 'Search HAWK');
            const bhdLi = createCustomLink('BHD', `https://beyond-hd.me/torrents?imdb=${imdbNumber}`, 'Search BHD');
            const bluLi = createCustomLink('BLU', `https://blutopia.cc/torrents?imdbId=${imdbNumber}`, 'Search BLU');
            const FNPLi = createCustomLink('FNP', `https://fearnopeer.com/torrents?imdbId=${imdbNumber}`, 'Search FNP');


            metaIdsList.insertBefore(PSSLi, metaIdsList.firstChild);
            metaIdsList.insertBefore(FNPLi, metaIdsList.firstChild);
            metaIdsList.insertBefore(HawkLi, metaIdsList.firstChild);
            metaIdsList.insertBefore(bluLi, metaIdsList.firstChild);
            metaIdsList.insertBefore(bhdLi, metaIdsList.firstChild);
            metaIdsList.insertBefore(ptpLi, metaIdsList.firstChild);
            metaIdsList.insertBefore(AntLi, metaIdsList.firstChild);

        }
    }

    function createCustomLink(text, href, title) {
        const li = document.createElement('li');
        li.className = `meta__${text.toLowerCase()}`;

        const link = document.createElement('a');
        link.className = 'meta-id-tag';
        link.href = href;
        link.title = title;
        link.target = '_blank';
        link.textContent = `[${text}]`;

        li.appendChild(link);
        return li;
    }

    // Run the function when the page is loaded
    window.addEventListener('load', insertCustomLinks);
})();
