import { LinearProgress, SpinProgress } from './components';

import { ProgressType, IProgressTypesProps } from './types';

interface IProgressProps extends IProgressTypesProps {
	type?: ProgressType;
}

export const Progress = ({ type = ProgressType.Linear, ...rest }: IProgressProps) => {
	switch (type) {
		case ProgressType.Linear:
			return <LinearProgress {...rest} />;
		case ProgressType.Spin:
			return <SpinProgress {...rest} />;
		default:
			throw new Error('Option not available');
	}
};
