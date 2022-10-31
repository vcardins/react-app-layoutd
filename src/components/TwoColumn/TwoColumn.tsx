import { Suspense } from 'react';
import { styled, Grid } from '@mui/material';

import { ILayoutProps } from '../../types';

const forwardProps = ['backgroundColor', 'backgroundImage'];

interface IBackgroundSettings { backgroundImage?: string; backgroundColor?: string }

export const Background = styled(Grid, { shouldForwardProp: (prop) => !forwardProps.includes(prop as string) })<IBackgroundSettings>(({ theme, backgroundImage, backgroundColor }) => `
	display: flex;
	flex: 1;
	background-size: auto 100%;
	background-color: ${backgroundColor ?? theme.palette.primary.dark};
	${backgroundImage && `background-image: url(${backgroundImage})`};
	background-repeat: no-repeat;
	background-position: center center;
	content: '';
`);

export const Container = styled('div')`
	max-width: 800px;
	height: 100%;
	padding: 1rem;
	display: flex;
`;

export const TwoColumnLayout = ({ id, renderedRoutes, activeRoute }: ILayoutProps) => (
	<Grid container component="main" sx={{ height: '100%' }}>
		<Background
			id={id}
			backgroundImage={activeRoute?.layout?.config?.backgroundImage}
		/>
		<Container>
			<Suspense>
				{renderedRoutes}
			</Suspense>
		</Container>
	</Grid>
);
