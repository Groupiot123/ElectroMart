import React from 'react';

const Inventory = ({ action }) => {
  let content;
  switch (action) {
    case 'add':
      content = (
        <table className="min-w-full border border-black text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black px-4 py-2" colSpan={4}>ADD</th>
            </tr>
            <tr>
              <th className="border border-black px-2 py-1">CATEGORY</th>
              <th className="border border-black px-2 py-1">PRODUCT</th>
              <th className="border border-black px-2 py-1">ZONE</th>
              <th className="border border-black px-2 py-1">QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-2 py-1"></td>
              <td className="border border-black px-2 py-1"></td>
              <td className="border border-black px-2 py-1"></td>
              <td className="border border-black px-2 py-1"></td>
            </tr>
          </tbody>
        </table>
      );
      break;
    case 'edit':
      content = (
        <div className="bg-white shadow rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <EditTable />
        </div>
      );
      break;
    case 'view':
      content = (
        <div className="bg-white shadow rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <table className="w-full border border-black text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black px-4 py-2" colSpan={5}>VIEW</th>
              </tr>
              <tr>
                <th className="border border-black px-2 py-1">ID</th>
                <th className="border border-black px-2 py-1">CATEGORY</th>
                <th className="border border-black px-2 py-1">PRODUCT NAME</th>
                <th className="border border-black px-2 py-1">ZONE</th>
                <th className="border border-black px-2 py-1">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
      <h3 className="font-semibold mb-2">Inventory - {action && action.charAt(0).toUpperCase() + action.slice(1)}</h3>
      {content}
    </div>
  );
};

// EditTable component for edit action
const EditTable = () => {
  const [showUpdateTable, setShowUpdateTable] = React.useState(false);
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);

  return (
    <>
      <table className="w-full border border-black text-center mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black px-4 py-2" colSpan={6}>EDIT</th>
          </tr>
          <tr>
            <th className="border border-black px-2 py-1">CATEGORY NAME</th>
            <th className="border border-black px-2 py-1">PRODUCT NAME</th>
            <th className="border border-black px-2 py-1">ZONE</th>
            <th className="border border-black px-2 py-1">QUANTITY</th>
            <th className="border border-black px-2 py-1">UPDATE</th>
            <th className="border border-black px-2 py-1">DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1"><input type="text" className="w-full border px-2 py-1" placeholder="Category Name" /></td>
            <td className="border border-black px-2 py-1"><input type="text" className="w-full border px-2 py-1" placeholder="Product Name" /></td>
            <td className="border border-black px-2 py-1"><input type="text" className="w-full border px-2 py-1" placeholder="Zone" /></td>
            <td className="border border-black px-2 py-1"><input type="number" className="w-full border px-2 py-1" placeholder="Quantity" /></td>
            <td className="border border-black px-2 py-1">
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => setShowUpdateTable(true)}>Update</button>
            </td>
            <td className="border border-black px-2 py-1">
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => setShowDeletePopup(true)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Update Table Popup */}
      {showUpdateTable && (
        <div className="p-4 border border-black mb-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <table className="w-full border border-black text-center mb-4" style={{maxWidth: '600px'}}>
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black px-4 py-2" colSpan={5}>Update</th>
              </tr>
              <tr>
                <th className="border border-black px-2 py-1">ID</th>
                <th className="border border-black px-2 py-1">CATEGORY</th>
                <th className="border border-black px-2 py-1">PRODUCT NAME</th>
                <th className="border border-black px-2 py-1">ZONE</th>
                <th className="border border-black px-2 py-1">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-2 py-1">1</td>
                <td className="border border-black px-2 py-1">Electronics</td>
                <td className="border border-black px-2 py-1">Smartphone</td>
                <td className="border border-black px-2 py-1">A1</td>
                <td className="border border-black px-2 py-1">100</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2" style={{margin: '8px 0'}}>Update</button>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-gray-300 px-4 py-2 rounded w-1/2" style={{margin: '8px 0'}} onClick={() => setShowUpdateTable(false)}>Close</button>
          </div>
        </div>
      )}
      {/* Delete Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white border border-black p-6 rounded shadow-lg min-w-[300px] flex flex-col items-center">
            <div className="mb-4 font-bold text-center">Popup</div>
            <div className="mb-4 text-center">Do you want to delete?<br />Yes or No</div>
            <div className="flex justify-center space-x-4 mb-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowDeletePopup(false)}>Yes</button>
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowDeletePopup(false)}>No</button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2">Add</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Inventory;
