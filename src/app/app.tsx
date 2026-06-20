import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "./router/route";
import { store } from "./store";
import "./app.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
