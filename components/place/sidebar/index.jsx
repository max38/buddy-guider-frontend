import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";


const index = () => {
  const { suggestionRequestId, suggestionRequestPlace, suggestionRequestDays } = useSelector(state => state.suggestion);

  return (
    <div className="sidebar -blog">
      <div className="sidebar__item -no-border">
        {/* <h5 className="text-18 fw-500 mb-10">Search</h5> */}
        <Link
          href={`/itinerary/`+suggestionRequestPlace+`/`+suggestionRequestId}
          className="button -md -dark-1 bg-blue-1 text-white mt-24"
        >
          {suggestionRequestPlace} {suggestionRequestDays} Days Itinerary
        </Link>

      </div>
    </div>
  );
};

export default index;
