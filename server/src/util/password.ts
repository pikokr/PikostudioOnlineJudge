import crypto from 'crypto'

export function generate(password: string, salt: string): string {
  return crypto
    .createHash('md5')
    .update(password + salt)
    .digest('base64')
    .toString()
}
