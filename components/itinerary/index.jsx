import Content from "./ItineraryContent";
// import MapPropertyFinder from "./MapPropertyFinder";

const index = (props) => {
  return (
    <div className="row y-gap-30">
      <div className="col-lg-12">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <Content activites={props.activites} />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      {/* <div className="col-lg-4">
        <div className="map rounded-4 overflow-hidden">
          <MapPropertyFinder />
        </div>
      </div> */}
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
