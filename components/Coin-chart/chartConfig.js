export const chartOptions = {
    lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5,
    },
    animation: {
        duration: 2000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        xAxes: [
            {
                type: 'time',
                distribution: 'linear',
                ticks: {
                    fontColor: '#ffffff',
                    fontSize: 15
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Time',
                    fontColor: '#0466c8',
                    fontSize: 18
                },
                gridLines: {
                    display: true,
                    color: '#5E5E5E',
                    lineWidth: 1,
                    z: 0
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: '#ffffff',
                    fontSize: 15,
                    callback: (value, index, values) => {
                        return '$' + value;
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Price',
                    fontColor: '#0466c8',
                    fontSize: 18
                },
                gridLines: {
                    display: true,
                    color: '#5E5E5E',
                    lineWidth: 1,
                    z: 0
                }
            }
        ]

    }
};