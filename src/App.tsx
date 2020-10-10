import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { useQuery } from "react-query";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

import { Heading, Box, Card, Text, Button, Flex } from "rebass";
import "./App.css";
import { BostadsregistretHome } from "./types/BostadsregistretHome";

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
          <table>
            <thead>
              <tr>
                <th>Adress</th>
                <th>Rum</th>
                <th>Storlek</th>
                <th>Våning</th>
                <th>Tillträde</th>
                <th>Hyra</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <p>Loading!</p>
              ) : (
                data?.map((home: BostadsregistretHome) => (
                  <tr key={home.id}>
                    <td>{home.address}</td>

                    <td>{home.rooms} rum</td>
                    <td>
                      {home.area} m<sup>2</sup>
                    </td>
                    <td>Våning {home.floor}</td>

                    <td>Tillträde {home.entryDate}</td>
                    <td>{home.rent} sek</td>
                    <td>
                      <Button variant="s">Läs mer</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

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
