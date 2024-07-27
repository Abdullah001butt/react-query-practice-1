import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient({
  defaultOptions: { queries: { staleTime: 10000 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={query}>
    <App />
  </QueryClientProvider>
);
