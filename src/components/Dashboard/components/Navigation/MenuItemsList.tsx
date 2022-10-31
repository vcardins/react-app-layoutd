import { useLocation } from 'react-router-dom';
import { List, Grid, styled } from '@mui/material';

import { MenuItem } from './MenuItem';
import { useLayoutContext } from '../../../../context';
import { INavItem, ISideBarNavigation } from '../../../../types';

const MenuItemsListWrapper = styled(Grid)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const MenuItemsList = () => {
	const { isNavPaneOpen, navigation } = useLayoutContext();
	const { pathname } = useLocation();

	if (!navigation?.sidebar?.top?.length && !navigation?.sidebar?.bottom?.length) {
		return null;
	}

	return (
		<MenuItemsListWrapper>
			{Object.keys(navigation?.sidebar).map((key) => (
				<List key={key} id={`${key}-menu`} sx={{ p: 0 }}>
					{(navigation?.sidebar?.[key as keyof ISideBarNavigation] as INavItem[]).map((nav) => (
						<MenuItem
							{...nav}
							key={nav.id}
							tooltip={!isNavPaneOpen ? `${nav.label}${nav.disabled ? ' 🚫' : ''}` : undefined}
							selected={pathname === nav.url}
						/>
					))}
				</List>
			))}
		</MenuItemsListWrapper>
	);
};
