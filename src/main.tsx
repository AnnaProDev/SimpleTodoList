import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import { PageTitle } from './components/PageTitle.tsx'
import { TasksList } from './components/TasksList.tsx'
import { TaskDetails } from './components/TaskDetails.tsx'
import { Footer } from './components/Footer.tsx'

createRoot(document.getElementById("root")!).render(<MainPage />)
 
// eslint-disable-next-line react-refresh/only-export-components
function MainPage() {
  return (
    <div>
      <Header />
      <PageTitle />
      <div style={{ display: "flex", gap: "30px" }}>
        <TasksList />
        <TaskDetails />
      </div>
      <Footer />
    </div>
  )
}
