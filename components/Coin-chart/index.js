import { useState, useEffect, useRef } from 'react';
import Chartjs from "chart.js";
import { chartOptions } from './chartConfig';
import styles from './CoinChart.module.scss';

const CoinChart = ({ coin }) => {
    const chartRef = useRef();
    const { day, week, year, coinData } = coin;
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
        switch (timeFormat) {
            case "24h":
                return day;
            case "7d":
                return week;
            case "1y":
                return year;
            default:
                return day;
        }
    };

    useEffect(() => {
        if (chartRef && chartRef.current && coinData) {

            const chartInstance = new Chartjs(chartRef.current, {
                type: "line",
                data: {
                    datasets: [
                        {
                            label: 'Price changes within 24hrs',
                            labelColor: '#ffffff',
                            data: determineTimeFormat(),
                            borderWidth: 3,
                            borderColor: "rgb(4, 102, 200)",
                            pointRadius: 0,
                            pointHoverBackgroundColor: "#2dc653"
                        },
                    ],
                },
                options: {
                    ...chartOptions,
                },
            });
        }
    });


    return (
        <div className={styles.chart_container}>
            <canvas ref={chartRef} id="myChart" width={500} height={500}></canvas>
        </div>


    )
};

export default CoinChart;