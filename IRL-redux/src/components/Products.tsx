import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteElement } from "../store/reducer/ProductReducer";

export default function Products() {
  const { products } = useSelector((state: any) => state.productReducer);
  const dispatch = useDispatch();

  const deleteHandler = (id: any) => {
    dispatch(deleteElement(id));
  };

  return (
    <div>
      <div className=" max-w-screen-xl m-auto  bg-red-200 p-6">
        <div className=" text-red-800 text-lg font-bold">Usernames</div>
        <ul>
          {products.map((item: any, index: number) => {
            return (
              <li className=" text-sm font-bold to-red-400" key={index}>
                {" "}
                {item.title}
                <span
                  onClick={() => deleteHandler(item.id)}
                  className=" text-red-600 font-bold text-xl cursor-pointer"
                >
                  x
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
