import * as moduleOperations from "./controlador/controllers.js";

import chalk from "chalk";

const {suma} = moduleOperations;
const {multiplica} = moduleOperations;

const operation = multiplica(suma(1, 2), suma(4, 5));

console.log(chalk.green(operation));

