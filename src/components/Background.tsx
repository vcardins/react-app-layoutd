import { Box, styled } from '@mui/material';

import { ILayoutConfig } from '../types';
import { shouldForwardProp } from './utils';

type IBackground = Pick<ILayoutConfig, 'backgroundColor' | 'backgroundImage'> & { centered?: boolean; animate?: boolean };

export const Background = styled(Box, shouldForwardProp(['backgroundColor', 'backgroundImage', 'centered', 'animate']))<IBackground>(({ centered, animate, backgroundColor, backgroundImage }) => `
	display: flex;
	flex-direction: row;
	overflow: hidden;
	flex: 1;
	height: 100%;
	background-size: auto;
	${backgroundColor ? `background-color: ${backgroundColor}` : undefined};
	${backgroundImage ? `background-image: url(${backgroundImage}); background-repeat: no-repeat;` : undefined};
	${centered ? 'align-items: center; justify-content: center;' : undefined};
	${animate ? 'animation: jss6 60s infinite;' : undefined};
`);
