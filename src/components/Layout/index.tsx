import { Layout as Lay } from 'antd';
import { ChildrenLayout } from './type';
import { FooterLayout } from './Footer';
import { useState } from 'react';
import { MenuLayout } from './Menu';

const { Content, Sider } = Lay;

const Layout = ({ children }: ChildrenLayout) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Lay style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <MenuLayout />
      </Sider>
      <Lay className='site-layout'>
        <Content style={{ margin: '10px 16px 0px 16px' }}>{children}</Content>
        <FooterLayout />
      </Lay>
    </Lay>
  );
};

export default Layout;
