import { Layout, theme } from 'antd';
import React from 'react';
import { ReadPageHeader } from './header';

const { Content } = Layout;

export const ReadPage: React.FC = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return <Layout>
		<ReadPageHeader />
		<Content
			style={{
				margin: '24px 16px',
				padding: 24,
				minHeight: 280,
				background: colorBgContainer,
				borderRadius: borderRadiusLG,
				overflow: 'auto',
			}}
		>
			<p>Content</p>
		</Content>
	</Layout>;
}
