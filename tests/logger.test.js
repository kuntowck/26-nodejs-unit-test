/* eslint-disable no-undef */
import winston from "winston";

test("create new logger with console transport", () => {
  // object logger
  const logger = winston.createLogger({
    // console transports
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Coba logging",
  });
});
