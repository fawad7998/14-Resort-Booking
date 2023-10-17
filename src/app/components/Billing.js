import React, { Component } from "react";

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCharge: 0,
      occupantCharges: 0,
      totalRoomCharges: 0,
      totalOccupantCharges: 0,
      discount: 0,
      grandTotal: 0,
      afterTax: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { roomType, totalDays, occupants } = props;

    const roomCharge = roomType === "Standard" ? 2000 : 4000;
    const occupantCharges = occupants === 1 ? 0 : (occupants - 1) * 200;
    const totalRoomCharges = totalDays * roomCharge;
    const totalOccupantCharges = totalDays * occupantCharges;

    const discount = totalDays >= 5 ? 15 : 0;
    const grandTotal = Math.ceil(
      totalRoomCharges - (totalRoomCharges * discount) / 100.0
    );

    const afterTax = (totalOccupantCharges + grandTotal) * 1.18;

    return {
      roomCharge,
      occupantCharges,
      totalRoomCharges,
      totalOccupantCharges,
      discount,
      grandTotal,
      afterTax,
    };
  }

  render() {
    return (
      <div>
        <h2>Summary</h2>

        <table>
          <tbody>
            <tr>
              <td>Room Charges</td>
              <td>{this.state.roomCharge} USD</td>
            </tr>
            <tr>
              <td>Nights</td>
              <td>{this.props.totalDays} nights</td>
            </tr>

            <tr>
              <td>Total Room Charges</td>
              <td>{this.state.totalRoomCharges} USD</td>
            </tr>

            <tr>
              <td>Discount</td>
              <td>{this.state.discount} %</td>
            </tr>

            <tr>
              <td>Grand Total With Discount</td>
              <td>{this.state.grandTotal} USD </td>
            </tr>

            <tr>
              <td>Total Occupants</td>
              <td>{this.props.occupants}</td>
            </tr>

            <tr>
              <td>Occupant Charges</td>
              <td>{this.state.occupantCharges} USD per day</td>
            </tr>

            <tr>
              <td>Total Occupant Charges</td>
              <td>{this.state.totalOccupantCharges} USD</td>
            </tr>

            <tr>
              <td>After Tax  </td>
              <td>{this.state.afterTax} USD </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Billing;
