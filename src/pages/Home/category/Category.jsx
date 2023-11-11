import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../../assets/slide1.jpg"
import img2 from "../../../assets/slide2.jpg"
import img3 from "../../../assets/slide3.jpg"
import img4 from "../../../assets/slide4.jpg"
import img5 from "../../../assets/slide5.jpg"
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subheading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img className='w-full ' src={img1} alt="" />
                    <p className='text-center text-3xl font-medium text-white -mt-16 mb-5'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img2} alt="" />
                    <p className='text-center text-3xl font-medium text-white -mt-16'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img3} alt="" />
                    <p className='text-center text-3xl font-medium text-white -mt-16'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img4} alt="" />
                    <p className='text-center text-3xl font-medium text-white -mt-16'>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img5} alt="" />
                    <p className='text-center text-3xl font-medium text-white -mt-16'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;