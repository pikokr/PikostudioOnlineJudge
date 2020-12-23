import chalk from 'chalk'

const origLog = console.log
const origErr = console.error
const origWarn = console.warn
const origInfo = console.info
const origDebug = console.debug

console.log = (...message: string[]) =>
  origLog(`${chalk.blue('LOG')}:`, ...message)
console.error = (...message: string[]) =>
  origErr(`${chalk.red('ERROR')}:`, ...message)
console.warn = (...message: string[]) =>
  origWarn(`${chalk.yellow('WARN')}:`, ...message)
console.info = (...message: string[]) =>
  origInfo(`${chalk.cyan('INFO')}:`, ...message)
console.debug = (...message: string[]) =>
  origDebug(`${chalk.yellow('DEBUG')}:`, ...message)
