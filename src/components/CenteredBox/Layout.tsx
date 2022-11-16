import { Suspense } from 'react';
import { styled, LinearProgress } from '@mui/material';

import { ILayoutProps } from '../../types';

const forwardProps = ['backgroundImage'];

const Background = styled('div', { shouldForwardProp: (prop) => !forwardProps.includes(prop as string) })<{ backgroundImage?: string; }>( ({ theme, backgroundImage }) => `
	display: flex;
	flex-direction: row;
	overflow: hidden;
	height: 100%;
	animation: jss6 60s infinite;
	background-size: auto;
	background-color: ${theme.palette.common.white};
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;

	align-items: center;
	justify-content: center;

	content: '';
`,
);

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
	<Background id={id} backgroundImage={activeRoute?.layout?.config?.backgroundImage}>
		<Container>
			<Suspense fallback={<LinearProgress />}>{renderedRoutes}</Suspense>
		</Container>
	</Background>
);
