import React, { useState } from 'react';

const InputTableApp = () => {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Input Table App</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="input1"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="input1"
              name="input1"
              value={inputs.input1}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div>
            <label
              htmlFor="input2"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="text"
              id="input2"
              name="input2"
              value={inputs.input2}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div>
            <label
              htmlFor="input3"
              className="block text-sm font-medium text-gray-600"
            >
              Address:
            </label>
            <input
              type="text"
              id="input3"
              name="input3"
              value={inputs.input3}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div>
            <label
              htmlFor="input4"
              className="block text-sm font-medium text-gray-600"
            >
              Rooms:
            </label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={inputs.input4}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div>
            <label
              htmlFor="input5"
              className="block text-sm font-medium text-gray-600"
            >
              Location:
            </label>
            <input
              type="text"
              id="input5"
              name="input5"
              value={inputs.input5}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Entered Data</h2>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Rooms</th>
              <th className="border p-2">Locaion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{inputs.input1}</td>
              <td className="border p-2">{inputs.input2}</td>
              <td className="border p-2">{inputs.input3}</td>
              <td className="border p-2">{inputs.input4}</td>
              <td className="border p-2">{inputs.input5}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputTableApp;
