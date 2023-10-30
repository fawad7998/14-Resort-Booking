import "./App.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
function Resort() {
  const [register, setRegister] = useState([]);

  // Fun

  const handle = (e) => {
    e.preventDefault();

    let contact = {
      name,
      num,
      email,
      dulex,
      number
    };

    setRegister([...register, contact]);
    console.log(contact);
  };

  const [num, setNum] = useState("");
  const [number, setnumber] = useState("");
  const [dulex, setdulex] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const deletee = (i) => {
    setRegister(
      register?.filter((e) => {
        return e !== i;
      })
    );
  };

  return (
    <>
      <div className="bg-gray-50">
        <h1 className="text-center text-xl font-normal pt-4">
          Resort Booking
        </h1>
        <div className="flex justify-between p-20">
          <div className="bg-gray-200 w-[34%] h-[90vh] rounded-md flex flex-col items-center justify-center">
            <h1 className="text-center pt-2 text-xl font-bold">
              Enter Your Info Below
            </h1>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="text"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="   "
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="date"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Select Nights"
                name="SelectWeeks"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="email"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="num"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Dulex"
                onChange={(e) => {
                  setdulex(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="num"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Enter PhoneNumber    "
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handle}
              className="bg-gray-700 text-white  py-2 px-3 rounded-md font-semibold mt-6 active:shadow-xl active:translate-y-0.5"
            >
              Book now
            </button>
          </div>
          <div className="bg-gray-300  w-[50%] h-[50vh] overflow-y-scroll ">
            {register.length > 0 ? (
              register.map((i) => {
                return (
                  <>
                    <div className="flex space-x-6 py-8 justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Name</h1>
                      <hr />

                        {i.name}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Weeks</h1>
                      <hr />

                        {i.num}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Email</h1>
                      <hr />
                        {i.email}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Dulex</h1>
                      <hr />
                        {i.dulex}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Phonenum</h1>
                      <hr />
                        {i.number}
                      </div>
                      <button
                        onClick={() => {
                          deletee(i);
                        }}
                        className="bg-red-400 text-white px-3 rounded-md"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="text-xl font-semibold">
                <h1 className="text-center my-36">No bookings yet</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resort;
