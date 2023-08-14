import { Avatar as MuiAvatar, AvatarProps } from '@mui/material';

export function stringToColor(string: string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.substr(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}
export function stringAvatar(name: string, size: number) {
	const [firstName, lastName] = name.split(' ');

	return {
		sx: {
			bgcolor: stringToColor(name),
			width: size,
			height: size,
			fontSize: '1rem',
		},
		children: `${firstName[0]}${lastName ? lastName[0] : ''}`,
	};
}

export type IAvatarProps = AvatarProps & { name?: string; size?: number };

export const Avatar = ({ name, size = 36, ...props }: IAvatarProps) => {
	const updatedProps = name
		? { ...stringAvatar(name, size), ...props }
		: props;

	return <MuiAvatar {...updatedProps} />;
};
