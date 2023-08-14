import styled from '@emotion/styled';

import { IProgressTypesProps } from '../../types';

export const SpinProgressShape = styled('div')<IProgressTypesProps>(({ offset, autoResize }) => `
	display: flex;
	align-items: center;
	flex-direction: column;

	${autoResize
		? 'width: 100%; height: 100%'
		: 'max-height: 100px;'
};
	${offset?.top ? `margin-top: ${offset?.top}` : undefined};
	${offset?.left ? `margin-left: ${offset?.left}` : undefined};
`);
