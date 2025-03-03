"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var numbers = [1, 2, 3, 4, 5, 6];
var chunkedArray = _.chunk(numbers, 2);
console.log(chunkedArray);
