import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[1]} className="smallimg" />
      </div>
      <div className="col-md-7" style={{ float: "right" }}>
        <b>
          <p>
            <h1>{room.name}</h1>
            <p>Max Count : {room.maxcount}</p>
            <p>Phone Number :{room.phonenumber}</p>
            <p>type:{room.type}</p>
          </p>
        </b>
        <div style={{ float: "right" }}>
          <Button className="btn btn-primary" onClick={handleShow}>
            View Details
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='' nextLabel=''>
             {room.imageurls.map(url=>{
                 return <Carousel.Item>
                 <img
                   className="d-block w-100 bigimg"
                   src={url}
                 />
                 
               </Carousel.Item>
             })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
