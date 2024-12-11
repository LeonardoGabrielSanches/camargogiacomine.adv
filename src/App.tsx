
import { FloatingButton } from "./components/core/FloatingButton"
import { AppRoutes } from "./routes/routes"
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
      <FloatingButton />
    </QueryClientProvider>
  )
}