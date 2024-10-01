import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/categories/rice.jpg'
import slider2 from '../../../assets/categories/produce.jpg'
import slider3 from '../../../assets/categories/dairy.jpg'
import slider4 from '../../../assets/categories/spices.jpg'
import slider12 from '../../../assets/categories/baking.jpg'
import slider5 from '../../../assets/categories/personal.jpg'
import slider6 from '../../../assets/categories/bevarages.jpg'
import slider7 from '../../../assets/categories/pasta.jpg'
import slider8 from '../../../assets/categories/baby.jpg'
import slider9 from '../../../assets/categories/cleaners.jpg'
import slider10 from '../../../assets/categories/toiletries.jpg'
import slider11 from '../../../assets/categories/snacks.jpg'

import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='my-16 w-[1200px] mx-auto'>
            <SectionTitle heading={'Complete Shopping'} subHeading={'Fresh, Quality, Convenience'}></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Rice</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl mb-8'>Produce</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Dairy Products</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Spices</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider12} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Baking</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Personal Care</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider6} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Beverage</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider7} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Pasta and Noodles</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider8} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Baby Care</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider11} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Snacks</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider9} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Cleaning Supplies</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider10} className='h-[500px]' alt="" />
                    <h2 className='text-center font-bold text-2xl'>Toiletries</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;