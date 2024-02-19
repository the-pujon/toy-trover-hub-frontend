import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const transformDataForChart = (data) => {
  const aggregatedData = data.reduce((accumulator, currentOrder) => {
    const orderDate = new Date(
      parseInt(currentOrder.date)
    ).toLocaleDateString();
    if (!accumulator[orderDate]) {
      accumulator[orderDate] = {
        date: orderDate,
        earnings: currentOrder.totalAmount,
        paidOrders:
          currentOrder.paymentInfo === "paid" ? currentOrder.totalItem : 0,
        unpaidOrders:
          currentOrder.paymentInfo === "unpaid" ? currentOrder.totalItem : 0,
        paidEarnings:
          currentOrder.paymentInfo === "paid" ? currentOrder.totalAmount : 0,
        unpaidEarnings:
          currentOrder.paymentInfo === "unpaid" ? currentOrder.totalAmount : 0,
      };
    } else {
      accumulator[orderDate].earnings += currentOrder.totalAmount;
      if (currentOrder.paymentInfo === "paid") {
        accumulator[orderDate].paidOrders += currentOrder.totalItem;
        accumulator[orderDate].paidEarnings += currentOrder.totalAmount;
      } else {
        accumulator[orderDate].unpaidOrders += currentOrder.totalItem;
        accumulator[orderDate].unpaidEarnings += currentOrder.totalAmount;
      }
    }
    return accumulator;
  }, {});

  return Object.values(aggregatedData);
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { earnings, paidOrders, unpaidOrders, paidEarnings, unpaidEarnings } =
      payload[0].payload;
    const totalOrders = paidOrders + unpaidOrders;

    return (
      <div className="bg-white p-3 space-y-2 rounded-md">
        <p className="">{`Date: ${label}`}</p>
        <p className="">{`Total Earnings: ${earnings}`}</p>
        <p className=" ">{`Total Orders: ${totalOrders}`}</p>
        <p className="text-green-500">{`Paid Orders: ${paidOrders}`}</p>
        <p className="text-red-500">{`Unpaid Orders: ${unpaidOrders}`}</p>
        <p className="text-green-500">{`Paid Earnings: ${paidEarnings}`}</p>
        <p className="text-red-500">{`Unpaid Earnings: ${unpaidEarnings}`}</p>
      </div>
    );
  }

  return null;
};

const EarningsvsOrders = ({ orders }) => {
  const chartData = transformDataForChart(orders);

  return (
    <div data-aos='zoom-in'>
      <ResponsiveContainer width={1000} height={500}>
        <AreaChart
          width={500}
          height={500}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis dataKey="date" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#fff"
            fill="#fff"
            name="Orders"
          />
          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#e77f5a"
            fill="#e77f5a"
            name="Earnings"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsvsOrders;
