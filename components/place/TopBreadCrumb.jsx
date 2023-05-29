import Link from "next/link";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";


const TopBreadCrumb = (props) => {
  const { placeInformation } = props;
  const { suggestionRequestId, suggestionRequestPlace, suggestionRequestDays } = useSelector(state => state.suggestion);

  console.log("suggestionRequestPlace");
  console.log(suggestionRequestPlace);

  return (
    <section className="py-10 d-flex items-center bg-light-2">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              <Link className="col-auto" href={`/`}>Home</Link>

              {(suggestionRequestPlace && suggestionRequestId) && <Fragment>
                <div className="col-auto">&gt;</div>
                <Link className="col-auto" href={`/itinerary/`+suggestionRequestPlace+`/`+suggestionRequestId} >{suggestionRequestPlace} {suggestionRequestDays} Days Itinerary</Link>
              </Fragment>}
              
              {placeInformation?.name && <Fragment>
                <div className="col-auto">&gt;</div>
                <div className="col-auto">
                  <div className="text-dark-1">
                    {placeInformation?.name}
                  </div>
                </div>
              </Fragment>}
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
          {/* End .col-auto */}

          {/* <div className="col-auto">
            <a href="#" className="text-14 text-blue-1 underline">
              All Hotel in London
            </a>
          </div> */}
          {/* End col-auto */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default TopBreadCrumb;
