import { Typography, styled } from '@mui/material';

import { useLayoutContext } from '../../../context';
import { shouldForwardProp } from '../../utils';

export const StyledAppTitleWrapper = styled('div')`
	display: flex;
	flex-direction: column;
`;

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

export const StyledAppHeaderWrapper = styled('div', shouldForwardProp(['gapped']) )<{ gapped?: boolean; }>(({ gapped }) => `
	display: flex;
	align-items: center;
	gap: ${gapped ? '2em' : 0};
`);

export const Title = () => {
	const { metadata, ids, settings } = useLayoutContext();

	if (!metadata.name || !settings.displayTitle) {
		return null;
	}

	return (
		<StyledAppHeaderWrapper>
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
