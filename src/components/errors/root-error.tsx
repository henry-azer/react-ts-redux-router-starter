import { Container, Typography } from "@mui/joy";
import { useRouteError } from "react-router-dom";

export const RootError: React.FC = () => {
  const err = useRouteError() as RouteError;

  return (
    <Container sx={{ marginTop: "43vh" }} maxWidth="sm">
      <Typography
        sx={{
          fontSize: "2em",
          fontWeight: 300,
          textAlign: "center",
          "& strong": { fontWeight: 400 },
        }}
        level="h1"
      >
        <strong>Error {err.status || 500}</strong>:{" "}
        {err.statusText ?? err.message}
      </Typography>
    </Container>
  );
}

type RouteError = Error & { status?: number; statusText?: string };
