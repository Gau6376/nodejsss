// console.log(300/2);
// console.log("hello");

// const http = require("http");
// import http from "http";        ==> new

// const server = http.createServer((req,res)=>{
// console.log(req.url);
// res.end("<h1>Noice</h1>");
// if(req.url==="/about"){
//     res.end("<h1>About Page</h1>");
// }
// else if(req.url==="/"){
//     res.end("<h1>Home Page</h1>");
// }
// else if(req.url==="/contact"){
//     res.end("<h1>Contact Page</h1>");
// }
// else{
//     res.end("<h1>Page not found</h1>");
// }
// });

// server.listen(5000,()=>{
//     console.log("server is running");
// });

// const gf = require("./features");   // purana method
// console.log(gf);

// import gf from "./features.js";
// console.log(gf);

// import { gf3 } from "./features.js";
// console.log(gf3);

// import * as myObj from "./features.js";
// console.log(myObj);

import { lovePercent } from "./features.js";
console.log(lovePercent());