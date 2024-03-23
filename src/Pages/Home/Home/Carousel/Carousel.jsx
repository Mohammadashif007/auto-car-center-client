import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner1 from "../../../../assets/images/banner/b1.jpg";
import banner2 from "../../../../assets/images/banner/b1.webp";
import banner3 from "../../../../assets/images/banner/b2.webp";

const Carousel = () => {
    return (
        <div className="mb-10">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        width="100%"
                        src={banner1}
                        className="h-[500px] rounded"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        width="100%"
                        src={banner2}
                        className="h-[500px] rounded"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        width="100%"
                        src={banner3}
                        className="h-[500px] rounded"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
