import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Router, Route } from "react-router-dom";

import Home from "./pages/Home";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
