const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", () => {
  console.log("Event triggered!");
});

emitter.emit("message");