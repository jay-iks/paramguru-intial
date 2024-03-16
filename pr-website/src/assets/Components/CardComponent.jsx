import Raceact from 'react';

const CardComponent = ({ backgroundImage, overlayText }) => {
  const cardStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: `url(${backgroundImage}) center/cover no-repeat`,
  };

  const overlayTextStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '20px',
    color: '#fff', // You can customize the text color
    background: 'rgba(0, 0, 0, 0.6)', // You can customize the overlay background
  };

  return (
    <div style={cardStyle}>
      <div style={overlayTextStyle}>
        <p>{overlayText}</p>
      </div>
    </div>
  );
};

export default CardComponent;
