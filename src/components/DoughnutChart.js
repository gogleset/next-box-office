import React from 'react';
import {
    Chart as ChartJS
} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data }) => {
    // console.log("Chart.js");
    // console.log(data);
    const datas = {
        labels: [
            '남성',
            '여성',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [data.manScore, data.womanScore],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
            ],
            hoverOffset: 4
        }]
    };
    const options = {
        weight: 1,
    }

    return (

        <div style={{ width: '50%',}}>
            <Doughnut data={datas} options={options} />
        </div>

    );
};
export default Chart;