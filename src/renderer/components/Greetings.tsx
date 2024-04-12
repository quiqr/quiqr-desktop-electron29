import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import quiqrLogo from "../../../assets/images/quiqr-logo.svg";

export default function Greetings(): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container justifyContent="center">
        <Box component="img" src={quiqrLogo} width={200} height={200} />
      </Grid>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
        Experimental New Quiqr Base <br/> with TypeScript, React, and MUI
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        Made by Quiqr
      </Typography>
    </Container>
  );
}
