import chalk from 'chalk'

const origLog = console.log
const origErr = console.error
const origWarn = console.warn
const origInfo = console.info
const origDebug = console.debug

console.log = (message: any, optionalParams: any) =>
  origLog(`${chalk.blue('LOG')}: ${message}`, optionalParams || '')
console.error = (message: any, optionalParams: any) =>
  origErr(`${chalk.red('ERROR')}: ${message}`, optionalParams || '')
console.warn = (message: any, optionalParams: any) =>
  origWarn(`${chalk.yellow('WARN')}: ${message}`, optionalParams || '')
console.info = (message: any, optionalParams: any) =>
  origInfo(`${chalk.cyan('INFO')}: ${message}`, optionalParams || '')
console.debug = (message: any, optionalParams: any) =>
  origDebug(`${chalk.yellow('DEBUG')}: ${message}`, optionalParams || '')
