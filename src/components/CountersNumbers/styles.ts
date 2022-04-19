import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    color: ${theme.colors.white};
    text-align: center;
    h1 {
      font-size: 4rem;
      font-weight: ${theme.font.extra};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
      font-weight: ${theme.font.bold};
    }
    ${media.lessThan('large')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`
