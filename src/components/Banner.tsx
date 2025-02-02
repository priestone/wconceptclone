import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import "swiper/css/autoplay";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: gray;

  .swiper-slide {
    /* width: 18%; */
    height: 512px;
  }

  .swiper-slide-active div {
    width: 100%;
    height: 600px;
    /* transform: scale(1.3);  */
    transition: transform 0.3s;
  }
`;

const Con = styled.div`
  /* width: 385px; */
  height: 600px;
  border-radius: 22px;
  background-color: salmon;
  /* overflow: hidden; */

  img {
    width: 130%;
  }
`;

interface BannerImg {
  id: number;
  imgURL: string;
}

export const bannerImages: BannerImg[] = [
  {
    id: 0,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250121151945269_3455.jpg?RS=900",
  },
  {
    id: 1,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250121151916323_7022.jpg?RS=900",
  },
  {
    id: 2,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250121163230743_7845.jpg?RS=900",
  },
  {
    id: 3,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250120105250116_1173.jpg?RS=900",
  },
  {
    id: 4,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250121151633132_8895.jpg?RS=900",
  },
  {
    id: 5,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250121151945269_3455.jpg?RS=900",
  },
  {
    id: 6,
    imgURL:
      "https://wimage.wconcept.co.kr/msa/display/20250121151633132_8895.jpg?RS=900",
  },
];

const Banner = () => {
  const parms = {
    spaceBetween: 10,
    slidesPerView: 5,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,

    // 자동 재생
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // 슬라이드 전환 속도 (ms)
    speed: 600,

    // 드래그(터치) 민감도 (작을수록 천천히 따라옴)
    touchRatio: 0.2,

    // 긴 스와이프를 통한 여러 장 넘기기 방지
    longSwipes: false,

    breakpoints: {
      1024: {
        // spaceBetween: 20,
        slidesPerView: 5,
      },
      640: {
        spaceBetween: 15,
        // slidesPerView: 4.5,
      },
      320: {
        spaceBetween: 10,
        // slidesPerView: 3.3,
      },
    },
  };

  return (
    <Container>
      <Swiper {...parms}>
        {bannerImages.map((img) => (
          <SwiperSlide key={img.id}>
            <Con className="bannerSlide">
              <img src={`${img.imgURL}`} alt={`배너이미지${img.id}`} />
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banner;
