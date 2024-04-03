import React, { useState } from 'react';
import { Layout, Row, Col, Input } from 'antd';
import CardComponent from '../components/Common/CardComponent.tsx';
import BarChartComponent from '../components/Common/BarChartComponent.tsx';
import PieChartComponent from '../components/Common/PieChartComponent.tsx';
import ProductSellTable from '../components/Common/ProductSellTable.tsx';
import { CopyOutlined, DatabaseOutlined, DollarOutlined, SearchOutlined, WalletOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/es/table/interface';

const Dashboard: React.FC = () => {
  const [selectedInterval, setSelectedInterval] = useState('Monthly');
  const cardData = [
    {
      header: "Earning", amount: '198k',
      percentage: <span style={{ color: '#00a849', fontWeight: 'bold' }}>↑ 37.8%</span>,
      duration: "this month", icon: <DollarOutlined
        style={{
          fontSize: '45px',
          color: '#00a849',
          textAlign: 'center',
          backgroundColor: '#e0ffef',
          borderRadius: '50%',
          padding: '20px'
        }}
      />
    },
    {
      header: "Orders", amount: '2.4k',
      percentage: <span style={{ color: '#d7326b', fontWeight: 'bold' }}>↓ 2%</span>,
      duration: "this month", icon: <DatabaseOutlined
        style={{
          fontSize: '45px', color: "#a100ff", textAlign: 'center', backgroundColor: '#e7dbff',
          borderRadius: '50%', padding: '20px'
        }} />
    },
    {
      header: "Balance", amount: '2.4k',
      percentage: <span style={{ color: '#d7326b', fontWeight: 'bold' }}>↓ 2%</span>,
      duration: "this month", icon: <CopyOutlined
        style={{
          fontSize: '45px', color: "#0453bd", textAlign: 'center', backgroundColor: '#ccf2ff',
          borderRadius: '50%', padding: '20px'
        }} />
    },
    {
      header: "Total Sales", amount: '89k',
      percentage: <span style={{ color: '#00a849', fontWeight: 'bold' }}>↑ 11%</span>,
      duration: "this week", icon: <WalletOutlined
        style={{
          fontSize: '45px', color: "#d60009", textAlign: 'center', backgroundColor: '#ffbbe0',
          borderRadius: '50%', padding: '20px'
        }} />
    },
  ];
  const BarChatData = [
    { month: 'Jan', value: 3000 },
    { month: 'Feb', value: 2500 },
    { month: 'Mar', value: 3900 },
    { month: 'Apr', value: 3100 },
    { month: 'May', value: 3300 },
    { month: 'Jun', value: 1000 },
    { month: 'Jul', value: 3300 },
    { month: 'Aug', value: 3900 },
    { month: 'Sep', value: 3700 },
    { month: 'Oct', value: 3500 },
    { month: 'Nov', value: 3080 },
    { month: 'Dec', value: 3190 },
  ];
  const pieData = [
    { name: 'Group A', value: 450 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 350 },
  ];
  const COLORS = ['#f1effc', '#f1419e', '#5e36e9'];
  const TabledataSource = [
    {
      key: '1',
      name: 'Abstract 3D',
      quantity: 32,
      price: 45.99,
      total: 20,
    },
    {
      key: '2',
      name: 'Sarphens Illustration',
      quantity: 32,
      price: 45.99,
      total: 20,
    },
    {
      key: '3',
      name: 'Abstract 4D',
      quantity: 32,
      price: 45.99,
      total: 20,
    },
    {
      key: '4',
      name: 'Illustration',
      quantity: 32,
      price: 45.99,
      total: 20,
    },
    {
      key: '5',
      name: 'Abstract',
      quantity: 32,
      price: 45.99,
      total: 20,
    },
  ];
  const Tablecolumns: ColumnType<{ key: string; name: string; quantity: number; price: number; total: number; }>[] = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      width: '70%',
    },
    {
      title: 'Stock',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => `${quantity} in stock`
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price, record) => <span style={{ fontWeight: 'bold' }}>${price}</span>,
    },
    {
      title: 'Total Sales',
      dataIndex: 'total',
      key: 'total',
      align: 'center'
    },
  ];
  const handleChange = (value: string) => {
    setSelectedInterval(value);
  };
  return (
    <Layout>
      <div style={{ background: '#f5f6f8', padding: '24px', minHeight: '150vh', position: 'relative' }}>
        <div style={{ marginBottom: '24px', fontSize: '24px' }}>Hello Rishabh 👋🏻,</div>
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          {cardData.map((data, index) => (
            <Col key={index} span={6}>
              <CardComponent header={data.header} duration={data.duration} amount={data.amount} percentage={data.percentage} icon={data.icon} />
            </Col>
          ))}
        </Row>
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col span={16}>
            <BarChartComponent data={BarChatData} selectedInterval={selectedInterval} handleChange={handleChange} />
          </Col>
          <Col span={8}>
            <PieChartComponent pieData={pieData} COLORS={COLORS} />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <ProductSellTable dataSource={TabledataSource} columns={Tablecolumns} handleChange={handleChange} />
          </Col>
        </Row>
        <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 1 }}>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
