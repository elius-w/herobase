import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContainerHeader = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    margin-top: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.small};
    `}
  `}
`
export const Wrapper = styled.section`
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
    color: ${theme.colors.white};
    display: flex;
    justify-content: end;
    > span {
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

        ${media.lessThan('small')`
          width: 90%;
          justify-content:center;
          margin-bottom: -6rem;
        `}
      }
    }
    > p {
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.lightGray};
      line-height: 1.6;
      text-align: right;
      ${media.lessThan('medium')`
      text-align: center;
      `}
    }
    ${media.lessThan('small')`
      width: 100%;
    `}

    ${media.lessThan('large')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const WrapperCounter = styled.section`
  ${({ theme }) => css`
    max-width: 108rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: ${theme.spacings.medium};
    border-radius: 2rem;
    grid-gap: 2rem;
    align-items: center;
    background: ${theme.colors.darkGray};
    position: relative;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
      grid-template-columns: 1fr;
      margin: ${theme.spacings.xsmall};
    `}

    ${media.lessThan('large')`
      max-width: 80rem;
      padding: ${theme.spacings.xxsmall};
    `}
  `}
`
