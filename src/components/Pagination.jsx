import React from "react";
import {
  Button,ButtonGroup,Select
} from '@chakra-ui/react'
const Pagination = ({page,setPage,limit,setLimit,total}) => {
  // TODO: Remove below const and instead import them from chakra
 

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" disabled={page<=1} onClick={()=>setPage(page-1)}>Previos</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3" value={"3"}>3</option>
        <option data-cy="pagination-limit-6" value={"6"}>6</option>
        <option data-cy="pagination-limit-9" value={"9"}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={total<=page*limit}onClick={()=>setPage(page+1)}>next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>setPage(Math.floor(total/limit))} >last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
