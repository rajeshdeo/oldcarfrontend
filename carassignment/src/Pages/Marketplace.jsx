import React, { useEffect, useState } from "react";
import styles from "../Styles/marketplace.module.css";
import { getFun } from "../Redux/MarketPlace/marketplace.action";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Components/Filters";

const Marketplace = () => {
  const store = useSelector((state) => state.marketplaceReducer);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getFun(search));
  }, [search]);

  useEffect(() => {
    if (Array.isArray(store?.marketplace)) {
      setData(store.marketplace);
    }
  }, [store]);

  return (
    <div className={styles.container}>
      {/* <div className={styles.inputBox}>
        <Filters setData={setData} data={store?.marketplace} from={"marketplace"} />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search here, which car you are interested in"
          className={styles.input}
        />
      </div> */}
      {data?.map((car, index) => (
          <div className={styles.carItem} key={index}>
            <div className={styles.carImageContainer}>
              <img src={car?.image} alt="Car" className={styles.carImage} />
            </div>
            <div className={styles.middle}>
              <h2 className={styles.title}>{car?.title}</h2>
              <ul className={styles.descriptionList}>
                <li>Kms on Odometer: {car?.kmsOnOdometer}</li>
                <li>Current Price: {car?.currentPrice}</li>
                <li>Major Scratches: {car?.majorScratches ? "Yes" : "No"}</li>
                <li>Original Paint: {car?.originalPaint ? "Yes" : "No"}</li>
                <li>Accidents Reported: {car?.accidentsReported}</li>
                <li>Previous Buyers: {car?.previousBuyers}</li>
                <li>Registration Place: {car?.registrationPlace}</li>
              </ul>
              <button className={styles.book_button}>Buy Now</button>
            </div>
            <div className={styles.left}>
              <ul className={styles.carDetails}>
                {car?.description &&
                  car.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
              <div className={styles.specs}>
                <ul className={styles.colorList}>
                  {car?.oemSpecs?.availableColors?.map((color, index) => (
                    <li
                      key={index}
                      className={styles.colorItem}
                      style={{ backgroundColor: color }}
                    ></li>
                  ))}
                </ul>
                <ul className={styles.descriptionList}>
                  <li>
                    model: {car?.oemSpecs?.model} {car?.oemSpecs?.year}
                  </li>
                  <li>mileage: {car?.oemSpecs?.mileage}</li>
                  <li>power: {car?.oemSpecs?.power} BHP</li>
                  <li>maxSpeed: {car?.oemSpecs?.maxSpeed}</li>
                  <li>List-Price: {car?.oemSpecs?.listPrice}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Marketplace;