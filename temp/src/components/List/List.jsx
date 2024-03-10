import React from "react";
import "./List.scss";
import ProductCard from "../ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, Sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list">
      {error
          ? "Something went wrong!"
          :loading
        ? "loading"
        : data?.map((item) => <ProductCard item={item} key={item.id} />)}
    </div>
  );
};

export default List;
 