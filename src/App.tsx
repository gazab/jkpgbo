import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { useQuery } from "react-query";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

import { Heading, Box, Flex } from "rebass";
import { BostadsregistretHome } from "./types/BostadsregistretHome";
import { Table } from "./components/Table";
import "./App.scss";

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
          gridTemplateColumns: ["1fr", "300px 1fr"],
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
          <Heading p='2'
          color='sl'>JKPGBo</Heading>
        </Box>
        <Box
          p="2"
          bg="base"
          sx={{
            gridArea: "main",
          }}
        >
          <Flex alignItems="center" justifyContent="center">
          {isLoading ?
            <p>Loading!</p> :
            <Table data={data ?? [] }/>
          }
            
          </Flex>

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
