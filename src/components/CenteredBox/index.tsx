import { Suspense } from 'react';
import { styled, LinearProgress } from '@mui/material';

import { ILayoutProps } from '../../types';
import { Background } from '../Background';

const Container = styled('div')(({ theme }) => `
	overflow: hidden;
	padding: ${theme.spacing(2)};
	display: flex;
	flex-direction: column;
	border-radius: ${theme.spacing(1.25)};
	align-items: center;
	background-color: rgba(255, 255, 255, 0.8);
`);

export const CenteredBoxLayout = ({ id, renderedRoutes, activeRoute }: ILayoutProps) => (
	<Background id={id} {...activeRoute.layout?.config} centered>
		<Container>
			<Suspense fallback={<LinearProgress />}>{renderedRoutes}</Suspense>
		</Container>
	</Background>
);
