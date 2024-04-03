import React from 'react';
import { Input, Select, Card, Table } from 'antd';
import { ResponsiveContainer } from 'recharts';
import { SearchOutlined } from '@ant-design/icons';

interface ProductSellTableProps {
  dataSource: any[];
  columns: any[];
  handleChange: (value: string) => void;
}

const ProductSellTable: React.FC<ProductSellTableProps> = ({ dataSource, columns, handleChange }) => {
  return (
    <Card>
      <h2 style={{ margin: 0 }}>Product Sell</h2>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{ position: 'absolute', top: 20, right: 180, zIndex: 1, border: "none", width: 200, backgroundColor: '#fafbff' }}
      />
      <Select defaultValue="Last30Days" style={{ position: 'absolute', top: 20, right: 10, zIndex: 1, border: "none" }} onChange={handleChange}>
        <Select.Option value="Last30Days">Last 30 Days</Select.Option>
        <Select.Option value="LastWeek">Last Week</Select.Option>
        <Select.Option value="Today">Today</Select.Option>
      </Select>
      <ResponsiveContainer width="100%" height={400} style={{ marginTop: '15px' }}>
        <Table dataSource={dataSource} columns={columns} />
      </ResponsiveContainer>
    </Card>
  );
};

export default ProductSellTable;
