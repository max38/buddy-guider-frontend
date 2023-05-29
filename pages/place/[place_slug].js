import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback, Fragment } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import "photoswipe/dist/photoswipe.css";

import Lottie from "react-lottie";
import Seo from "../../components/common/Seo";
import Header from "../../components/header";
import Overview from "../../components/place/Overview";
// import TourSnapShot from "../../components/place/TourSnapShot";
import TopBreadCrumb from "../../components/place/TopBreadCrumb";
import Footer from "../../components/footer";
import SlideGallery from "../../components/place/SlideGallery";
import SidebarRight from "../../components/place/sidebar";
import MapFinder from "../../components/map/MapFinder";

import { getPlaceInformation } from "../../apiRequest/place";
import animationData from "../../assets/lotties/passport.json";


const PlaceInformationPage = () => {
    const router = useRouter();
    const [placeInformation, setPlaceInformation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { suggestionRequestId, suggestionRequestPlace, suggestionRequestDays } = useSelector(state => state.suggestion);
    const place_slug = router.query.place_slug;

    const getInformation = useCallback(async () => {
        const data = await getPlaceInformation(place_slug);
        setPlaceInformation(data);
    });

    useEffect(() => {
        if(!isLoading && place_slug){
            setIsLoading(true);
            getInformation();
        }
    }, [place_slug]);

    const renderLoading = () => {
        return <Fragment>
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
    };

    const renderContent = () => {
        return <Fragment>
            <TopBreadCrumb placeInformation={placeInformation}/>
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <SlideGallery images={placeInformation?.photos} />
        </div>
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{placeInformation?.name}</h1>
                  <div className="row x-gap-10 y-gap-20 items-center pt-10">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <i className="icon-star text-10 text-yellow-1"></i>

                        <div className="text-14 text-light-1 ml-10">
                          <span className="text-15 fw-500 text-dark-1">
                            {placeInformation?.rating}
                          </span>
                          {/* {activity?.numberOffReviews} reviews */}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-auto">
                      <div className="row x-gap-10 items-center">
                        <div className="col-auto">
                          <div className="d-flex x-gap-5 items-center">
                            <i className="icon-location-2 text-16 text-light-1"></i>
                            <div className="text-15 text-light-1">
                              {placeInformation?.province}, {placeInformation?.country_name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                {/* <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1">
                        <i className="icon-share mr-10"></i>
                        Share
                      </button>
                    </div>

                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 bg-light-2">
                        <i className="icon-heart mr-10"></i>
                        Save
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* End .col */}
              </div>
              {/* End .row */}

              {/* <h3 className="text-22 fw-500 mt-40">Tour snapshot</h3> */}
              {/* <TourSnapShot /> */}
              {/* End toursnapshot */}

              <Overview information={placeInformation} />
              {/* End  Overview */}

                <div className="border-top-light mt-40 mb-40">
                    <h3 className="text-22 fw-500 mb-20">Activity&apos;s Location</h3>
                    <div className=" rounded-4 overflow-hidden map-500">
                        <MapFinder 
                            center={{lat: placeInformation.location_lat, lng: placeInformation.location_long}} 
                            markers={[
                                {
                                    lat: placeInformation.location_lat, 
                                    lng: placeInformation.location_long,
                                    popover: {
                                        content: placeInformation.name,
                                    }
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
                <SidebarRight activity={placeInformation} />
              {/* <SidebarRight activity={activity} /> */}
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      </Fragment>
    }

  return (
    <>
      <Seo pageTitle="Activity Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

        {!placeInformation && renderLoading()}
        {placeInformation && renderContent()}

      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(PlaceInformationPage), {
  ssr: false,
});
