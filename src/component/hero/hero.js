import pic from "../../images/temp.png";

    

function Hero() {
  return (
    <div className="px-4 pt-5 my-5 text-center">
    
       
    <div className="overflow-hidden" style={{maxHeight: "30vh"}}></div>
        <div className="container px-5  ">
          <img
            src={pic}
            className="img-fluid border rounded-3 shadow-lg bg-primary mb-4 w-25"
            alt="nina's Portrait"
            loading="lazy"
          />
        </div>
       

    
      <div className="col-lg-5 mx-auto  ">
      <h1 className=" fw-bold">Nabila Nabil</h1>
        <p className="lead mb-4">Designer , Developer , Problem Solver</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Primary button
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Secondary
          </button>
        </div>
      </div>


    </div>
  );
}

export default Hero;
