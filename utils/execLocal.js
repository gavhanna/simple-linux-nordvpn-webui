const { exec } = require("child_process");

const execLocal = (command, cb) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      fastify.log.error(error.message);
      return;
    }
    if (stderr) {
      fastify.log.error(stderr);
      return;
    }
    cb(stdout);
  });
};

module.exports = execLocal;
