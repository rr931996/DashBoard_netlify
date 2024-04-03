import React from 'react';
import {   PieChart, Pie, Cell } from 'recharts';
import {Card} from 'antd'
interface PieChartProps {
  pieData: any[];
  COLORS: string[];
}

const PieChartComponent: React.FC<PieChartProps> = ({ pieData, COLORS }) => {
  const totalValue = pieData.reduce((acc, curr) => acc + curr.value, 0);
  const innerRadiusValues = pieData.map((entry, index) => {
    const currentInnerRadius = 60 - index * 5;
    return currentInnerRadius;
  });

  return (
    <Card>
      <h3 style={{ margin: 0 }}>Customers</h3>
      <span style={{ margin: 0, color: "#b5b5b5" }}>Customers that buy products</span>
      <div style={{ position: 'relative', width: '100%', height: 200 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <PieChart width={200} height={200}>
            <Pie
              data={[{ value: totalValue }]}
              cx="50%"
              cy="50%"
              innerRadius="0%"
              outerRadius="90%"
              fill="#ffffff"
              dataKey="value"
              label={({ cx, cy }) => (
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="14px" fontWeight="bold">
                  <tspan dy="-1.0em" style={{ fontSize: "20" }}>{`${((pieData[0].value + pieData[1].value) / totalValue * 100).toFixed(0)}%`} </tspan>
                  <tspan x={cx} dy="1.2em">Total New</tspan>
                  <tspan x={cx} dy="1.2em">Customers</tspan>
                </text>
              )}
              style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))' }}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#ffffff" />
              ))}
            </Pie>
            {pieData.map((entry, index) => (
              <Pie
                key={`pie-${index}`}
                data={[entry]}
                cx="50%"
                cy="50%"
                startAngle={index === 0 ? 0 : pieData.slice(0, index).reduce((acc, entry) => acc + (entry.value / totalValue) * 360, 0)}
                endAngle={index === 0 ? (entry.value / totalValue) * 360 : pieData.slice(0, index + 1).reduce((acc, entry) => acc + (entry.value / totalValue) * 360, 0)}
                innerRadius={innerRadiusValues[index]}
                outerRadius="70%"
                fill={COLORS[index % COLORS.length]}
                paddingAngle={0}
                dataKey="value"
              />
            ))}
          </PieChart>
        </div>
      </div>
    </Card>
  );
};

export default PieChartComponent;
