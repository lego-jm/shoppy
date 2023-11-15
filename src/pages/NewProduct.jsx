import React, { useState } from "react";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [product, setProduct] = useState();
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div className="w-full flex items-center mt-10">
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
            name="title"
            placeholder="제품명"
            onChange={handleChange}
            value={product?.title}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="number"
            name="price"
            placeholder="가격"
            onChange={handleChange}
            value={product?.price}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="category"
            placeholder="카테고리"
            onChange={handleChange}
            value={product?.category}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="description"
            placeholder="제품설명"
            onChange={handleChange}
            value={product?.description}
          />
          <input
            className="w-full border-2 border-black rounded-lg p-2"
            type="text"
            name="option"
            placeholder="옵션(,콤마로 구분)"
            onChange={handleChange}
            value={product?.option}
          />
          <Button text="제품 등록하기" />
        </form>
      </div>
    </>
  );
}
