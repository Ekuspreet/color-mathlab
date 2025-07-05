import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FunctionProvider } from './contexts/FunctionProvider.tsx'
import { InputProvider } from './contexts/InputProvider.tsx'


createRoot(document.getElementById('root')!).render(
    <InputProvider>
    <FunctionProvider>
        <App />
    </FunctionProvider>
    </InputProvider>
)
