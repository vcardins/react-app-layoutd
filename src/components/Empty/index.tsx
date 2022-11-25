import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

import { ILayoutProps } from '../../types';
import { Background } from '../Background';;

export const EmptyLayout = ({ renderedRoutes, activeRoute }: ILayoutProps) => (
	<Background {...activeRoute.layout?.config}>
		<Suspense fallback={<LinearProgress />}>
			{renderedRoutes}
		</Suspense>
	</Background>
);
