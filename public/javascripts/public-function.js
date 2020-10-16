// Scroll
window.onscroll = function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById('nav-main').style.backgroundColor = "#ffffff";
        document.getElementById('nav-main').style.boxShadow = "0 1px 2px rgba(150, 150, 150, 0.3), 0 2px 3px rgba(150, 150, 150, 0.2)";
    } else {
        document.getElementById('nav-main').style.backgroundColor = "#f5f8fd";
        document.getElementById('nav-main').style.boxShadow = "none";
    }
}