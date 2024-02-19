import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const SummaryChart = ({ users, products, orders, earnings }) => {
  const data = [
    {
      subject: "Users",
      A: users,
    },
    {
      subject: "Products",
      A: products,
    },
    {
      subject: "Orders",
      A: orders,
    },
  ];
  return (
    <div data-aos='zoom-in'>
      <ResponsiveContainer width={500} height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="subject" stroke="white" />
          <PolarRadiusAxis stroke="white" />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#e77f5a"
            fill="#e77f5a"
            fillOpacity={0.7}
            color="white"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SummaryChart;
