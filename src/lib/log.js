export const log = (msg) => {
    if (process.env.NODE_ENV !== 'production') {
        const message = `[${new Date().toLocaleTimeString()}] ${msg}`;
        console.log(message);
    }
};
