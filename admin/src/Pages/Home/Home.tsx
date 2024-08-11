// Import React Framework
import React from 'react';

// Import Ant-Design
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

// Export Types
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

// Import Styles

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '内容管理',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: '分类',
        type: 'group',
        children: [
          { key: '1', label: '新建分类' },
          { key: '2', label: '内容列表' },
        ],
      },
    ],
  },
];

const Home: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <>
      <div>
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
      <div>right side panel</div>
    </>
  );
};

export default Home;
