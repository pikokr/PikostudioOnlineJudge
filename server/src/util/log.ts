import chalk from 'chalk'

const origLog = console.log
const origErr = console.error
const origWarn = console.warn
const origInfo = console.info
const origDebug = console.debug

console.log = (...message: any[]) =>
  origLog(`${chalk.blue('LOG')}:`, ...message)
console.error = (...message: any[]) =>
  origErr(`${chalk.red('ERROR')}:`, ...message)
console.warn = (...message: any[]) =>
  origWarn(`${chalk.yellow('WARN')}:`, ...message)
console.info = (...message: any[]) =>
  origInfo(`${chalk.cyan('INFO')}:`, ...message)
console.debug = (...message: any[]) =>
  origDebug(`${chalk.yellow('DEBUG')}:`, ...message)
