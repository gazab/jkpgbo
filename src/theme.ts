export default {
  body: {
    bg: "#e1e2e1",
  },
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    base: "#e1e2e1",
    bl: "#f5f5f6",
    bd: "#afb0af",
    p: "#1d3557",
    pd: "#000e2e",
    pl: "#4a5e84",
    s: "#A8DADC",
    sl: "#daffff",
    sd: "#78a8aa",
    accent: "#E63946",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "bl",
      bg: "p",
    },
    s: {
      color: "black",
      bg: "s",
    },
  },
  card: {
    color: "black",
    bg: "bl",
    padding: 2,
    margin: 2,
  },
  label: {
    fontWeights: 500,
  },
  select: {
    padding: 3,
    border: "none",
    borderLeft: "solid 4px transparent",
  },
};
