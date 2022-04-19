import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


${({ theme }) => css`
  html {
    font-size: 65%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    background-color: ${theme.colors.black};
  }
`}

a {
    color: inherit;
    text-decoration: none;
}

ul, li {
    list-style: none;
}
${({ theme }) => css`
  .error-page {
    height: calc(100vh - 500px);
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 10rem;
    }
  }
`}

`

export default GlobalStyle
