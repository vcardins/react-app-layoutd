import { CircularProgress, Box, Typography } from '@mui/material';

import { SpinProgressShape } from './styles';
import { IProgressTypesProps } from '../../types';

export const SpinProgress = ({ id, offset, message, size, autoResize }: IProgressTypesProps) => (
	<SpinProgressShape offset={offset} autoResize={autoResize}>
		<CircularProgress
			id={id}
			size={size}
		/>
		{message && (
			<Box sx={{ mt: '10px', minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">
					{message}
				</Typography>
			</Box>
		)}
	</SpinProgressShape>
);
