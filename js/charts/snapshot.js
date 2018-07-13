
let assetsValue = Math.floor((Math.random() * 100) + 0);;


let assets = {
    name: 'Assets',
    id: 'assets-percentage',
    className: 'assets-bar',
    value: Math.floor((Math.random() * 100) + 0)
}

let liabilities = {
    name: 'Liabilites',
    id: 'liabilities-percentage',
    className: 'liabilities-bar',
    value: Math.floor((Math.random() * 100) + 0)
}

let networth = {
    name: 'Networth',
    id: 'networth-percentage',
    className: 'networth-bar',
    value: Math.floor((Math.random() * 100) + 0)
}

let income = {
    name: 'Income',
    id: 'income-percentage',
    className: 'income-bar',
    value: Math.floor((Math.random() * 100) + 0)
}

let expenses = {
    name: 'Expenses',
    id: 'expenses-percentage',
    className: 'percentage-bar',
    value: Math.floor((Math.random() * 100) + 0)
}

let netcashflow = {
    name: 'Net Cash Flow',
    id: 'netcashflow-percentage',
    className: 'netcashflow-bar',
    value: Math.floor((Math.random() * 100) + 0)
}

let progressArray = [assets, liabilities, networth, income, expenses, netcashflow];

function makeProgressBar(name, id, className, value, color){
    let div = `<div class="progress-bar ${className}" role="progressbar"
    aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100" style="width:${value}%">
    ${value}% Complete (${name})
    </div>`
    className = `.${className}`;
    console.log(className)
    console.log(color)


    document.getElementById(id).innerHTML = div;
    document.querySelector(className).style.backgroundColor = color;

}


function handleProgressBars(array){
    array.forEach((object, index) => {
        let {name, id, className, value} = object;
        console.log(object)
        let color;
        if(value >= 50){
            color = '#09BEA8';
        } else if ( value <= 50 ){
            color = '#E54D60'
        }
        makeProgressBar(name, id, className, value, color)
    })
}


window.onload = handleProgressBars(progressArray);

