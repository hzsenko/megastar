;
(function () {
    "use strict";

    var headerResize = function (header, target) {
        target.style.paddingTop = header.offsetHeight + 'px';
    };

    document.addEventListener("DOMContentLoaded", function () {
        var header = document.getElementById('header'),
            target = document.getElementById('content'),
            headerMenu = document.getElementById('header-hamburger'),
            footerMenu = document.getElementById('footer-hamburger');

        headerResize(header, target);

        window.onresize = function () {
            headerResize(header, target);
        };

        [headerMenu,footerMenu].forEach(function(item){
           item.addEventListener('click', function(){
                var targetMenu = this.parentNode.nextElementSibling;

               targetMenu.classList.toggle('show');

               if(item.id == 'header-hamburger') {
                   headerResize(header, target);
               }
           });
        });
    });
})();