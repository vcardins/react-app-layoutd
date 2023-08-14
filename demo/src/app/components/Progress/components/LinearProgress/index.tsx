import { LinearProgress as MuiLinearProgress, Box, Typography } from '@mui/material';

import { LinearProgressContainer } from './styles';
import { ILinearProgressProps } from '../../types';

export const LinearProgress = ({ id, message, position, ...rest }: ILinearProgressProps) => (
	<LinearProgressContainer id={id} position={position}>
		<Box id={id} sx={{ maxWidth: '300px', width: '100%' }}>
			<MuiLinearProgress {...rest} />
		</Box>
		{message && (
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">
					{message}
				</Typography>
			</Box>
		)}
	</LinearProgressContainer>
);
