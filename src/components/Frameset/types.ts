import { ReactNode, ReactElement } from 'react';
import { BoxProps } from '@mui/material';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IFramesetContentProps extends BoxProps {
	autoWidth?: boolean;
}

export interface IFramesetProps {
	id?: string;
	header?: {
		icon?: OverridableComponent<SvgIconTypeMap>;
		title: ReactElement | string;
		subTitle?: string;
		toolbar?: ReactNode;
	};
	footer?: ReactElement | string;
	contentProps?: IFramesetContentProps;
}
