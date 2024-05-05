"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function AddProduct() {
  const [previes, setPreview] = useState("");
  const onImageChange = () => {};

  return (
    <div>
      <form className="flex flex-col gap-5 p-5">
        <label
          htmlFor="photo"
          className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-neutral-300 text-neutral-300"
        >
          <PhotoIcon className="w-20" />
          <div className="text-neutral-400">사진을 추가해주세요.</div>
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          className="hidden"
        />
        <FormInput name="title" required placeholder="제목" type="text" />
        <FormInput name="price" required placeholder="가격" type="number" />
        <FormInput
          name="description"
          required
          placeholder="자세한 설명"
          type="text"
        />
        <FormButton text="등록하기" />
      </form>
    </div>
  );
}
