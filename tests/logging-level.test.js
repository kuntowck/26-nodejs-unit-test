/* eslint-disable no-undef */
import winston from "winston";

test("logging level", () => {
  // object logger
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})], // console transportsk
    level: "silly", // level logger
  });

  // logging level
  logger.log({
    level: "error",
    message: "Coba logging error",
  });
  logger.log({
    level: "warn",
    message: "Coba logging warn",
  });
  logger.log({
    level: "info",
    message: "Coba logging info",
  });
  logger.log({
    level: "http",
    message: "Coba logging http",
  });
  logger.log({
    level: "verbose",
    message: "Coba logging verbose",
  });
  logger.log({
    level: "debug",
    message: "Coba logging debug",
  });
  logger.log({
    level: "silly",
    message: "Coba logging silly",
  });
});

test("logging level shortcut", () => {
  // object logger
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})], // console transportsk
    level: "silly", // level logger
  });

  // logging level
  logger.error("coba logging error");
  logger.warn("coba logging warn");
  logger.info("coba logging info");
  logger.http("coba logging http");
  logger.verbose("coba logging verbose");
  logger.debug("coba logging debug");
  logger.silly("coba logging silly");
});
