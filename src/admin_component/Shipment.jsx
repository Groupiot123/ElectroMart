import React from 'react';

const Shipment = ({ action }) => {
  let content;
  switch (action) {
    case 'track':
      content = (
        <div className="bg-white shadow rounded-lg p-6 mb-8 max-w-3xl mx-auto">
          <table className="w-full border border-black text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black px-4 py-2" colSpan={7}>Track Shipment</th>
              </tr>
              <tr>
                <th className="border border-black px-2 py-1">ID</th>
                <th className="border border-black px-2 py-1">Item id</th>
                <th className="border border-black px-2 py-1">Quantity</th>
                <th className="border border-black px-2 py-1">Status</th>
                <th className="border border-black px-2 py-1">Destination</th>
                <th className="border border-black px-2 py-1">Expected</th>
                <th className="border border-black px-2 py-1">Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-2 py-1"></td>
                <td className="border border-black px-2 py-1"></td>
                <td className="border border-black px-2 py-1"></td>
                <td className="border border-black px-2 py-1"></td>
                <td className="border border-black px-2 py-1"></td>
                <td className="border border-black px-2 py-1"></td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
      break;
    default:
      content = <div>Select an action.</div>;
  }
  return (
    <div className="p-4 border rounded mt-4">
      <h3 className="font-semibold mb-2">Shipment - {action && action.charAt(0).toUpperCase() + action.slice(1)}</h3>
      {content}
    </div>
  );
};

export default Shipment;
