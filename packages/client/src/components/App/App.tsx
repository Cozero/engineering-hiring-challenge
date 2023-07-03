import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Metric } from '@cozero/lib';
import Table, { ColumnsType } from 'antd/es/table';
import { API_URL } from '../../config';
import { Logger } from '../../utils';

const { Header, Sider, Content } = Layout;

export const App: React.FC = () => {
  const [response, setResponse] = useState<Metric[]>([]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    async function fetchResponse(): Promise<void> {
      try {
        const res = await fetch(`${API_URL}/reports/metrics?company=Company1`);
        const data = await res.json();
        setResponse(data);
      } catch (err) {
        Logger.error(err);
      }
    }

    fetchResponse();
  }, []);

  const columns: ColumnsType<Metric> = [
    {
      title: 'Organization Name',
      dataIndex: 'organizationName',
      key: 'id',
      render: (organizationName: string) => <p>{organizationName}</p>,
    },
    {
      title: 'Emissions',
      dataIndex: 'emissions',
      key: 'id',
      render: (emissions: number) => <p>{emissions}</p>,
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'Home',
              label: 'home',
              icon: <UserOutlined rev={''} />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined rev={''} />
              ) : (
                <MenuFoldOutlined rev={''} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Table
            loading={!response?.length}
            columns={columns}
            dataSource={response}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
