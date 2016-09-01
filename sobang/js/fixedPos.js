var scroll;
function loaded() {
	scroll = new iScroll('containerWrap', { scrollbarClass: 'myScrollbar' });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);