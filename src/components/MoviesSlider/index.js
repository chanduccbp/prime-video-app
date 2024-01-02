// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movieType} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {movieType.map(eachObj => (
        <MovieItem key={eachObj.id} movieDetails={eachObj} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
