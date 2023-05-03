export const log = (msg) => {
    const message = `[${new Date().toLocaleTimeString()}] ${msg}`;
    console.log(message);
};
