import { isValidElement } from 'react';
import { AppBar, Toolbar, Box, styled } from '@mui/material';

import { MenuDropdown, MenuButton, MenuBarToggle } from './Navigation';
import { Title } from './Title';

import { useLayoutContext } from '../../../context';
import { INavItem, ITopBarNavigation } from '../../../types';

export const StyledAppBar = styled(AppBar)(({ theme }) => `
	display: flex;
	width: 100%;
	background-color: ${theme.palette.common.white};
	color: ${theme.palette.common.black};
	flex-direction: row;
`);

export const StyledToolbar = styled(Toolbar)<{ multiple: boolean }>(({ multiple }) => `
 	width: 100%;
	display: flex;
	justify-content: ${multiple ? 'space-between' : 'end' };
`);

export const ActionBarGroup = styled(Box)(({ theme }) => `
	flex: 1 1;
	align-items: center;
	justify-content: space-between;
	margin-left: ${theme.spacing(2)};
`);

export const ActionBar = styled(Box)(({ theme }) => `
	gap:${theme.spacing(1.5)};
	align-items: center;
`);


const StyledAppIcon = styled('div')(({ theme }) => `
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 ${theme.spacing(3)} 0 ${theme.spacing(2)};
`);

export const Header = () => {
	const { navigation, Icon, settings } = useLayoutContext();
	const headerNavKeys = Object.keys(navigation?.header ?? {});

	if (!navigation?.header || !headerNavKeys?.length) {
		return null;
	}

	return (
		<StyledAppBar elevation={settings.header.shadowElevation}>
			<MenuBarToggle source="header" />
			<Box display="flex" flex="1">
				{Icon ?
					(
						<StyledAppIcon>
							{Icon}
						</StyledAppIcon>
					)
					: null
				}
				<Title />
				<StyledToolbar multiple={headerNavKeys.length > 1}>
					{headerNavKeys.map((key) => (
						<ActionBar
							key={key}
							sx={{ display: { xs: 'none', md: 'flex' } }}
						>
							{(navigation.header?.[key as keyof ITopBarNavigation] || []).map((item) => {
								if (isValidElement(item)) {
									return item;
								}

								const navItem = item as INavItem;

								return navItem.children?.length
									? (
										<MenuDropdown key={navItem.id} item={navItem} />
									) : (
										<MenuButton key={navItem.id} item={navItem} />
									);
							})}
						</ActionBar>
					))}
				</StyledToolbar>
			</Box>
		</StyledAppBar>
	);
};
