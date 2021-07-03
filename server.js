const fastify = require("fastify")({ logger: true });
const execLocal = require("./utils/execLocal");

const PORT = 5050;

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
});

fastify.get("/", (request, reply) => {
  execLocal("nordvpn status", (stdout) =>
    reply.view("/templates/index.ejs", {
      stdout: stdout.replace("\r-\r  \r\r-\r  \r", ""),
      status: stdout.includes("Status: Connected"),
    })
  );
});

fastify.get("/nord/settings", (request, reply) => {
  execLocal("nordvpn settings", (stdout) =>
    reply.send({ status: stdout.replace("\r-\r  \r\r-\r  \r", "") })
  );
});

fastify.get("/nord/status", (request, reply) => {
  execLocal("nordvpn status", (stdout) =>
    reply.send({ status: stdout.replace("\r-\r  \r\r-\r  \r", "") })
  );
});

fastify.get("/nord/connect", (request, reply) => {
  execLocal("nordvpn connect P2P", (stdout) =>
    reply.send({ status: stdout.replace("\r-\r  \r\r-\r  \r", "") })
  );
});

fastify.get("/nord/disconnect", (request, reply) => {
  execLocal("nordvpn disconnect", (stdout) =>
    reply.send({ status: stdout.replace("\r-\r  \r\r-\r  \r", "") })
  );
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
