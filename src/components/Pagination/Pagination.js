import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

export default () => (
  <Pagination>
    <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
    <PaginationItem active>
      <PaginationLink tag="button">1</PaginationLink>
    </PaginationItem>
    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
  </Pagination>
);
