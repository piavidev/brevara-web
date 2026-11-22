import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>¡Brevara en React!</h1>
      <p>El proyecto base está listo.</p>
    </div>
  </StrictMode>,
)
