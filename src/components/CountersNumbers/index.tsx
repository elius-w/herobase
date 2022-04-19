import CountUp from 'react-countup'
import * as S from './styles'

const CountersNumbers = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Column>
            <h1>
              <CountUp end={20} duration={2} />
            </h1>
            <p>Marcas</p>
          </S.Column>
          <S.Column>
            <h1>
              <CountUp end={111111111} separator="." duration={4} />
            </h1>
            <p>Jogadores alcançados</p>
          </S.Column>
          <S.Column>
            <h1>
              <CountUp end={111111111} separator="." duration={7} />
            </h1>
            <p>Acesso total</p>
          </S.Column>
        </S.Content>
      </S.Container>
    </>
  )
}

export default CountersNumbers
