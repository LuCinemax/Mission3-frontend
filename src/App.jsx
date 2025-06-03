import {BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import TermsOfService from './pages/TermsOfService'
import GeminiInterviewerBot from './pages/GeminiInterviewerBot'
import OpenAIInterviewerBot from './pages/OpenAIInterviewerBot'
import VercelInterviewerBot from './pages/VercelInterviewerBot'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import TurnersInterviewPage from './pages/TurnersInterviewPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/GeminiInterviewerBot" element={<GeminiInterviewerBot />} />
        <Route path="/OpenAIInterviewerBot" element={<OpenAIInterviewerBot />} />
        <Route path="/VercelInterviewerBot" element={<VercelInterviewerBot />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/TurnersInterviewPage" element={<TurnersInterviewPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
