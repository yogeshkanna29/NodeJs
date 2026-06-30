// const os = require('os');
import os, { totalmem } from "os";

// Info about Current User

const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds

console.log(`The System Update is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
