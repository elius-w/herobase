import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.black};
    margin-top: ${theme.spacings.xxlarge};
    ${media.lessThan('medium')`
    margin-top: ${theme.spacings.small};

    `}
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.content};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;

    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    color: white;
    display: flex;
    justify-content: end;
    span {
      width: 40rem;
      padding: 5px;

      img {
        width: 100%;
        margin-bottom: -3.8rem;
        position: relative;
        z-index: 5;
        ${media.lessThan('medium')`
          margin-bottom: -7rem;
        `}
        ${media.lessThan('large')`
        `}
      }
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.lightGray};
      line-height: 1.6;
      text-align: right;
      ${media.lessThan('medium')`
      text-align: center;
        `}
    }

    ${media.lessThan('large')`
      padding: ${theme.spacings.xsmall};

    `}
  `}
`
