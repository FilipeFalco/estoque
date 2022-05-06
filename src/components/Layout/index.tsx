import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { ChildrenLayout } from './type';
import './style.css';

const Layout = ({ children }: ChildrenLayout) => {
  return (
    <div>
      <nav>
        <Tooltip title='Adicionar item'>
          <Button
            type='primary'
            shape='circle'
            size='large'
            icon={<PlusOutlined />}
          />
        </Tooltip>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
