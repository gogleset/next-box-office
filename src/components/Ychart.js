import React from 'react';
import {
    Chart as ChartJS
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
    console.log("Chart.js");
    console.log(data);
    const datas = {
        labels: ["10대", "20대", "30대", "40대", "50대"],
        datasets: [
            {
                type: 'bar',
                label: "만족도",
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderWidth: 1,
                data: [data.teenagerScore, data.twentiesScore, data.thirtiesScore, data.fortiesScore, data.fiftiesScore],
            },

        ],
    }
    const options = {
        indexAxis: "y",
        scales: {
            yAxes: {
                // grid: {
                //     drawBorder: false,
                //     color: '#000000',
                // },
                ticks: {
                    beginAtZero: false,
                    color: '#000000',
                    fontSize: 12,
                }
            },
            xAxes: {
                // grid: {
                //     drawBorder: false,
                //     color: '#000000',
                // },
                ticks: {
                    beginAtZero: false,
                    color: '#000000',
                    fontSize: 12,
                }
            },
        }
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Line data={datas} options={options} />
        </div>
    );
};
export default Chart;