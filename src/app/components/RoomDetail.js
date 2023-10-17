import React, { Component } from "react";

const Select = ({ selectedValue, options, onDataChange }) => (
  <select
    onChange={({ target: { value } }) => onDataChange(value)}
    value={selectedValue}
  >
    {options.map((option) => (
      <option value={option.value} key={option.name}>
        {option.name}
      </option>
    ))}
  </select>
);

// function range(start, end) {
//     return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
// }

// const occupants = range(1, 4).map (occupants => ({name: occupants, value: occupants}));

const occupantOptions = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
];

const roomTypeOptions = [
  { name: "Standard", value: "Standard" },
  { name: "Delux", value: "Delux" },
];

const RoomDetail = (props) => {
  const { roomType, occupants, onRoomTypeChange, onOccupantsChange } = props;
  return (
    <div>
      <h2>Room Details</h2>

      <label>Room Type</label>
      <Select
        selectedValue={roomType}
        options={roomTypeOptions}
        onDataChange={onRoomTypeChange}
      />

      <label>Occupants</label>
      <Select
        selectedValue={occupants}
        options={occupantOptions}
        onDataChange={onOccupantsChange}
      />
    </div>
  );
};

export default RoomDetail;
