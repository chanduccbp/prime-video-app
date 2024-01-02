// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachObj => eachObj.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachObj => eachObj.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo"
      />
      <div className="m-cont">
        <h1>Action Movies</h1>
        <MoviesSlider movieType={actionMovies} />
        <h1>Comedy Movies</h1>
        <MoviesSlider movieType={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
