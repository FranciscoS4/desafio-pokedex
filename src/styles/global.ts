import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
  body {
    min-height: 100%auto;
    background-color: #F5F7FA;
    -webkit-font-smoothing: antialiased;
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Poppins, serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`

export default GlobalStyles;