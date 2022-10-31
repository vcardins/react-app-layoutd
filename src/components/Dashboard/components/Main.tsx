import { PropsWithChildren } from 'react';
import { styled } from '@mui/material';

const StyledMain = styled('main')`
	height: 100%;
	flex: 1;
	overflow: hidden;
`;

export const Main = ({ children }: PropsWithChildren<unknown>) => <StyledMain>{children}</StyledMain>;
