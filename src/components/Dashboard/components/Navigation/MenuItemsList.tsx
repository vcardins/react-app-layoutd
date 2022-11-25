import { isValidElement } from 'react';
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
	const { pathname } = useLocation();
	const { isNavPaneOpen, navigation, settings } = useLayoutContext();
	const sidebarKeys = Object.keys(navigation?.sidebar ?? {});

	if (!sidebarKeys?.length) {
		return null;
	}

	return (
		<MenuItemsListWrapper>
			{sidebarKeys.map((key) => (
				<List
					key={key}
					id={`sidebar-${key}-menu`}
					sx={{ p: settings.sidebar.spacedItems ? 1 : 0 }}
				>
					{(navigation?.sidebar?.[key as keyof ISideBarNavigation] || [])
						.map((item) => {
							if (isValidElement(item)) {
								return item;
							}

							const navItem = item as INavItem;

							if (navItem.hidden) return;

							return (
								<MenuItem
									{...navItem}
									key={navItem.id}
									tooltip={!isNavPaneOpen ? `${navItem.label}${navItem.disabled ? ' 🚫' : ''}` : undefined}
									selected={pathname === navItem.url}
								/>
							);
						})
					}
				</List>
			))}
		</MenuItemsListWrapper>
	);
};
