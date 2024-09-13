import { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { Link, HashRouter, Routes, Route } from "react-router-dom"; // Use HashRouter
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <HashRouter>
      {" "}
      {/* Switched to HashRouter */}
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <h1 style={{ marginLeft: "50px" }}>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
