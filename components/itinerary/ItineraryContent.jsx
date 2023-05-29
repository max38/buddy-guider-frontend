import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Link from "next/link";


const ItineraryContent = (props) => {

  return (
    <>
      {props.activites.map((item, index) => (
        <div className="col-12" key={item.place_slug}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{index + 1}</div>
              </div>

              <div className="ml-20">
                <div
                  className="col-12"
                  key={item?.place_slug}
                  data-aos="fade"
                  data-aos-delay={"100"}
                >
                  <div className="border-top-light pt-30">
                    <div className="row x-gap-20 y-gap-20">
                      <div className="col-md-auto">
                        <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                          <div className="cardImage__content custom_inside-slider">
                            <Swiper
                              className="mySwiper"
                              modules={[Pagination, Navigation]}
                              pagination={{
                                clickable: true,
                              }}
                              navigation={true}
                            >
                              {item?.photos?.map((slide, i) => (
                                <SwiperSlide key={i}>
                                  <Image
                                    width={300}
                                    height={300}
                                    className="rounded-4 col-12 js-lazy"
                                    src={slide}
                                    alt="image"
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                          {/* End .cardImage__content */}

                          <div className="cardImage__wishlist">
                            <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                              <i className="icon-heart text-12" />
                            </button>
                          </div>
                          {/* End .cardImage__wishlist */}
                        </div>
                        {/* End cartImage */}
                      </div>
                      {/* End .col-auto */}
                      <div className="col-md">
                        <p className="text-14 lh-14 mb-5">Suggestion Time: {item.suggest_time_spend}</p>
                        <h3 className="text-18 lh-16 fw-500">
                          {item.activity}
                        </h3>
                        <p className="text-14 lh-14 mt-5">{item?.province}, {item?.country_name}</p>
                        <div className="text-14 lh-15 fw-500 mt-20">
                          {item.description}
                        </div>
                        {item.website && <div className="text-14 fw-500 lh-15 mt-5 pt-10">
                          <span className="text-green-2">Website : </span><a href={item.website} target="_blank">{item.website}</a>
                        </div>}

                        {/* <h5 className="text-18 fw-500 mb-10 pt-10">Activity For</h5>
                        <div className="row x-gap-10 y-gap-10">
                        {item?.trip_types.map((item) => (
                          <div key={item.id} className="col-auto">
                            <Link
                              href={``}
                              className="button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize"
                            >
                              {item}
                            </Link>
                          </div>
                        ))}
                        </div> */}
                        
                        <div className="row x-gap-10 y-gap-10">
                        <Link
                          href={`/place/${item.place_slug}`}
                          className="button -md -dark-1 bg-blue-1 text-white mt-24"
                        >
                          Place Detail <div className="icon-arrow-top-right ml-15" />
                        </Link>
                        </div>
                      </div>
                      {/* End .col-md */}

                      {/* End .col-md-auto */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End border-top */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
