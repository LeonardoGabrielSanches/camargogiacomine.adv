
import { AppRoutes } from "./routes/routes"
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  )
}