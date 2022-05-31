import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../Components/Room";

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("/api/rooms/getallrooms")).data;
      setrooms(data);
      setloading(false);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }, []);

  return (
    <div className="container">
      <div className="row-justify-content-center">
        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>):(rooms.map((room) => {
            return <div className="col-md-7 mt-5">

                   <Room room={room}></Room>
            </div>
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
