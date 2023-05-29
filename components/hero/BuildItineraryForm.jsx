import Router from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { requestItinerarySuggestion, getItinerarySuggestion } from "../../apiRequest/suggestion";


const MainFilterSearchBox = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSetForm = (key = "", value = "") => {
    let tempForm = { ...formData };

    if(key == "days" && value > 10) value = 10;
    tempForm[key] = value;
    setFormData(tempForm);
  }

  const handleSubmitRequestItinerary = async () => {
      setIsLoading(true);

      const place = formData["city"];
      const days = formData["days"];

      const data = await requestItinerarySuggestion(place, days);

      if(data.status == "ACCEPTED" && days > 0){
          window.location.replace(`/itinerary/${place}/${data.request_id}`);
          // setIsLoading(false);
      }
  }

  return (
    <>
      <div
        className="mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-35"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="button-grid items-center">
          {/* <LocationSearch /> */}
          {/* End Location */}

          {/* <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4>
              <DateSearch />
            </div>
          </div> */}
          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Location (City / Country / Province)
              </h4>
              <input
                autoComplete="off"
                type="search"
                placeholder="Where are you going?"
                className="js-search js-dd-focus"
                value={formData["city"]}
                onChange={(e) => handleSetForm("city", e.target.value)}
            />
            </div>
          </div>
          
          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Days
              </h4>
              <input
                autoComplete="off"
                type="search"
                placeholder="How many days?"
                className="js-search js-dd-focus"
                value={formData["days"]}
                onChange={(e) => handleSetForm("days", e.target.value.replace(/\D/g, ''))}
                // value={searchValue}
                // onChange={(e) => setSearchValue(e.target.value)}
            />
            </div>
          </div>
          {/* End check-in-out */}

          {/* <GuestSearch /> */}
          {/* End guest */}

          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
              onClick={handleSubmitRequestItinerary}
              disabled={isLoading}  
            >
              {!isLoading && <i className="icon-search text-20 mr-10" />}
              {isLoading && <FontAwesomeIcon icon={faSpinner} spin className="text-20 mr-10" />}
              Plan Itinerary by AI
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
