import React from 'react'
import { gql, useQuery } from '@apollo/client'

const Problems = ({
  match: {
    params: { page = 1 },
  },
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

  return <div>{page}</div>
}

export default Problems
