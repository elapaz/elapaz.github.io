import React from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "./components/AppAppBar";
import Container from "@mui/material/Container";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import AppTheme from "./shared-theme/AppTheme";

function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
      </Container>
      <Footer />
    </AppTheme>
  );
}

export default App;
