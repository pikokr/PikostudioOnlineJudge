import { IFieldResolver } from 'graphql-tools'

export default ((source, {id, description}) => {
  return false
}) as IFieldResolver<any, any>