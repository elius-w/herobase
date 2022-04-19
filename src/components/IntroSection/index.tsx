import * as S from './styles'
import CountersNumbers from 'components/CountersNumbers'

const IntroSection = () => {
  return (
    <>
      <S.ContainerHeader>
        <S.Wrapper>
          <S.Column>
            <span>
              <img src="https://i.ibb.co/CtHyN50/image-header.png" />
            </span>
          </S.Column>
          <S.Column>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </S.Column>
        </S.Wrapper>
      </S.ContainerHeader>

      <S.WrapperCounter>
        <CountersNumbers amount={55} description="Marcas" />
        <CountersNumbers
          amount={111111111}
          description="Jogadores alcançados"
        />
        <CountersNumbers amount={111111111} description="Acesso total" />
      </S.WrapperCounter>
    </>
  )
}

export default IntroSection
