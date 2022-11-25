import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { Toolbar, Box, LinearProgress, styled } from '@mui/material';
import { animated, UseTransitionProps, useTransition } from 'react-spring';

import { useLayoutContext } from '../../context';
import { ILayoutProps, TransitionEffect } from '../../types';
import { Footer, Header, MenuBar } from './components';
import { Background } from '../Background';

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

const transitionsOptions = {
	[TransitionEffect.Fade]: {
		from: { opacity: 0, height: '100%' },
		enter: { opacity: 1, height: '100%' },
	},
	[TransitionEffect.Slide]: {
		from: { opacity: 0, height: '100%', transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, height: '100%', transform: 'translate3d(0%,0,0)' },
	},
} as Record<TransitionEffect, UseTransitionProps> ;

export const DashboardLayout = ({ id, transitionEffect = TransitionEffect.Fade, renderedRoutes, activeRoute }: ILayoutProps) => {
	const location = useLocation();
	const { settings } = useLayoutContext();

	const transitions = useTransition(location, transitionsOptions[transitionEffect]);

	return (
		<OuterContainer>
			<Header />
			<Toolbar />
			<InnerContainer>
				{settings.sidebar?.display ? <MenuBar /> : null}
				<Background id={id} {...activeRoute.layout?.config}>
					<Box flex="1">
						<Suspense fallback={<LinearProgress />}>
							{settings.sidebar?.display
								? transitions((styles, location) => (
									<animated.div key={location.pathname} style={styles}>
										{renderedRoutes}
									</animated.div>
								))
								: renderedRoutes
							}
						</Suspense>
					</Box>
				</Background>
			</InnerContainer>
			<Footer />
		</OuterContainer>
	);
};
