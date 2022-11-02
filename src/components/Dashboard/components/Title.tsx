import { Typography, styled } from '@mui/material';

import { useLayoutContext } from '../../../context';

export const StyledAppTitleWrapper = styled('div')`
	display: flex;
	flex-direction: column;
`;

const StyledAppIcon = styled('div')(({ theme }) => `
	display: flex;
	flex-direction: column;
	margin-right: ${theme.spacing(2)};
`);

export const StyledAppTitle = styled(Typography)`
	display: {
		xs: none;
		sm: block;
	}
	line-height: 1.25;
	cursor: default;
`;

export const StyledAppSubTitle = styled(StyledAppTitle)`
	opacity: 0.5;
	font-size: 80%;
`;

export const StyledAppHeaderWrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'gapped' })<{ gapped?: boolean; }>(({ gapped }) => `
	display: flex;
	align-items: center;
	gap: ${gapped ? '2em' : 0};
`);

export const Title = () => {
	const { metadata, Icon, ids, settings } = useLayoutContext();

	if ((!Icon && !metadata.name) || !settings.displayTitle) {
		return null;
	}

	return (
		<StyledAppHeaderWrapper>
			{Icon ?
				(
					<StyledAppIcon>
						{Icon}
					</StyledAppIcon>
				)
				: null
			}
			<StyledAppTitleWrapper>
				<StyledAppTitle id={ids?.title} variant="h6" noWrap>
					{metadata.name}
				</StyledAppTitle>
				{metadata.name ? (
					<StyledAppSubTitle id={ids?.subTitle} variant="subtitle2" noWrap>
						{metadata.description}
					</StyledAppSubTitle>
				) : null}
			</StyledAppTitleWrapper>
		</StyledAppHeaderWrapper>
	);
};
