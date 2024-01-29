import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "components/layout";
import Stats from "page/stats";
import Dashboard from "page/dashboard";
import Leaderboard from "page/leaderboard";
import Background from "components/layout/background";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Epilogue",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Background>
          <Layout>
            <Routes>
              <Route path="/stats" element={<Stats />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Leaderboard />} />
            </Routes>
          </Layout>
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
