import { createRoot } from 'react-dom/client'

import Main from './main'
import GlobalStyle from './style/globalStyle'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <GlobalStyle />
    <Main />
  </>
)
