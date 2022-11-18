import { ReactNode, ReactElement } from 'react';
import { BoxProps } from '@mui/material';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { Variant } from '@mui/material/styles/createTypography';

export interface IFramesetContentProps extends BoxProps {
	autoWidth?: boolean;
}

export interface IFramesetProps {
	id?: string;
	header?: {
		icon?: OverridableComponent<SvgIconTypeMap> | ReactNode;
		title: ReactElement | string;
		titleVariant?: Variant;
		iconSize?: 'inherit' | 'large' | 'medium' | 'small' | number;
		subTitle?: string;
		toolbar?: ReactNode;
	};
	footer?: ReactElement | string;
	contentProps?: IFramesetContentProps;
}
