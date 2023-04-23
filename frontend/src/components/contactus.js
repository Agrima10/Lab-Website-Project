
import React from 'react';
import backgroundImage from './image/Banner.jpg';

function contactus() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em' 
  };

  const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '70vh',
    marginLeft: '50px',
  };

  const cardStyle = {
    width: '30rem',
    margin: '10px',
  };

  return (
    <div>
      <div style={divStyle}>Contact Us</div>
      <div style={contactStyle}>
        <div className="card" style={cardStyle}>
          <div className="card-header">
            <i className="fas fa-phone"></i>
            <span>Phone</span>
          </div>
          <div className="card-body">
            <i className="fas fa-phone"></i>
            <p>phoneno</p>
          </div>
        </div>
        <div className="card" style={cardStyle}>
          <div className="card-header">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </div>
          <div className="card-body">
            <i className="fas fa-envelope"></i>
            <p>email</p>
          </div>
        </div>
        <div className="card" style={cardStyle}>
          <div className="card-header">
            <i className="fas fa-map-marker-alt"></i>
            <span>Address</span>
          </div>
          <div className="card-body">
            <i className="fas fa-map-marker-alt"></i>
            <p>address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactus;