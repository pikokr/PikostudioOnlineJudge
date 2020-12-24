import { IFieldResolver } from 'graphql-tools'
import Problem from '../../../models/Problem'

export default (async (source, {search}) => {
  let problems = await Problem.find()
  if (search) {
    problems = problems.filter(r => r.id === search || r.description.includes(search) || r.title.includes('search'))
  }
  return problems
}) as IFieldResolver<any, any>
