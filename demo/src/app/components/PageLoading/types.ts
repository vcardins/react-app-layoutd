
import { CSSProperties } from 'react';
import { LinearProgressProps } from '@mui/material';

export interface IPageLoadingProps {
	id?: string;
	delay?: number;
	message?: string;
	type?: ProgressType;
	opacity?: number;
	offset?: IProgressTypesProps['offset']
}

export enum ProgressType {
	Linear,
	Spin,
}

export interface IProgressTypesProps {
	id?: string;
	size?: number | CSSProperties['width'];
	message?: string;
	autoResize?: boolean;
	offset?: { top?: CSSProperties['top']; left?: CSSProperties['top'] }
}

export interface ILinearProgressProps extends IProgressTypesProps, LinearProgressProps {
	position?: CSSProperties['flexDirection'];
}
