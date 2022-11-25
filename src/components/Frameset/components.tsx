import { Box, Typography, styled } from '@mui/material';

import { IFramesetContentProps } from './types';
import { shouldForwardProp } from '../utils';

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
	padding: ${theme.spacing(2.5)};
	border-top: 1px solid ${theme.palette.grey['100']};
`);

export const Title = styled(Typography)(({ theme }) => `
	display: flex;
	align-items: center;
	gap: ${theme.spacing(1.5)};
	flex: 1;
`);

export const Content = styled(Box, shouldForwardProp(['autoWidth']))<IFramesetContentProps>(({ margin, autoWidth, overflow }) => `
	position: relative;
	width: 100%;
	overflow: ${overflow};
	${margin && `margin: ${margin}`};
	${autoWidth && '> * { width: 100% }'}
`);
