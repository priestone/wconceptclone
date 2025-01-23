import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: gray;
`;

const Con = styled.div`
  /* width: 385px; */
  /* height: 512px; */
  border-radius: 22px;
  background-color: salmon;

  img {
    width: 100%;
  }
`;

const parms = {
  spaceBetween: 1,
  slidesPerView: 5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.3,
    },
  },
};

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
];

const Banner = () => {
  return (
    <Container>
      <Swiper
        {...parms}
        // navigation
        // slidesPerView={5}
        // centeredSlides={true}
        // spaceBetween={10}
      >
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
