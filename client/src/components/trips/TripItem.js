import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatDate';

const TripItem = ({
  trip
}) => {
  return (
    <div className="profile bg-white">
      <img
        className="round-img-slow"
        src={trip.images[0]?.url}
        alt=""
      />
      <div>
        <h2>{trip.title}</h2>
        <p>{trip.subtitle}</p>
        <p>{trip.location}</p>
        <Link to={'/trip-details/' + trip._id} state={{ data: trip }} className='btn btn-primary'>
          <i className='text-primary' /> Ver Detalle
        </Link>
      </div>
      <div>
        {trip.category
          &&
          (<span><h3>Categoria:</h3><div>{trip.category}</div></span>)
        }
        <h3>Fecha:</h3>{formatDate(trip.date)}
        <h3>Duración:</h3>{trip.duration}
        <h3>Disponibilidad:</h3>{trip?.quota - trip?.reservations} lugares
      </div>
    </div>
  )
}

TripItem.propTypes = {
  trip: PropTypes.object.isRequired
}

export default TripItem
