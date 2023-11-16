import React, { useState } from "react";
import Button from "../components/ui/Button";
import { productImageUpload } from "../api/uploder";

import { Store } from "react-notifications-component";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState();
  const [file, setFile] = useState();
  const { addProductQuery } = useProducts();

  const handleSubmit = (e) => {
    e.preventDefault();

    productImageUpload(file).then((res) => {
      addProductQuery.mutate(
        { ...product, imageUrl: res.url },
        {
          onSuccess: () => {
            Store.addNotification({
              title: "",
              message: "새로운 제품을 업로드 했습니다.",
              type: "success",
              insert: "top-left",
              container: "top-left",
              animationIn: ["animate__animated animate__backInDown"],
              animationOut: ["animate__animated animate__backOutUp"],
              dismiss: {
                duration: 2000,
              },
            });
          },
        }
      );
    });
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <>
      <h3 className="text-center text-xl font-bold my-10">제품 등록하기</h3>
      <div className="w-full flex items-center ">
        <div className="basis-3/6">
          <img
            className="w-3/6 mx-auto"
            src={file && URL.createObjectURL(file)}
            alt="preview_product_img"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-y-3 basis-3/6"
        >
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="file"
            name="file"
            onChange={handleChange}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="company"
            placeholder="판매처"
            onChange={handleChange}
            value={product?.company || ""}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="title"
            placeholder="제품명"
            onChange={handleChange}
            value={product?.title || ""}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="number"
            name="price"
            placeholder="가격"
            onChange={handleChange}
            value={product?.price || ""}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="category"
            placeholder="카테고리"
            onChange={handleChange}
            value={product?.category || ""}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="description"
            placeholder="제품설명"
            onChange={handleChange}
            value={product?.description || ""}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="color"
            placeholder="색상(,콤마로 구분)"
            onChange={handleChange}
            value={product?.color || ""}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="option"
            placeholder="옵션(,콤마로 구분)"
            onChange={handleChange}
            value={product?.option || ""}
          />
          <Button text="제품 등록하기" />
        </form>
      </div>
    </>
  );
}
