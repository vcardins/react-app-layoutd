import { PropsWithChildren, isValidElement } from 'react';
import { Icon } from '@mui/material';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

import { Container, Header, Title, Content, Footer } from './components';
import { IFramesetProps } from './types';

export const Frameset = (props: PropsWithChildren<IFramesetProps>) => {
	const { id, contentProps, children } = props;
	let header = null;
	let footer = null;

	if (props.header) {
		const { title, titleVariant = 'h3', toolbar, ...rest } = props.header;
		let icon = rest.icon ?? null;
		let iconProps = {};

		if (icon && !isValidElement(icon)) {
			iconProps = Object.assign(
				{ component: icon as OverridableComponent<SvgIconTypeMap> },
				!isValidElement(icon) ? { component: icon as OverridableComponent<SvgIconTypeMap> } : undefined,
				Number.isFinite(rest.iconSize)
					? { sx: { fontSize: rest.iconSize } }
					: { fontSize: rest.iconSize }
			);

			icon = <Icon {...iconProps} />;
		}


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
