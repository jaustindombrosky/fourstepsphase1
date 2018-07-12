


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

var ctx = document.getElementById('projectionWithFourSteps').getContext('2d');
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