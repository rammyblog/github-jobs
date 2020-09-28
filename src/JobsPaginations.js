import React from "react"
import { Pagination } from "react-bootstrap"

function JobsPaginations({ page, setPage }) {
  return (
    <Pagination>
      {" "}
      <Pagination.Prev></Pagination.Prev>{" "}
    </Pagination>
  )
}

export default JobsPaginations
