import { useNavigate } from "react-router-dom";

import ProductForm from "./ProductForm";
import useCustomAxios from "../../../../services/useCustomAxios";

const ProductRegist = () => {
  const navigate = useNavigate();
  const axiosInstance = useCustomAxios();

  const initialProduct: ProductItemType = {
    name: "",
    content: "",
    price: 0,
    mainImages: [],
    extra: {
      startDate: "",
      endDate: "",
      address: "",
      lat: "",
      lng: "",
    },
  };

  const handleSubmit = async (
    data: ProductItemType,
    mainImages: string[] | undefined
  ) => {
    // 2. 바이너리양식 이미지 추출해서 최종 Post 보내기
    const sendAllData = {
      name: data.name,
      content: data.content,
      shippingFees: 0,
      price: Number(data.price),
      mainImages: mainImages,
      show: true, // 기본값
      active: true, // 기본값
      quantity: 1, // 기본값
      buyQuantity: 0, // 기본값
      extra: {
        startDate: data.extra?.startDate,
        endDate: data.extra?.endDate,
        address: data.extra?.address,
        lat: data.extra?.lat,
        lng: data.extra?.lng,
      },
    };

    const response = await axiosInstance.post(`/seller/products`, sendAllData);

    console.log(response.data);
    navigate("/home");
  };

  return <ProductForm onSubmit={handleSubmit} product={initialProduct} />;
};

export default ProductRegist;
