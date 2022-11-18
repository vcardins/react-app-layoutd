import { useCallback, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconButton, Tooltip, Button } from '@mui/material';

import { useLayoutContext } from '../../../../context';
import { INavItem } from '../../../../types';
import { getDefaultButtonProps } from '../../../utils';

export const MenuButton = ({ item }: { item: INavItem }) => {
	const { settings } = useLayoutContext();
	const navigate = useNavigate();

	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			if (item.url) {
				return navigate(item.url);
			}

			item.onClick?.(event, item);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[item],
	);

	const buttonProps = getDefaultButtonProps<HTMLButtonElement>(
		item,
		settings.header.iconPositioning,
		handleClick,
	);

	const component = item?.label
		? <Button {...buttonProps} />
		: <IconButton {...buttonProps} />;

	if (!item?.tooltip) {
		return component;
	}

	return (
		<Tooltip title={item?.tooltip} arrow={true}>
			{component}
		</Tooltip>
	);
};
