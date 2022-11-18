import { PropsWithChildren } from 'react';

import { Container, Header, Title, Content, Footer } from './components';
import { IFramesetProps } from './types';
import { getIcon } from '../utils';

export const Frameset = (props: PropsWithChildren<IFramesetProps>) => {
	const { id, contentProps, children } = props;
	let header = null;
	let footer = null;

	if (props.header) {
		const { title, titleVariant = 'h3', toolbar, ...rest } = props.header;
		const icon = getIcon(rest.icon);

		header = (
			<Header>
				<Title variant={titleVariant}>
					{icon}
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
