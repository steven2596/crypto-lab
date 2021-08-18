import { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions } from './chartConfig';
import styles from './CoinChart.module.scss';

const CoinChart = () => {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'June'],
        datasets: [
            {
                label: 'Prices',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgb(4, 102, 200)',
                borderColor: 'rgb(239, 35, 60)',
                pointRadius: 0,
                data: [65, 59, 80, 81, 56, 75]
            }
        ]
    }


    return (
        <div className={styles.chart_container}>
            <Line
                width={250}
                height={250}
                data={state}
                options={chartOptions}
            />
        </div>


    )
};

export default CoinChart;