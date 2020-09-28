import React, { useState } from "react"
import useFetchJob from "./useFetchJob"
import { Container } from "react-bootstrap"
import Job from "./Job"
function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const { jobs, loading, error } = useFetchJob(params, page)
  return (
    <Container className="my-4">
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error, Try refreshing</h1>}
      <>
        <h1>GitHub Jons</h1>
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />
        })}
      </>
    </Container>
  )
}

export default App
