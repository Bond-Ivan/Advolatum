import { ReactElement } from "react";
import styles from "./Season.module.css";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import swiperSlides from "../../../../mocks/swiperSlides";
import SeasonSwiperSlide from "./SeasonSwiperSlide/SeasonSwiperSlide";

function Season(): ReactElement {
    return (
        <section className={styles.season}>
            <div className={styles.container}>
                <h2 className={styles.title}>на этот сезон</h2>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className={styles.swiper}
                >
                    {swiperSlides.map(({image, text}, index) => {
                        return (
                            <SwiperSlide>
                                <SeasonSwiperSlide key={index} image={image} text={text} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Season;