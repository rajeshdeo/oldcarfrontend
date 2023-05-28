import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../Styles/dealer_inventory.module.css';
import { deleteFun, getFun } from '../Redux/DealerInventory/dealer_inventory.action';
import Popup from '../Components/popup';

const DealerInventory = () => {
  const store = useSelector((state) => state.dealerInventoryReducer);
  const [update,setUpdate] = useState(false)
  const [selected,setSelected] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {id} = useParams()
  useEffect(() => {
    dispatch(getFun());
  }, []);

  const deleteFunction = (id) => {
    dispatch(deleteFun(id));
  };
  return (
    <div className={styles.container}>
      {store?.dealer_inventory &&
        store?.dealer_inventory?.map((car, index) => (
          <div className={styles.carItem} key={index}>
            <div className={styles.carImageContainer}>
              <img src={car?.image} alt="Car" className={styles.carImage} />
            </div>
            <div className={styles.middle}>
              <h2 className={styles.title}>{car?.title}</h2>
              <ul className={styles.descriptionList}>
                <li>Current Price: {car?.currentPrice}Rs.</li>
                <li>Kms on Odometer: {car?.kmsOnOdometer}</li>
                <li>Major Scratches: {car?.majorScratches ? 'Yes' : 'No'}</li>
                <li>Original Paint: {car?.originalPaint ? 'Yes' : 'No'}</li>
                <li>Accidents Reported: {car?.accidentsReported}</li>
                <li>Previous Buyers: {car?.previousBuyers}</li>
                <li>Registration Place: {car?.registrationPlace}</li>
              </ul>
              <div>
              <button onClick={()=>{setUpdate(true); setSelected(car) }} className={styles.edit_button}> Edit</button>
              <div className={update?styles.show:styles.hide} ><Popup car={selected} setUpdate={setUpdate} /><div className={styles.close} onClick={()=>setUpdate(false)} >X</div></div>
              <button onClick={(e)=>{e.preventDefault(); deleteFunction(car?._id)}} className={styles.delete_button}> Delete</button>
              </div>
            </div>
            <div className={styles.left}>
              <ul className={styles.carDetails}>
                {car?.description && car?.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className={styles.specs}>
                <ul className={styles.colorList}>
                  {car?.oemSpecs?.availableColors?.map((color, index) => (
                    <li key={index} className={styles.colorItem} style={{ backgroundColor: color }}></li>
                    ))}
                </ul>
                <ul className={styles.descriptionList}>
                  <li>model: {car?.oemSpecs?.model} {car?.oemSpecs?.year}</li>
                  <li>mileage: {car?.oemSpecs?.mileage}</li>
                  <li>power: {car?.oemSpecs?.power} BHP</li>
                  <li>maxSpeed: {car?.oemSpecs?.maxSpeed}</li>
                  <li>List-Price: {car?.oemSpecs?.listPrice}Rs.</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
export default DealerInventory