// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-cont">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div className="modal-cont">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <>
                {' '}
                <IoMdClose />{' '}
              </>
            </button>
            <div className="video-cont">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
