import React from 'react';
import {  ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from 'recharts';
import {  Card,Select } from 'antd';
interface BarChartProps {
  data: any[];
  selectedInterval: string;
  handleChange: (value: string) => void;
}
const BarChartComponent: React.FC<BarChartProps> = ({ data, selectedInterval, handleChange }) => {
  const filteredData = data.filter(item => {
    switch (selectedInterval) {
      case 'Monthly':
        return true;
      case 'Quarterly':
        return ['Jan', 'Apr', 'Jul', 'Oct'].includes(item.month);
      case 'Half-yearly':
        return ['Jan', 'Jul'].includes(item.month);
      case 'Yearly':
        return item.month === 'Jan';
      default:
        return true;
    }
  });

  const CustomBar = (props) => {
    const { x, y, width, height, payload } = props;
    const color = payload.month === new Date().toLocaleString('en-US', { month: 'short' }) ? '#5a32ea' : '#c6c2d6';
    return <rect x={x} y={y} width={width} height={height} fill={color} rx={5} ry={5} />;
  };

  return (
    <Card>
      <h3 style={{ margin: 0 }}>Overview</h3>
      <span style={{ margin: 0, color: "#b5b5b5" }}>Money Earning</span>
      <Select defaultValue="Quarterly" style={{ position: 'absolute', top: 20, right: 10, zIndex: 1, border: "none" }} onChange={handleChange}>
      <Select.Option value="Monthly">Monthly</Select.Option>
        <Select.Option value="Quarterly">Quarterly</Select.Option>
        <Select.Option value="Half-yearly">Half-yearly</Select.Option>
        <Select.Option value="Yearly">Yearly</Select.Option>
      </Select>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={filteredData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Bar dataKey="value" shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarChartComponent;
