import React from 'react';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const SummaryChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default SummaryChart;



//import React from 'react'
//import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from "recharts"

//const SummaryChart = () => {



//const data = [
//  {
//    name: 'Page A',
//    uv: 4000,
//    pv: 2400,
//    amt: 2400,
//  },
//  {
//    name: 'Page B',
//    uv: 3000,
//    pv: 1398,
//    amt: 2210,
//  },
//  {
//    name: 'Page C',
//    uv: 2000,
//    pv: 9800,
//    amt: 2290,
//  },
//  {
//    name: 'Page D',
//    uv: 2780,
//    pv: 3908,
//    amt: 2000,
//  },
//  {
//    name: 'Page E',
//    uv: 1890,
//    pv: 4800,
//    amt: 2181,
//  },
//  {
//    name: 'Page F',
//    uv: 2390,
//    pv: 3800,
//    amt: 2500,
//  },
//  {
//    name: 'Page G',
//    uv: 3490,
//    pv: 4300,
//    amt: 2100,
//  },
//];

//  return (
//    <div><LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//    <XAxis dataKey="name" />
//    <Tooltip />
//    <CartesianGrid stroke="#f5f5f5" />
//    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
//    <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
//  </LineChart></div>
//  )
//}

//export default SummaryChart