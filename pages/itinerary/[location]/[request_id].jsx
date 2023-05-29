import React from "react";
import { Fragment, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Lottie from "react-lottie";
import Image from "next/image";
import Link from "next/link";
import Seo from "../../../components/common/Seo";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ItineraryActivities from "../../../components/itinerary";
// import Banner from "../../../components/destinations/components/Banner";
// import LocationTopBar from "../../../components/common/LocationTopBar";
// import Sidebar from "../../../components/itinerary/sidebar";
import MapFinder from "../../../components/map/MapFinder";

import { getItinerarySuggestion } from "../../../apiRequest/suggestion";
import { setSuggestionRequestInfo } from "../../../features/suggestionSlice";

import animationData from "../../../assets/lotties/passport.json";
import animationDataFail from "../../../assets/lotties/fail.json";


const Itinerary = () => {
  const router = useRouter();
  const request_id = router.query.request_id;
  const location = router.query.location;
  const [isLoading, setIsLoading] = useState(false);
  const [itinerarySuggestion, setItinerarySuggestion] = useState(null);
  const [dailySuggestion, setDailySuggestion] = useState(null);
  const [activites, setActivites] = useState([]); 
  const [seconds, setSeconds] = useState((new Date()).getSeconds());
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();

  const getSuggestion = useCallback(async () => {
    if(request_id){
      setIsLoading(true);
      const data = await getItinerarySuggestion(request_id);

      let activitesSuggestions = [];
      setItinerarySuggestion(data);

      if(data.result){
        setDailySuggestion(data.result.daily_suggests);
        dispatch(setSuggestionRequestInfo(data));

        Object.values(data.result.daily_suggests).map((item, index) => {
          activitesSuggestions.push(...item.activites);
        });
      }
    }
  });

  function GetTime() {
    setSeconds((new Date()).getSeconds());
    if(itinerarySuggestion && itinerarySuggestion.status == 'ERROR'){
    }else if(!itinerarySuggestion || (itinerarySuggestion && itinerarySuggestion.status != 'COMPLETED')){
      getSuggestion();
    }
  }

  setTimeout(() => {
      GetTime();
  }, 30000);

  useEffect(() => {
    if(!isLoading){
      getSuggestion();
    }
  }, [request_id])


  const renderResponse = () => {

    if(dailySuggestion && itinerarySuggestion.status == 'COMPLETED'){
      return <Fragment>
        <div className=" row x-gap-10 justify-center js-tabs-controls" >
        <Tabs
          className="tabs -underline-2 js-tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
            {Object.values(dailySuggestion).map((item, index) => (
              <Tab key={index} className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
                Day {item.day}
                </button>
              </Tab>
            ))}
          </TabList>

          <div className="tabs__content pt-30 js-tabs-content">
            {Object.values(dailySuggestion).map((item, index) => (
              <TabPanel
                key={index}
                className={`-tab-item-${index + 1} ${
                  tabIndex === index ? "is-tab-el-active" : ""
                }`}
              >
                <ItineraryActivities activites={item.activites} />
              </TabPanel>
            ))}
          </div>
        </Tabs>
        </div>
      </Fragment>
    }else if(itinerarySuggestion && itinerarySuggestion.status == 'ERROR'){
      return <Fragment>
          <h3 className="text-center">Sorry, we can't find any itinerary for you.<Link className="text-center" href={`/`}>Back to Home</Link></h3>
          
          <Lottie
            options={{
                loop: true,
                autoplay: true,
                animationData: animationDataFail,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }}
            height={400}
            width={400}
          />
        </Fragment>
    }else{  
      return <Fragment>
        <h3 className="text-center">It won't take more than 5 minutes.</h3>
        <Lottie
          options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
              }
          }}
          height={400}
          width={400}
        />
      </Fragment>
    }
  }

  return (
    <>
      <Seo pageTitle="Blog List V2" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />

      <section >
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-12">
              <div className="relative d-flex">
                <img
                  src="/img/pages/about/1.png"
                  alt="image"
                  className="col-12 rounded-4"
                />
                { itinerarySuggestion ? <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
                  <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
                    {itinerarySuggestion.requested_place} {itinerarySuggestion.requested_days} Days Trip Itinerary
                  </h1>
                  <div className="text-white">
                    Explore travel guides and things to do in {itinerarySuggestion.requested_place}
                  </div>
                </div> : <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
                  <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
                    {location} Trip Itinerary
                  </h1>
                  <div className="text-white">
                    Explore travel guides and things to do in {location}
                  </div>
                </div> }
                {/* <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
                  <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-500">
                    See All 90 Photos
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MapFinder /> */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-9">
              {renderResponse()}
            </div>

            {/* <div className="col-xl-3">
              <Sidebar />
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Itinerary;
