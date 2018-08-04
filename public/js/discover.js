let discovertab = document.getElementById('discover-tab');
let discoverTabWidth = window.getComputedStyle(discovertab).width;
let discoverSideBar = document.getElementById('sidebar');
let width = window.innerWidth;

let user = {
    networth: -14514,
    cashflow: 1585,
    paidMember: true,
    checklist: {
        healthinsurance: false,
        lifeinsurance: false,
        emergencyfund: false,
        disabilityinsurance: false,
        creditcardscore: false,
        debtelimination: false,
        retirementplanning: false,
        wealthaccumulation: false,
        majorpurchaseplan: false,
    }
}


let networthValue = {
    value: user.networth,
    id: 'networth-label',
    sidebarid: 'networth-sb'
} 


let cashflowValue = {
    value: user.cashflow,
    id: 'cashflow-label',
    sidebarid: 'cashflow-sb'
}

let healthinsuranceObject = {
    active: user.checklist.healthinsurance,
    id: 'heath-insurance-strategy',
    activeClassName: 'strategy-circle health-insurance-active',
    disableClassName: 'strategy-circle health-insurance-disable'
}

let emergencyfundObject = {
    active: user.checklist.healthinsurance,
    id: 'personal-emergency-fund-strategy',
    activeClassName: 'strategy-circle  personal-emergency-fund-active',
    disableClassName: 'strategy-circle  personal-emergency-fund-disabled'
}

let majorpurchaseplanObject = {
    active: user.checklist.healthinsurance,
    id: 'major-purchase-strategy',
    activeClassName: 'strategy-circle  major-purchase-active',
    disableClassName: 'strategy-circle  major-purchase-disabled'
}

let valuesArray = [networthValue, cashflowValue];

let strategyChecklist = [emergencyfundObject, majorpurchaseplanObject];

let freeMemberProjectionDiv =`
    <div class='card-content-column'>
    <div class='title-wrapper'>
            <label class='card-title'>Your Current Projection</label>
    </div>
    <div class='card-content-column-child'>
        <img src='./assets/images/placeholders/discovergraph1.svg' />
    </div>
    </div>
    <div class='card-content-column'>
    <div class='title-wrapper'>
            <label class='card-title'>Your Projection with FourSteps</label>
    </div>
    <div class='card-content-column-child'>
            <img src='./assets/images/placeholders/discovergraph2.svg' />
    </div>
    </div>
`

let paidMemberProjectionDiv = `
    <div class="card-content-column">
        <div class="title-wrapper-column">
                <label class='card-title'>Projections</label>
                <label>Net Worth Projection</label>
        </div>
        
        <div class='card-content-column-child placeholder-height'>
            <img src='./assets/images/placeholders/discovergraph1.svg' />
        </div>
    </div>
`







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
        let sidebarID = document.getElementById(item.sidebarid);
        let currency = handleCurrency(item.value);
        if(item.value > 0){
            idLabel.style.color = "#B4E1CE"
            idLabel.innerHTML = currency;
            sidebarID.innerHTML = currency;

        } else if(item.value < 0){

            idLabel.style.color = "#D25956"
            idLabel.innerHTML = currency;
            sidebarID.innerHTML = currency;

        }
    })
}

function handleMember(){
    let financialSnapshotDiv = document.getElementById('financial-snapshot');
    let financialSnapTitle = document.getElementById('financial-snapshot-text');
    let becomeFourStepsMemberDiv= document.getElementById('become-foursteps-member');
    let graphProjectionsDiv = document.getElementById('graph-projections-parent');
    let netWorthHeader = document.getElementById('networth-header');
    let cashFlowHeader = document.getElementById('cashflow-header');

    if(user.paidMember){
       financialSnapTitle.style.display = 'block';
       becomeFourStepsMemberDiv.style.display = 'none';
       netWorthHeader.style.marginTop = 0;
       cashFlowHeader.style.marginTop = 0;
       graphProjectionsDiv.innerHTML = paidMemberProjectionDiv;
       graphProjectionsDiv.classList.remove("card-content-group");
    } else {
       becomeFourStepsMemberDiv.style.display = 'block'
       financialSnapTitle.style.display = 'none';
       graphProjectionsDiv.innerHTML = freeMemberProjectionDiv;
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

// function toggleStrategy(id, activeClassName, disableClassName){
//     let strategy = document.getElementById(id);
//     if(strategy.className === activeClassName){
//         strategy.className = disableClassName;
//     } else if(strategy.className === disableClassName) {
//         strategy.className = activeClassName;
//     }
// }


function toggleStrategy(strategy){
    let {id, activeClassName, disableClassName, active} = strategy;
    let strategyId = document.getElementById(id);
    if(!active){
        strategyId.className = disableClassName;
    } else if(active) {
        strategyId.className = activeClassName;
    }
}

function handleOnPageLoad(){
    handleValues();
    handleMember();
    strategyChecklist.forEach(strategy => toggleStrategy(strategy))
}

window.addEventListener("resize", onresize);
window.onload = handleOnPageLoad();
