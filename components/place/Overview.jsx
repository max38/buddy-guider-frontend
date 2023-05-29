const Overview = (props) => {
  const information = props.information;

  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-500">Overview</h3>

          <p className="text-dark-1 text-15 mt-20">
            {information?.description}
          </p>

          <div className="border-top-light mt-40 mb-40"></div>

          <span className="d-block text-14 fw-500 mt-10">Address : {information?.address}</span>
          <span className="d-block text-14 fw-500  mt-10">Website : <a
              href={information?.website}
              className="text-blue-1 underline"
            >
              {information?.website}
            </a>
          </span>
          
          <span className="d-block text-14 fw-500 mt-10">Email : {information?.email}</span>
          <span className="d-block text-14 fw-500 mt-10">Phone Number : {information?.phone_number}</span>
        </div>
      </div>
    </>
  );
};

export default Overview;
