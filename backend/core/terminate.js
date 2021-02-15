const exitHandler = (options, exitCode) => {
  if (options.cleanup) console.log('clean');
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
};

module.exports = exitHandler;
