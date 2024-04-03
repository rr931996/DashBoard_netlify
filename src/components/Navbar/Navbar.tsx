import React from 'react';
import { Avatar, Menu } from 'antd';
import { DashboardOutlined, PercentageOutlined, ContactsOutlined, DeploymentUnitOutlined, BankOutlined, CommentOutlined } from '@ant-design/icons';
import DPImg from '../../Assets/Img/dp.jpg'
import Logo from '../../Assets/Img/logo.png'
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const Navbar: React.FC = () => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: 256 }}>
      {/* Top Logo */}
      <div style={{ height: 60, backgroundColor: '#040440', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={Logo} alt="logo" style={{ height: 40, width: 'auto' }} />
      </div>

      {/* Sidebar Menu */}
      <Menu
        style={{ flex: 1, backgroundColor:"#040440" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}><Link to="/">Dashboard</Link></Menu.Item>
        <SubMenu key="sub1" icon={<DeploymentUnitOutlined />} title="Product">
          <Menu.Item key="5">Option 1</Menu.Item>
          <Menu.Item key="6">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<ContactsOutlined />} title="Customers">
          <Menu.Item key="7">Option 3</Menu.Item>
          <Menu.Item key="8">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<BankOutlined />} title="Income">
          <Menu.Item key="9">Option 5</Menu.Item>
          <Menu.Item key="10">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<PercentageOutlined />} title="Promote">
          <Menu.Item key="11">Option 7</Menu.Item>
          <Menu.Item key="12">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<CommentOutlined />} title="Help">
          <Menu.Item key="13">Option 9</Menu.Item>
          <Menu.Item key="14">Option 10</Menu.Item>
        </SubMenu>
        <SubMenu
  key="sub6"
  icon={<Avatar src={DPImg} size={30} style={{ marginLeft: -10 }} />}
  title={
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom:"-10" }}>Rishabh</span>
      <span style={{ fontSize: '12px', color: '#8c8c8c', marginTop: '-25px' }}>UI Developer</span>
    </div>
  }
  style={{ 
    marginTop: '80%', 
    borderRadius: '4px', 
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    backgroundColor: "#2d2d69",
    width: "calc(100% - 25px)", 
    marginLeft: "10px", 
    marginRight: "10px" 
  }}
>
</SubMenu>
      </Menu>
    </div>
  );
};

export default Navbar;
