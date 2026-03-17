import React from 'react';
import { Bar, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const chartsData = [
    {
        "student_name": "Rahim Ahmed",
        "html": 85,
        "css": 78,
        "javascript": 82,
        "react": 75,
        "node": 70,
        "avg_marks": 78
    },
    {
        "student_name": "Karim Hasan",
        "html": 80,
        "css": 72,
        "javascript": 76,
        "react": 70,
        "node": 68,
        "avg_marks": 73
    },
    {
        "student_name": "Nusrat Jahan",
        "html": 90,
        "css": 85,
        "javascript": 88,
        "react": 82,
        "node": 80,
        "avg_marks": 85
    },
    {
        "student_name": "Sabbir Hossain",
        "html": 75,
        "css": 70,
        "javascript": 72,
        "react": 68,
        "node": 65,
        "avg_marks": 70
    },
    {
        "student_name": "Ayesha Rahman",
        "html": 92,
        "css": 88,
        "javascript": 90,
        "react": 85,
        "node": 87,
        "avg_marks": 88
    },
    {
        "student_name": "Tanvir Islam",
        "html": 86,
        "css": 83,
        "javascript": 80,
        "react": 78,
        "node": 76,
        "avg_marks": 81
    },
    {
        "student_name": "Mim Akter",
        "html": 88,
        "css": 84,
        "javascript": 82,
        "react": 79,
        "node": 77,
        "avg_marks": 82
    },
    {
        "student_name": "Rakib Chowdhury",
        "html": 90,
        "css": 87,
        "javascript": 88,
        "react": 86,
        "node": 85,
        "avg_marks": 87
    },
    {
        "student_name": "Farzana Islam",
        "html": 89,
        "css": 85,
        "javascript": 87,
        "react": 82,
        "node": 80,
        "avg_marks": 85
    },
    {
        "student_name": "Imran Hossain",
        "html": 78,
        "css": 75,
        "javascript": 80,
        "react": 77,
        "node": 74,
        "avg_marks": 77
    }
]
const Chart = () => {
    return (
        <div className='bg-violet-50 py-10'>
           
            <div className='container mx-auto'>
                 <h1 className='text-center  text-6xl font-bold text-black/80 py-10'>Students Progress</h1>
            <LineChart
                style={{ width: '100%', aspectRatio: 1.618, height:600}}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 5,
                    left: 0,
                }}
                data={chartsData}
            >
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5"></CartesianGrid>
                <Line  dataKey={'html'} stroke='red'></Line>
                <Line  dataKey={'css'} stroke='green'></Line>
                <Line  dataKey={'javascript'} stroke='blue'></Line>
                <Line  dataKey={'react'} stroke='violet'></Line>
                <XAxis dataKey={'student_name'}></XAxis>
                <YAxis dataKey={'avg_marks'}></YAxis>
                <Legend align='center'></Legend>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
        </div>
    );
};

export default Chart;