import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/addcar.module.css';
import { useEffect, useState } from 'react';
import { updateFun } from '../Redux/DealerInventory/dealer_inventory.action';
const Popup = ({car,setUpdate}) => {
  const [carDetails, setCarDetails] = useState(car);
  const dispatch = useDispatch();
  useEffect(()=>{
    setCarDetails({...car})
  },[car])
  console.log('car:', car)
  console.log('carDetails:', carDetails)
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarDetails((prevDetails) => ({
        ...prevDetails,
      [name]: value
    }));
};

  const handleDescriptionChange = (index, event) => {
    const { value } = event.target;
    setCarDetails((prevDetails) => {
      const updatedDescription = [...prevDetails.description];
      updatedDescription[index] = value;
      return {
        ...prevDetails,
        description: updatedDescription
      };
    });
  };
  const updateFunction = (event) => {
    event.preventDefault();
    dispatch(updateFun({id:car._id,carDetails}));
    setUpdate(false)
  };

  return (
    <div className={styles.popup}>
      <form onSubmit={updateFunction} className={styles.box}>
          <img src={carDetails?.image} alt="Car" className={styles.image} />
          <input name="title" type="text" value={carDetails?.title} onChange={handleInputChange} placeholder="Title" className={styles.input} required/>
          <input name="kmsOnOdometer" type="number" value={carDetails?.kmsOnOdometer} onChange={handleInputChange} placeholder="Kilometers on Odometer" className={styles.input} required   />
          <input name="accidentsReported" type="number" value={carDetails?.accidentsReported} onChange={handleInputChange} placeholder="Accidents Reported" className={styles.input}   />
          <input name="previousBuyers" type="number" value={carDetails?.previousBuyers} onChange={handleInputChange} placeholder="Previous Buyers" className={styles.input}   />
          <input name="currentPrice" type="text" value={carDetails?.currentPrice} onChange={handleInputChange} placeholder="Current Price" className={styles.input} required   />
          <input name="registrationPlace" type="text" value={carDetails?.registrationPlace} onChange={handleInputChange} placeholder="Registration Place" className={styles.input} required   />
          <div className={styles.checkbox_label}>
            <input name="majorScratches" type="checkbox" checked={carDetails?.majorScratches} onChange={() => setCarDetails((prevDetails) => ({ ...prevDetails, majorScratches: !prevDetails.majorScratches })) } className={styles.checkbox_input} />
            Major Scratches
          </div>
          <div className={styles.checkbox_label}>
            <input name="originalPaint" type="checkbox" checked={carDetails?.originalPaint} onChange={() => setCarDetails((prevDetails) => ({ ...prevDetails, originalPaint: !prevDetails.originalPaint })) } className={styles.checkbox_input} />
            Original Paint
          </div>
          <button type="submit" className={styles.button}>ADD</button>
      </form>
      <div className={styles.box}>
          {carDetails?.description?.map((desc, index) => (
          <input key={index} name={`description${carDetails?.oemSpecs?.index}`} type="text" value={desc} onChange={(event) => handleDescriptionChange(index, event)} placeholder="Description" className={styles.description_input} required/>
          ))}
          <input name="model" type="text" value={`Model: ${carDetails?.oemSpecs?.model}`} placeholder="Model" className={styles.input} required/>
            <input name="year" type="text" value={`Year: ${carDetails?.oemSpecs?.year}`} placeholder="Year" className={styles.input} required/>
            <input name="listPrice" type="text" value={`List Price: ${carDetails?.oemSpecs?.listPrice}`} placeholder="ListPrice" className={styles.input} required/>
          <p>Available Colors:</p>
          <ul className={styles.colorList}>
            {carDetails?.oemSpecs?.availableColors?.map((color, index) => (
              <li key={index} className={styles.colorItem} style={{ backgroundColor: color }}></li>
              ))}
          </ul>
          <input name="listPrice" type="text" value={`Mileage: ${carDetails?.oemSpecs?.mileage} miles`} placeholder="ListPrice" className={styles.input} required/>
          <input name="listPrice" type="text" value={`Power: ${carDetails?.oemSpecs?.power} BHP`} placeholder="ListPrice" className={styles.input} required/>
          <input name="listPrice" type="text" value={`Max Speed: ${carDetails?.oemSpecs?.maxSpeed} mph`} placeholder="ListPrice" className={styles.input} required/>
      </div>
    </div>
  )
} 

export default Popup