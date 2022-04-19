import CountUp from 'react-countup'
import * as S from './styles'

export type CountersNumbersProps = {
  amount: number
  description: string
}

const CountersNumbers = ({ amount, description }: CountersNumbersProps) => {
  return (
    <>
      <S.Container>
        <h1>
          <CountUp end={amount} separator="." />
        </h1>
        <p>{description}</p>
      </S.Container>
    </>
  )
}

export default CountersNumbers
