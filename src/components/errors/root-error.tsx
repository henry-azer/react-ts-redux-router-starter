import { Container, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

export const RootError: React.FC = () => {
  const err = useRouteError() as RouteError;

  return (
    <Container maxWidth="sm">
      <Typography
        sx={{
          fontSize: '2em',
          fontWeight: 300,
          textAlign: 'center',
          '& strong': { fontWeight: 400 },
        }}
        variant="h1"
      >
        Error {err.status || 500}: {err.statusText ?? err.message}
      </Typography>
    </Container>
  );
};

type RouteError = Error & { status?: number; statusText?: string };
