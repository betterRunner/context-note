import mitt from "mitt";

const emitter = {
  ...mitt(),
  // add `once` function manually
  // https://github.com/developit/mitt/issues/54
  once: (type: string, handler: (...args: any) => void) => {
    const wrappedHandler = (evt: any) => {
      handler(evt);
      emitter.off(type, wrappedHandler);
    };
    emitter.on(type, wrappedHandler);
  },
};

export default emitter;

export async function sendEmitAndWait(name: string, data: any) {
  // wait until the `${name}-cb` event triggers
  return new Promise((resolve) => {
    emitter.once(`${name}-cb`, (data) => {
      resolve(data);
    });
    // send the emit
    emitter.emit(name, data);
  });
}
