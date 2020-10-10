import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { useQuery } from "react-query";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

import { Heading, Box, Card, Text, Button, Flex } from "rebass";
import "./App.css";
import { BostadsregistretHome } from "./types/BostadsregistretHome";
import { Table } from "./components/Table";

const bostadsregistretDataUrl =
  "https://raw.githubusercontent.com/gazab/bostadsregistret_jkpg_history/main/bostadsregistret_jkpg.json";

function App() {
  const { data, isLoading } = useQuery<BostadsregistretHome[]>(
    "apartments",
    () => fetch(bostadsregistretDataUrl).then((res) => res.json())
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "grid",
          minHeight: "100vh",
          gridTemplateAreas: [
            '"header" "nav" "main"  "footer"',
            '"header header" "nav main" "footer footer"',
          ],
          gridTemplateColumns: ["1fr", "200px 1fr"],
          gridTemplateRows: [
            "min-content min-content 1fr min-content",
            "min-content 1fr",
          ],
        }}
      >
        <Box
          bg="pd"
          sx={{
            gridArea: "header",
          }}
        >
          <Heading color="b">JKPGBo</Heading>
        </Box>
        <Box
          bg="base"
          sx={{
            gridArea: "main",
          }}
        >
          {isLoading ?
            <p>Loading!</p> :
            <Table data={data ?? [] }/>
          }
          <ReactQueryDevtools />
        </Box>
        <Box
          bg="p"
          sx={{
            gridArea: "nav",
          }}
        >
          Filter
        </Box>
        <Box
          bg="pd"
          sx={{
            gridArea: "footer",
          }}
        >
          Footer
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
