

var ctx = document.getElementById('projectionWithFourSteps').getContext('2d');
var ctx2 = document.getElementById('projectionWithoutFourSteps').getContext('2d');
console.log('with')
var projectionWithoutFourSteps = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: "#02BDA7",
            borderColor: "#01B5A2",
            data: [
                5,
                2,
                3,
                9,
                6,
                10,
                22
            ],
            fill: true,
        }]
    },
    options: {
        color: function(context) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value < 0 ? 'red' :  // draw negative values in red
                index % 2 ? 'blue' :    // else, alternate values in blue and green
                'green';
        },
        responsive: true,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }

});

console.log('with')
var projectionWithFourSteps = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: "#02BDA7",
            borderColor: "#01B5A2",
            data: [
                5,
                2,
                30,
                32,
                56,
                70,
                100
            ],
            fill: true,
        }]
    },
    options: {
        width:500,
        height:300,
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }

});







//Progress Bars For Snapshot

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
    aria-valuenow="${value}" aria-valuemin="${value}" aria-valuemax="100" style="width:${value}%">
    ${value}% Complete (${name})
    </div>`
    className = `.${className}`;
    document.getElementById(id).innerHTML = div;
    document.querySelector(className).style.backgroundColor = color;
}


function between(x, min, max){
    console.log(x >= min && x <= max)
    return x >= min && x <= max
}

function handleProgressBars(array){
    array.forEach((object, index) => {
        let {name, id, className, value} = object;
        console.log(object)
        let color;
        if(between(value, 1, 25)){
            color = '#E54D60'; //Red
        } else if(between(value, 25, 50)){
            color = "#FCBB55"; //Orange
        } else if(between(value, 50, 75)){
            color = "#09BEA8"; //Green
        } else if(between(value, 75, 100)){
            color = "#00B8D0" //Blue
        }
        makeProgressBar(name, id, className, value, color)
    })
}



// function beforePrintHandler () {
//     let Chart = projectionWithoutFourSteps;
//     for (var id in Chart.instances) {
//       Chart.instances[id].resize()
//     }
//   }

// window.onbeforeprint = beforePrintHandler()
window.onload = handleProgressBars(progressArray);

