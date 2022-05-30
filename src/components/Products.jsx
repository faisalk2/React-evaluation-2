import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product"
import Pagination from "./Pagination"
import style from "./products.module.css";

import {
  Flex,Grid
} from '@chakra-ui/react'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [productData,setProductData]=React.useState([]);
  const [page,setPage]=React.useState(1);
  const [limit,setLimit]=React.useState(3);
  const [total,setTotal]=React.useState(0);


  return (
    <Flex className={style.box}>
    <AddProduct productData={productData} setProductData={setProductData}  page={page}  limit={limit} total={total} setTotal={setTotal}/>
    <Grid className={style.grid}>{productData.map(data=>(<Product key={data.id} data1={data} />))} </Grid>
      <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit} total={total} />
    </Flex>
  );
};

export default Products;
