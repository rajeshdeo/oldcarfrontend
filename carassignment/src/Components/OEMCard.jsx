import React from 'react';
import styles from '../Styles/OEMCard.module.css';
import { useNavigate } from 'react-router-dom';

const OEMCard = ({ car }) => {
    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/oem/addcar/${car._id}`)} className={styles.card}>
      <h2>{car.model}</h2>
      <p>Year: {car.year}</p>
      <p>List Price: Rs.{car.listPrice}</p>
      <p>Available Colors:
          <ul className={styles.colorList}>
            {car.availableColors?.map((color, index) => (
              <li key={index} className={styles.colorItem} style={{ backgroundColor: color }}></li>
              ))}
          </ul>
      </p>
      <p>Mileage: {car.mileage} miles</p>
      <p>Power: {car.power} BHP</p>
      <p>Max Speed: {car.maxSpeed} mph</p>
    </div>
  );
};

export default OEMCard;