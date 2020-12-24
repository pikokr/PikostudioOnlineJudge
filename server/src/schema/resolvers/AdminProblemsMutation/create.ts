import { IFieldResolver } from 'graphql-tools'
import { ApolloError } from 'apollo-server'
import Problem from '../../../models/Problem'

export default (async (source, { id, description, examples, testCases, title }) => {
  if (examples.find((r: any[]) => r.length !== 2))
    throw new ApolloError('examples 인자값이 잘못되었습니다', 'ERR_INVALID_ARG')
  if (testCases.find((r: any[]) => r.length !== 2))
    throw new ApolloError(
      'testCases 인자값이 잘못되었습니다',
      'ERR_INVALID_ARG',
    )
  if (await Problem.findOne({ id }))
    throw new ApolloError(
      '문제가 이미 존재합니다',
      'ERR_PROBLEM_ALREADY_EXISTS',
    )

  examples = examples.map((it: any) => (
    {
      input: it[0],
      output: it[1]
    }
  ))

  testCases = testCases.map((it: any) => (
    {
      input: it[0],
      output: it[1]
    }
  ))

  const problem = new Problem({id, description, examples, testCases, title})

  await problem.save()

  return true
}) as IFieldResolver<any, any>
