import React, { useState } from "react"
import useFetchJob from "./useFetchJob"
import { Container } from "react-bootstrap"
import Job from "./Job"
import JobsPaginations from "./JobsPaginations"
import SearchForm from "./SearchForm"
function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const { jobs, loading, error, hasNextPage } = useFetchJob(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams((prevParams) => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <JobsPaginations
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error, Try refreshing</h1>}
      <>
        <SearchForm params={params} onParamChange={handleParamChange} />
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPaginations
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </>
    </Container>
  )
}

export default App
