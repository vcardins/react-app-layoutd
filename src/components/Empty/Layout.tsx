import { Suspense } from 'react';
import { styled, LinearProgress } from '@mui/material';

import { ILayoutProps } from '../../types';

const Container = styled('div')`
	display: flex;
	height: 100vh;
	width: 100vw;
`;

export const EmptyLayout = ({ id, renderedRoutes }: ILayoutProps) => (
	<Container id={id}>
		<Suspense fallback={<LinearProgress />}>{renderedRoutes}</Suspense>
	</Container>
);
