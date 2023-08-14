import { styled } from '@mui/material';

import { IPageLoadingProps } from './types';

const Wrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'display' && prop !== 'opacity' })<Pick<IPageLoadingProps, 'opacity'> & { display: boolean }>(({ display, opacity = 1 }) => `
	display: ${display ? 'flex' : 'none'};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: rgba(255, 255, 255, ${opacity});
`);

const EnhancedSpin = styled('div')`
	display: initial;
	background: red;
	height: 100%;
	width: 100%;
`;

const Message = styled('div')`
	margin-top: 1.5em;
`;

export {
	Wrapper,
	Message,
	EnhancedSpin as Spin,
};
