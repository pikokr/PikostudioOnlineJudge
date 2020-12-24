import React from 'react'
import { gql, useQuery } from '@apollo/client'
import _ from 'lodash'
import Pagination from '@material-ui/lab/Pagination'
import { Container, Spinner, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Problems = ({
  match: {
    params: { page = 1 },
  },
  history,
}: any) => {
  if (isNaN(Number(page))) {
    return <div>페이지가 잘못되었습니다.</div>
  }
  const { loading, data } = useQuery(gql`
    query {
      problems {
        id
        title
      }
    }
  `)

  let problems
  let chunk

  if (data) {
    chunk = _.chunk(data.problems, 10)
    problems = chunk[page - 1] || []
  }

  return (
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div>
          {problems && chunk && problems && (
            <Container style={{ paddingTop: 20 }}>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>제목</th>
                  </tr>
                </thead>
                <tbody>
                  {problems.map((it: any, key: number) => (
                    <tr key={key}>
                      <td>
                        <Link to={`/problem/${it.id}`}>{it.id}</Link>
                      </td>
                      <td>
                        <Link to={`/problem/${it.id}`}>{it.title}</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination
                onChange={(event, page1) => history.push(`/problems/${page1}`)}
                count={chunk.length}
              />
            </Container>
          )}
        </div>
      )}
    </div>
  )
}

export default Problems
