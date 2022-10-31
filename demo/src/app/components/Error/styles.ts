import { styled } from '@mui/material';

export const IconWrapper = styled('div')(({ theme }) => `
	font-size: ${theme.typography.h1.fontSize};
	user-select: none;
	margin-bottom: 20px;
`);

export const Code = styled('div')(({ theme }) => `
	font-size: ${theme.typography.h6.fontSize};
`);

export const Title = styled('div')(({ theme }) => `
	color: ${theme.palette.grey[400]};
	font-size: ${theme.typography.h3.fontSize};
	text-align: center;
`);

export const Message = styled('div')(({ theme }) => `
	font-size: ${theme.typography.h6.fontSize};
	padding-top: ${theme.spacing(1)};
	text-align: center;
`);

export const Center = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	width: inherit;
	height: inherit;
`;
