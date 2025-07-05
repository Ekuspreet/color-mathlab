import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FunctionProvider } from './contexts/FunctionProvider.tsx'
import { InputProvider } from './contexts/InputProvider.tsx'
import { OutputProvider } from './contexts/OutputProvider.tsx'


createRoot(document.getElementById('root')!).render(
    <OutputProvider>

    <InputProvider>
    <FunctionProvider>
        <App />
    </FunctionProvider>
    </InputProvider>
    </OutputProvider>
)
