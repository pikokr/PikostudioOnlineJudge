import { IFieldResolver } from 'graphql-tools'
import { ApolloError } from 'apollo-server'
import Problem from '../../../models/Problem'

export default (async (source, { id, description, examples, testCases }) => {
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
  return false
}) as IFieldResolver<any, any>
