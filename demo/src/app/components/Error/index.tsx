import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

import { Link } from 'react-app-layouts';

import { IconWrapper, Title, Message, Center } from './styles';
import { appRoutes } from '../../config';

type IErrorProps = {
	code: string;
	title?: string;
	Icon?: string | OverridableComponent<SvgIconTypeMap>;
	message: string;
};

export const Error = ({ code, Icon = '😭', title = 'Ooooops!', message }: IErrorProps) => (
	<Center id={`error-${code}`}>
		<IconWrapper>
			{typeof Icon === 'string'
				? Icon
				: (<Icon />)
			}
		</IconWrapper>
		<Title>{title}</Title>
		<Message>{message}</Message>
		<Link to={appRoutes.Home}>Return to Home</Link>
	</Center>
);
