import React, { useState } from 'react';
import Inventory from './Inventory';
import Shipment from './Shipment';

const AdminPanel = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [inventoryAction, setInventoryAction] = useState(null);
  const [shipmentAction, setShipmentAction] = useState(null);

  // Ensure only one table is shown at a time
  const handleInventoryAction = (action) => {
    setInventoryAction(action);
    setShipmentAction(null);
  };

  const handleShipmentAction = (action) => {
    setShipmentAction(action);
    setInventoryAction(null);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <div className="mb-4">
        <button
          className="w-full text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setOpenDropdown(openDropdown === 'inventory' ? null : 'inventory')}
        >
          Inventory
        </button>
        {openDropdown === 'inventory' && (
          <div className="ml-4 mt-2">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleInventoryAction('add')}
            >Add</button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleInventoryAction('edit')}
            >Edit</button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleInventoryAction('view')}
            >View</button>
          </div>
        )}
      </div>
      <div className="mb-4">
        <button
          className="w-full text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setOpenDropdown(openDropdown === 'shipment' ? null : 'shipment')}
        >
          Shipment
        </button>
        {openDropdown === 'shipment' && (
          <div className="ml-4 mt-2">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleShipmentAction('track')}
            >Track Shipment</button>
          </div>
        )}
      </div>
      {/* Render selected component based on action */}
      {inventoryAction && (
        <Inventory action={inventoryAction} />
      )}
      {shipmentAction && (
        <Shipment action={shipmentAction} />
      )}
    </div>
  );
};

export default AdminPanel;
