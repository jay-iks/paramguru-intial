import React from 'react';
import { CardImgOverlay, CardTitle, CardSubtitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SliderCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div className='slidercard' >
      <Card style={{ width: '13rem', height: '25rem', position: 'relative', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',cursor:'pointer' }}>
        <Card.Img
          src={imageSrc}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <CardImgOverlay>
          <div style={{ background: '#BF9855', width: '2em', aspectRatio: '1', borderRadius: '50%', padding: '0.6em', marginLeft: '85%' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faPlay} style={{ color: 'white', fontSize: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
          </div>
        </CardImgOverlay>
        <CardImgOverlay
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            position: 'absolute',
            top: '80%',
            width: '100%',
            height: '20%',
          }}
        >
          <CardTitle style={{ color: 'white', fontSize: '0.9em', marginBottom: '0.5em' }}>
            {title}
          </CardTitle>
          <CardSubtitle style={{ color: 'white', fontSize: '0.6em', overflow: 'hidden' }}>
            {subtitle}
          </CardSubtitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SliderCard;
