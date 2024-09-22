import product1 from "../assets/images/products/product-1.png";
import product2 from "../assets/images/products/product-2.png";
import product3 from "../assets/images/products/product-3.png";
import product4 from "../assets/images/products/product-4.png";
import product5 from "../assets/images/products/product-5.png";
import product6 from "../assets/images/products/product-6.png";
import product7 from "../assets/images/products/product-7.png";
import { Product } from "../types/product";

export const MOCK_DATA: Product[] = [
  {
    id: "1",
    title: "22일 삼성 vs 키움 3루테이블석 2자리 정가양도",
    imageUrl: product1,
    price: 80000,
    address: "대구 수성구 연호동",
    chatCount: 15,
    likeCount: 80,
  },
  {
    id: "2",
    title: "삼성 라이온즈 22일 오늘 경기",
    imageUrl: product2,
    price: 32000,
    address: "대구 수성구 연호동",
    chatCount: 4,
    likeCount: 88,
  },
  {
    id: "3",
    title: "22일 삼성 라이온즈 키움 4연석",
    imageUrl: product3,
    price: 30000,
    address: "대구 수성구 연호동",
    chatCount: 1,
    likeCount: 33,
  },
  {
    id: "4",
    title: "스팸 선물세트",
    imageUrl: product4,
    price: 32000,
    address: "서울시 은평구",
    chatCount: 3,
    likeCount: 22,
  },
  {
    id: "5",
    title: "금일 삼성vs키움",
    imageUrl: product5,
    price: 33000,
    address: "대구 수성구 범어 1동",
    chatCount: 3,
    likeCount: 22,
  },
  {
    id: "6",
    title: "BOSE 오디오",
    imageUrl: product6,
    price: 300000,
    address: "서울 강남구 도곡1동",
    chatCount: 3,
    likeCount: 44,
  },
  {
    id: "7",
    title: "Sample Data",
    imageUrl: product7,
    price: 300300,
    address: "서울 강남구 도곡5동",
    chatCount: 4,
    likeCount: 544,
  },
];
