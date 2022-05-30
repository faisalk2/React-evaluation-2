import React from "react";
import style from "./product.module.css";
import {
  Text,Image,Box,Stack,Heading,Tag,TagLabel
} from '@chakra-ui/react'
const Product = ({data1}) => {
  // TODO: Remove below const and instead import them from chakra
  console.log(data1);
  return (
    <Stack data-cy="product" className={style.box}>
      <Image data-cy="product-image" src={data1.imageSrc} className={style.img}/>
      <Text data-cy="product-category">{data1.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{data1.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{data1.title}</Heading>
      <Box data-cy="product-price">{data1.price}</Box>
    </Stack>
  );
};

export default Product;
