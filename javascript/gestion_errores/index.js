const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
    //   - Write all logs with importance level of `error` or less to `error.log`
    //   - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });


  const suma = num => {
    if(typeof num === "number"){
        return num++,
        logger.info(num)
        }
        else {
             throw new Error("El valor ingresado no es un numero")
        }
    };

    try{
        suma(false),
        logger.info("Esta ejecutandose de manera correcta")
    }

    catch(e) {
        logger.error(`${e}`)
    };

