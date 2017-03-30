;
(function () {
    "use strict";

    var headerResize = function (header, target) {
        target.style.paddingTop = header.offsetHeight + 'px';
        return header.offsetHeight;
    };

    document.addEventListener("DOMContentLoaded", function () {
        var header = document.getElementById('header'),
            content = document.getElementById('content'),
            headerMenu = document.getElementById('header-menu'),
            footerMenu = document.getElementById('footer-menu'),
            headerHamburger = document.getElementById('header-hamburger'),
            footerHamburger = document.getElementById('footer-hamburger');

        headerResize(header, content);

        window.onresize = function () {
            headerResize(header, content);
        };

        [headerHamburger, footerHamburger].forEach(function (item) {
            item.addEventListener('click', function () {
                var target = headerMenu;
                if (item == footerHamburger) {
                    target = footerMenu;
                }

                var targetUl = target.getElementsByTagName('ul')[0];

                if (!target.offsetHeight) {
                    target.style.height = targetUl.offsetHeight + 'px';
                }
                else {
                    target.style.height = 0;
                }

                if (target == headerMenu) {
                    setTimeout(function () {
                        headerResize(header, content);
                    }, 300);
                }
            });
        });
    });
})();