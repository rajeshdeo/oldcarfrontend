import React from 'react'
import {Route, Routes} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Authenticate from '../Pages/Authenticate';
import AddCar from '../Pages/Addcar';
import DealerInventory from '../Pages/DealerInventory';
import Marketplace from '../Pages/Marketplace';
import OEM from '../Pages/OEM';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={
                <Marketplace />
            } />
            <Route path="/oem" element={
              <PrivateRoute>
                <OEM />
              </PrivateRoute>
            } />
            <Route path="/oem/addcar/:id" element={
              <PrivateRoute>
                <AddCar />
              </PrivateRoute>
            } />
            <Route path="/dealerinventory" element={
              <PrivateRoute>
                <DealerInventory />
              </PrivateRoute>
            } />
            <Route path="/auth" element={
              <Authenticate />
            } />
        </Routes>
    </div>
  )
}

export default AllRoutes