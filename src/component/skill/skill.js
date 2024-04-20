function Skill() {
    return(<div className="container px-4 py-5">

    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="col d-flex flex-column align-items-start gap-2">
        <h2 className="fw-bold text-body-emphasis">
          My Skills
        </h2>
        <p className="text-body-secondary">
         and so much more
        </p>
       
      </div>
      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">
              React
            </h4>
            <p className="text-body-secondary">
             soon i hope
            </p> 
          </div>
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#gear-fill" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">
             ASP.net MVC
            </h4>
            <p className="text-body-secondary">
             gonna add link to my project repo
            </p>
          </div>
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlink="bootstrap-icons.svg#heart-fill"/>
              </svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">
             C#
            </h4>
            <p className="text-body-secondary">
            my sweetheart
            </p>
          </div>
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#table" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">
              Photoshop
            </h4>
            <p className="text-body-secondary">
              always and forever
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Skill;