import { PropsWithChildren } from 'react';
import { Icon } from '@mui/material';

import { Container, Header, Title, Content, Footer } from './components';
import { IFramesetProps } from './types';

export const Frameset = (props: PropsWithChildren<IFramesetProps>) => {
	const { id, contentProps, children } = props;
	let header = null;
	let footer = null;

	if (props.header) {
		const { icon, title, toolbar } = props.header;
		header = (
			<Header>
				<Title>
					{icon ? <Icon component={icon} fontSize="large" /> : null}
					{typeof title === 'string' ? <span>{title}</span> : title}
				</Title>
				{toolbar}
			</Header>
		);
	}

	if (props.footer) {
		footer = (
			<Footer>
				{props.footer}
			</Footer>
		);
	}

	return (
		<Container id={id}>
			{header}
			<Content {...contentProps}>
				{children}
			</Content>
			{footer}
		</Container>
	);
};
