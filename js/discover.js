let discovertab = document.getElementById('discover-tab');
let discoverTabWidth = window.getComputedStyle(discovertab).width;
let discoverSideBar = document.getElementById('sidebar');
let width = window.innerWidth;


var onresize = function() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    if(width >= 639){
        discoverSideBar.className = 'discover-sidebar'
    }
}


function handleToggle(){
    if(discoverSideBar.className === "discover-sidebar"){
        console.log('on')
        discoverSideBar.className = "discover-sidebar--after";
    } else if(sidebar.className === 'discover-sidebar--after') {
        discoverSideBar.className = 'discover-sidebar';
    }
}

function toggleSideBar(){
    width < 629? handleToggle() : console.log('screen too big')
}

window.addEventListener("resize", onresize);
