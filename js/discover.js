let discovertab = document.getElementById('discover-tab');
let discoverTabWidth = window.getComputedStyle(discovertab).width;
let discoverSideBar = document.getElementById('sidebar');
let width = window.innerWidth;

let networthValue = {
    value: -14514,
    id: 'networth-label'
} 


let cashflowValue = {
    value: 1585,
    id: 'cashflow-label'
}

let valuesArray = [networthValue, cashflowValue]

var onresize = function() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    if(width >= 639){
        discoverSideBar.className = 'discover-sidebar'
    }
}

function handleCurrency(incomingCurrency){
    let value = incomingCurrency.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let spot = value.indexOf('.');
    let newValue = value.slice(0, spot);
    return newValue;
}

function handleValues(){
    valuesArray.forEach(item => {
        let idLabel = document.getElementById(item.id);
        if(item.value > 0){

            idLabel.style.color = "#B4E1CE"
            idLabel.innerHTML = handleCurrency(item.value);

        } else if(item.value < 0){

            idLabel.style.color = "#D25956"
            idLabel.innerHTML = handleCurrency(item.value);
        }
    })
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

function toggleStrategy(id, activeClassName, disableClassName){
    let strategy = document.getElementById(id);
    if(strategy.className === activeClassName){
        strategy.className = disableClassName;
    } else if(strategy.className === disableClassName) {
        strategy.className = activeClassName;
    }
}

window.addEventListener("resize", onresize);
window.onload = handleValues();
