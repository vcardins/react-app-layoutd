import { Suspense } from 'react';
import { styled, LinearProgress, Grid } from '@mui/material';

import { ILayoutProps } from '../../types';
import { Background } from '../Background';

const Container = styled('div')(({ theme }) => `
	max-width: 800px;
	height: 100%;
	padding: ${theme.spacing(2)};
	display: flex;
`);

export const TwoColumnLayout = ({ id, renderedRoutes, activeRoute }: ILayoutProps) => (
	<Grid  id={id} container component="main" sx={{ height: '100%' }}>
		<Background {...activeRoute.layout?.config} animate />
		<Container>
			<Suspense fallback={<LinearProgress />}>
				{renderedRoutes}
			</Suspense>
		</Container>
	</Grid>
);
