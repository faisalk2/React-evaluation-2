import React from "react";
import axios from "axios";
import {
  Button,Modal,ModalBody,Input,Select,RadioGroup,Radio
} from '@chakra-ui/react'
import { useEffect } from "react";
const AddProduct = ( {productData,setProductData,page,limit,total,setTotal}) => {
  // axios.post("http://localhost:8080/products",
  // {
  //   title: form.title,
  //     category: form.category,
  //     gender: form.gender,
  //     imageSrc: "https://picsum.photos/seed/picsum4/422/262",
  //     price: form.price
  // }).then((result)=>setProductData([...productData,result]))


  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((result) => {
      console.log(result.data);
      setTotal(Number(result.headers["x-total-count"]))
      setProductData(result.data);
    });
  },[page,limit])

  




  return (
    <>
      <Button my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" name="title" type={"text"}  value={"12332"}  placeholder="Enter Title"/>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">T-shirt</option>
            <option data-cy="add-product-category-pant">jeans</option>
            <option data-cy="add-product-category-jeans">pants</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
