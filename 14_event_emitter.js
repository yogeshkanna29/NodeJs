import EventEmitter from "events";

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data received ${name} - age ${age}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "Yogesh", 26);
