import { Suspense } from 'react';
import { Toolbar, Box, LinearProgress, styled } from '@mui/material';

import { ILayoutProps } from '../../types';
import { Footer, Header, Main, MenuBar } from './components';

const OuterContainer = styled(Box)`
	display: flex;
	overflow: hidden;
	height: inherit;
	flex-direction: column;
	min-height: 100vh;
`;

const InnerContainer = styled(Box)`
	display: flex;
	flex: 1;
	overflow: hidden;
	height: inherit;
`;

export const DashboardLayout = ({ id, renderedRoutes }: ILayoutProps) => (
	<OuterContainer id={id}>
		<Header />
		<Toolbar />
		<InnerContainer>
			<MenuBar />
			<Main>
				<Suspense fallback={<LinearProgress />}>
					{renderedRoutes}
				</Suspense>
			</Main>
		</InnerContainer>
		<Footer />
	</OuterContainer>
);
