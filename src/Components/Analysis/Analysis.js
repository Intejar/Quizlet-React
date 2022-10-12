import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analysis = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const loadChart = data.data.data;
                console.log(loadChart)
                const chartData = loadChart.map(info => {
                    const name = info.name;
                    const total = info.total;
                    const singleData = {
                        name: name,
                        total: total
                    }
                    return singleData;
                })
                // console.log(chartData);
                setCharts(chartData);

            });
    }, [])
    // console.log(charts);
    return (
        <div>
            <h1 className='text-2xl text-md-4xl font-bold text-blue-300 my-20'>Get your best practice in our website</h1>
            <div className='flex justify-center my-10'>
                <BarChart width={500} height={300} data={charts}>
                    <Bar dataKey="total" fill='#8884d8'></Bar>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Analysis;
