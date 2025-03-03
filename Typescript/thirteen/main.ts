import * as _ from "lodash";

const numbers = [1, 2, 3, 4, 5, 6];
const chunkedArray = _.chunk(numbers, 2);

console.log(chunkedArray);
