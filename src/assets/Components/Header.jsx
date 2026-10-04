import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [

    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '5', label: 'Option 5' },
            { key: '6', label: 'Option 6' },
        ],
    },
];

const Header = () => {
    const onClick = e => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
}

export default Header

