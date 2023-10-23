import { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {

  const [number, setNumber] = useState("");
  const [status, setStatus] = useState(4);

  const spaceHandler = (e) => {
    if (e.key === ' ') e.preventDefault();
  }
  const getValidation = async () => {
    setStatus(3);
    const res = await axios.post('http://localhost:5000', {
      number
    });
    if (res.data) {
      setStatus(1);
    } else {
      setStatus(0);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container my-3">
        <h4 className="text-secondary my-5">Validate Credit Card </h4>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter credit card Number</label>
          <input type="text" onKeyDown={spaceHandler} className="form-control" onChange={(e) => { setNumber(e.target.value) }}
            onKeyUp={(e) => { if (e.key === "Enter") getValidation() }}
          />
        </div>
        <button type="submit" className="btn btn-dark my-4" onClick={getValidation}>Validate Card</button>

        <div className="mt-5">
          {status === 1 ? (
            <div className="alert alert-success" role="alert">
              The card number you entered is valid !
            </div>) : status === 0 ? (<div className="alert alert-danger" role="alert">
              This card number is invalid !
            </div>) : status === 3 ? (<div className="spinner-border text-info " role="status">
              <span className="sr-only">Loading...</span>
            </div>)
            : <p>Enter your card number above and validate with Nuhn Algo</p>
          }
        </div>

      </div>
    </>
  );
}

export default App;
