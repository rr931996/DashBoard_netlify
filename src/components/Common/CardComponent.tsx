import React from 'react';
import { Card } from 'antd';

interface CardProps {
    header: string;
    amount: string;
    percentage: string | JSX.Element; 
    duration: string;
    icon: JSX.Element;
}

const CardComponent: React.FC<CardProps> = ({ amount, percentage, icon,header,duration }) => {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div >
          {icon}
        </div>
        <div style={{ marginLeft: '20px', marginTop: '5px', lineHeight: '1.2' }}>
          <span style={{ lineHeight: '1.2', color: "#b5b5b5" }}>{header}</span>
          <h2 style={{ margin: '5px 0', lineHeight: '1.2' }}>${amount}</h2>
          <span style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
            <span style={{ color: '#00a849', fontWeight: 'bold' }}>{percentage}</span>{" "}
            <span>{duration}</span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
