import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MenuLateral } from './shared/components'
import { DrawerProvider } from './shared/context'
import { AppThemeProvider } from './shared/context/ThemeContext'

export const App = () => {
  return (
    <AppThemeProvider>
    <DrawerProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </DrawerProvider>
    </AppThemeProvider>
  )
}