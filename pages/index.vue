<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
</script>

<template>
    <section class="home">
        <h1 class="home__title">Home page</h1>
        <h2>Company who can make IT products for everybody</h2>

        <div>
            <h3>Our projects</h3>
            <img src="" alt="">

            <client-only>
                <swiper :slides-per-view="1" navigation pagination>
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                </swiper>
            </client-only>
            
        </div>
        
    </section>
</template>

<style scoped>

    .home {
        background-color: rgba(100, 10, 100, .5);
    }

    .home__title {
        display: flex;
        justify-content: center;
        font-size: 30px !important;
        margin: 0;
    }
</style>
