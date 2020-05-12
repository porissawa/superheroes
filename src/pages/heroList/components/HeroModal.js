import React, { useState } from 'react'

import Modal from '../../../components/modal/Modal'
import Spinner from '../../../components/spinner/Spinner'
import './heroModal.scss'

const HeroModal = ({
  hero,
  deselectHero
}) => {
  const [finishImageGet, setFinishImageGet] = useState(false)
  const [failedToLoadImage, setFailedToLoadImage] = useState(false)

  return (
    <Modal
      closeModal={deselectHero}
      onBackdropClick={deselectHero}
    >
      {
        !finishImageGet && (
          <Spinner />
        )
      }
      {
        failedToLoadImage
          ? (
            <em className='modal-hero-image-error'>
            Sorry, an error occurred when getting this image :(
            </em>
          ) : (
            <img
              src={hero.image.url}
              alt={hero.name}
              className='modal-hero-image'
              // axios calls results in CORS so this fetch, and its state,
              // cannot be controlled from reducer
              onLoad={() => setFinishImageGet(true)}
              onError={() => {
                setFinishImageGet(true)
                setFailedToLoadImage(true)
              }}
            />
          )
      }

      <div className='modal-hero-info'>
        <p>
          Name: {hero.name}
        </p>
        <p>
          Aliases: {hero.biography.aliases
            ? hero.biography.aliases.map((el, idx) => <span key={el}>{idx > 0 && '; '}{el}</span>)
            : '-'}
        </p>
        <p>
          Full name: {hero.biography['full-name'] ? hero.biography['full-name'] : 'Unknown'}
        </p>
        <strong className='modal-hero-stats'>
          Stats:
        </strong>
        {Object.entries(hero.powerstats).map(pair => {
          return (
            <p key={pair[0]}>
              <span className='modal-hero-stat-name'>{pair[0]}: </span>
              <span>{pair[1] !== 'null' ? pair[1] : '-'}</span>
            </p>
          )
        })}
      </div>
    </Modal>
  )
}

export default HeroModal
