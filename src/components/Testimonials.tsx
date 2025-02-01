import Section_heading from './Section_heading';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'
import './style.css';

// import "swiper/components/effectCoverflow/effectCoverflow.min.css";

import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { useTheme } from '@/context/Theme_provider';

const Testimonials = () => {

    return (
        <div className="lg:py-2">
            {/* Heading */}
            <Section_heading heading="testimonials" />

            {/*Testimonial Cards */}
            <Cards />
        </div>
    )
}

export default Testimonials

export const Cards = () => {

    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            direction={'horizontal'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 130,
                modifier: 1,
                slideShadows: false,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            watchSlidesProgress={true}
            navigation={true}
            loop={true}
            modules={[Autoplay, EffectCoverflow, Navigation]}
            className="mySwiper z-0"
        >
            <SwiperSlide className='!h-[26.5rem] !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3 h-full'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>

                    {/* Max Limit 40 Words */}
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 h-full flex items-center'>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ipsa sequi assumenda temporibus cum error saepe mollitia itaque ex delectus.</span>
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!h-fit !w-80 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                <div className='testimonial_card rounded-lg p-4 flex flex-col gap-3'>
                    <div className='w-fit place-self-end'>
                        <img src={isDark ? "quote_dark.png" : "quote_light.png"} alt="" className='size-12 object-contain opacity-45' />
                    </div>
                    <div className='text-[14.3px] leading-relaxed dark:text-zinc-300 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo minus eligendi aliquam est, dolore officia provident beatae possimus consequuntur enim nisi distinctio labore neque ducimus autem alias, a quam cupiditate nam iusto odio incidunt dolores magni? Vel, esse. Sint reprehenderit, facere sapiente dolor eligendi doloremque incidunt tenetur labore vitae cum? Corrupti quidem nemo perferendis, fugit eos delectus beatae vero.
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className='w-fit shrink-0'>
                            <img
                                src='aadesh_gupta.png'
                                className='size-11 rounded-full aspect-square object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            {/* Name */}
                            <div className='text-sm'>
                                Dr. Aadesh Gupta
                            </div>

                            {/* Designation and Affiliation */}
                            <div className='text-xs text-zinc-700 dark:text-zinc-300'>
                                Assistant Professor of Computer Science, Massachusetts Institute of Technology (MIT)
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}