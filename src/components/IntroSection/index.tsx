import * as S from './styles'
import CountersNumbers from 'components/CountersNumbers'

const IntroSection = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Column>
            <span>
              <img src="https://i.ibb.co/CtHyN50/image-header.png" />
            </span>
          </S.Column>
          <S.Column>
            {' '}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </S.Column>
        </S.Content>
        <CountersNumbers />
      </S.Container>
    </>
  )
}

export default IntroSection
