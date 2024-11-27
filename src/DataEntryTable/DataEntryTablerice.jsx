import React, { useState } from "react";

const DataEntryTablerice = () => {
  const [data, setData] = useState([
    {
      date: "2024-11-25",
      place: "City A",
      imNo: "12345",
      bags: 10,
      weight: 250,
      nb: "NB001",
      onb: "ONB002",
      ss: "SS003",
      swp: "SWP004",
      lorryNumber: "KA-01-1234",
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    place: "",
    imNo: "",
    bags: "",
    weight: "",
    nb: "",
    onb: "",
    ss: "",
    swp: "",
    lorryNumber: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the row being edited
  const [dropdownIndex, setDropdownIndex] = useState(null); // Track which dropdown is open

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddOrEditEntry = () => {
    const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
    const entryWithDate = { ...newEntry, date: currentDate };

    if (editingIndex !== null) {
      // Edit existing row
      const updatedData = [...data];
      updatedData[editingIndex] = entryWithDate;
      setData(updatedData);
    } else {
      // Add new row
      setData([...data, entryWithDate]);
    }

    // Reset form and close popup
    setNewEntry({
      place: "",
      imNo: "",
      bags: "",
      weight: "",
      nb: "",
      onb: "",
      ss: "",
      swp: "",
      lorryNumber: "",
    });
    setEditingIndex(null);
    setIsPopupOpen(false);
  };

  const handleEdit = (index) => {
    setNewEntry(data[index]); // Pre-fill form with selected row's data
    setEditingIndex(index);
    setIsPopupOpen(true);
    setDropdownIndex(null); // Close dropdown
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setDropdownIndex(null); // Close dropdown
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setNewEntry({
      place: "",
      imNo: "",
      bags: "",
      weight: "",
      nb: "",
      onb: "",
      ss: "",
      swp: "",
      lorryNumber: "",
    });
    setEditingIndex(null);
    setIsPopupOpen(false);
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown for the row
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rice Data Entry Table</h1>
      <table className="table-auto border-collapse border border-gray-400 w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            {[
              "Date",
              "Place",
              "IM No",
              "Bags",
              "Weight",
              "NB",
              "ONB",
              "SS",
              "SWP",
              "Lorry No",
              "Actions",
            ].map((header) => (
              <th key={header} className="border border-gray-400 p-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-400 p-2">{row.date}</td>
              <td className="border border-gray-400 p-2">{row.place}</td>
              <td className="border border-gray-400 p-2">{row.imNo}</td>
              <td className="border border-gray-400 p-2">{row.bags}</td>
              <td className="border border-gray-400 p-2">{row.weight}</td>
              <td className="border border-gray-400 p-2">{row.nb}</td>
              <td className="border border-gray-400 p-2">{row.onb}</td>
              <td className="border border-gray-400 p-2">{row.ss}</td>
              <td className="border border-gray-400 p-2">{row.swp}</td>
              <td className="border border-gray-400 p-2">{row.lorryNumber}</td>
              <td className="border border-gray-400 p-2 relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                >
                  ...
                </button>
                {dropdownIndex === index && (
                  <div className="absolute bg-white shadow-lg border border-gray-300 rounded mt-2 right-0 z-10">
                    <button
                      onClick={() => handleEdit(index)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full text-left"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={openPopup}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Entry
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit Entry" : "Add New Entry"}
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.keys(newEntry).map((field, index) => (
                <input
                  key={index}
                  type="text"
                  name={field}
                  value={newEntry[field]}
                  onChange={handleChange}
                  placeholder={field}
                  className="border border-gray-400 p-2 rounded w-full"
                />
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={closePopup}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrEditEntry}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {editingIndex !== null ? "Save Changes" : "Save Entry"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataEntryTablerice;
