import { useAvailableRoutes } from "@/entities/user"
import { BrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import { AppRouter } from "./router"

function App() {
  const availableRoutes = useAvailableRoutes()

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter routes={availableRoutes} />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
