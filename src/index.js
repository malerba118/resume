import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const colors = {
  gray: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  teal: {
    50: "#ddfeff",
    100: "#b5f7fa",
    200: "#8af0f4",
    300: "#5fe9ef",
    400: "#3ce2eb",
    500: "#29c9d1",
    600: "#1a9da4",
    700: "#0b7075",
    800: "#004347",
    900: "#001819",
  },
};

const theme = extendTheme({
  // colors,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      "html, body": {
        background: "gray.100",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
