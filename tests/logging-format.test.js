/* eslint-disable no-undef */
import winston from "winston";

test("logging format", () => {
  // object logger
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})], // console transport
    format: winston.format.logstash(), // format logger
    level: "info", // level logger
  });

  logger.error("logging error");
  logger.warn("logging warn");
  logger.info("logging info");
});

test("logging custom format", () => {
  // object logger
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})], // console transport
    format: winston.format.printf((log) => {
      return `${new Date()} | ${log.level.toUpperCase()}: ${log.message}`;
    }), // format logger
    level: "info", // level logger
  });

  logger.error("logging error");
  logger.warn("logging warn");
  logger.info("logging info");
});

test("logging combine format", () => {
  // object logger
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})], // console transport
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.simple()
    ), // format logger
    level: "info", // level logger
  });

  logger.error("logging error");
  logger.warn("logging warn");
  logger.info("logging info");
});
