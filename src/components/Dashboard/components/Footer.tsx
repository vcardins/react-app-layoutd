import { Box, styled } from '@mui/material';

import { useLayoutContext } from '../../../context';

export const StyledFooter = styled(Box)(
	({ theme }) => `
	background: ${theme.palette.primary.dark};
	color: ${theme.palette.secondary.light};
	padding: ${theme.spacing(2)};
`,
);

export const Footer = () => {
	const { components } = useLayoutContext();

	if (!components?.footer) {
		return null;
	}

	return <StyledFooter>{components?.footer}</StyledFooter>;
};
