import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import slide1 from '../assets/slide/slide-1.png'
import slide2 from '../assets/slide/slide-2.png'
import slide3 from '../assets/slide/slide-3.png'
import slide4 from '../assets/slide/slide-4.png'

const slides = [
  {
    id: 1,
    title: 'Nouvelles arrivées',
    subtitle: 'Pièces sélectionnées pour chaque occasion',
    img: slide1,
  },
  {
    id: 2,
    title: 'Élégance intemporelle',
    subtitle: 'Qualité boutique, conçue avec soin',
    img: slide2,
  },
  {
    id: 3,
    title: 'Accessoires choisis avec soin',
    subtitle: 'Complétez votre look avec la touche finale',
    img: slide3,
  },
  {
    id: 4,
    title: 'Incontournables de la boutique',
    subtitle: 'Nouveaux styles ajoutés chaque semaine',
    img: slide4,
  },
]

export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={700}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="h-[60vh] sm:h-[70vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative w-full h-full">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-white max-w-3xl">
                  <h1 className="heading-serif text-4xl sm:text-5xl font-semibold mb-3">{s.title}</h1>
                  <p className="text-lg sm:text-xl opacity-95 mb-6">{s.subtitle}</p>
                  <a href="#featured" className="inline-block bg-white text-slate-900 px-5 py-2 rounded-md hover:bg-rose-50 border border-white/30 transition">Découvrir</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
