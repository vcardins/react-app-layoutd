import { Box, styled } from '@mui/material';

import { IFramesetContentProps } from './types';

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
`;

export const Header = styled('div')(({ theme }) => `
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${theme.mixins.frameset?.header?.padding};
	background-color: ${theme.mixins.frameset?.header?.backgroundColor};
`);

export const Footer = styled('div')(({ theme }) => `
	display: flex;
	padding: 1.5em;
	border-top: 1px solid ${theme.palette.grey['100']};
`);

export const Title = styled('div')`
	font-size: 24px;
	display: flex;
	align-items: center;
	gap: 10px;
	flex: 1;
`;

const forwardProps = ['autoWidth'];

export const Content = styled(Box, { shouldForwardProp: (prop) => !forwardProps.includes(prop as string) })<IFramesetContentProps>(({ margin, autoWidth, overflow }) => `
	position: relative;
	width: 100%;
	overflow: ${overflow};
	${margin && `margin: ${margin}`};
	${autoWidth && '> * { width: 100% }'}
`);
