import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useCont } from "./Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: "0px 0px 3px black",
  p: 4
};

export default function BasicModal() {
  const { open, handleClose } = useCont();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5 className="text-center text-primary">Book This Tour</h5>
          <p className="text-center text-danger">
            Arrange your trip in advance - book this tour now
          </p>
          <form className="form-group">
            <input type="text" placeholder="Name" className="form-control" />
            <input
              type="email"
              placeholder="Email"
              className="form-control mt-1"
            />
            <input
              type="number"
              placeholder="Number"
              className="form-control mt-1"
            />
            <input
              type="number"
              placeholder="No of Persons"
              className="form-control mt-1"
            />
            <input type="date" className="form-control mt-1" />
            <textarea
              name=""
              id=""
              cols="40"
              className="form-control mt-1"
              placeholder="Message"
              rows="3"
            ></textarea>
            <button className="btn btn-danger w-100 mt-1">Book Now</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
