function globalSetup (config) {
  process.env.FOO = 'some data'
  // Or a more complicated data structure as JSON:
  process.env.BAR = JSON.stringify({ some: 'data' })
}

module.exports = globalSetup