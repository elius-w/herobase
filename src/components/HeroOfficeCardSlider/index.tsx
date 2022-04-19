// import GameCard from 'components/GameCard'
import HeroOfficeCard from 'components/HeroOfficeCard'
import Slider, { SliderSettings } from 'components/Slider'

import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'

import * as S from './styles'
import { Content } from 'components/Content'

const items = [
  {
    img: 'https://portobrasiltur.com.br/wp-content/uploads/img/react-slick/slider01.jpg',
    nome: 'Hero Office'
  },
  {
    img: 'https://portobrasiltur.com.br/wp-content/uploads/img/react-slick/slider01.jpg',
    nome: 'Hero Office'
  },
  {
    img: 'https://portobrasiltur.com.br/wp-content/uploads/img/react-slick/slider01.jpg',
    nome: 'Hero Office'
  },
  {
    img: 'https://portobrasiltur.com.br/wp-content/uploads/img/react-slick/slider01.jpg',
    nome: 'Hero Office'
  }
]
const settings: SliderSettings = {
  customPaging: function (i) {
    const urlBase =
      'https://portobrasiltur.com.br/wp-content/uploads/img/react-slick'

    const img = `slider0${i + 1}.jpg`

    return (
      <div className="thunbs">
        <a>
          <img src={`${urlBase}/${img}`} />
        </a>
      </div>
    )
  },
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1350,
      settings: {}
    }
  ],
  nextArrow: <ArrowForwardIosRounded aria-label="Próxima" />,
  prevArrow: <ArrowBackIosRounded aria-label="Voltar" />
}

const HeroOfficeCardSlider = () => (
  <Content>
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <HeroOfficeCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  </Content>
)

export default HeroOfficeCardSlider
