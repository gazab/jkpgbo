import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { useQuery } from "react-query";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

import { Heading, Box, Flex } from "rebass";
import { Table } from "./components/Table";
import "./App.scss";
import { getBostadsregistretData } from "./api/bostadsregistret";
import { Home } from "./types/Home";
import { getVatterhemData } from "./api/vatterhem";

function App() {
  const { data: bostadsregistretData, isLoading: bostadsregistretIsLoading } = useQuery<Home[]>( "bostadsregistret", getBostadsregistretData);
  const { data: vatterhemData, isLoading: vatterhemIsLoading } = useQuery<Home[]>( "vatterhem", getVatterhemData);


  let combinedData = [...bostadsregistretData||[], ...vatterhemData||[]];
  let isAnyLoading = bostadsregistretIsLoading || vatterhemIsLoading;

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
          {isAnyLoading ?
            <p>Loading!</p> :
            <Table data={combinedData ?? [] }/>
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
