import { CSSProperties } from 'react';
import { LinearProgressProps } from '@mui/material';

export enum ProgressType {
	Linear,
	Spin,
	MoonOrbit,
	EarthOrbit
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
