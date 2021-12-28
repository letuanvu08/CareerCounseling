const localHost = "";
const remoteHost = "";
const localHostSocket = "";
const remoteHostSocket = "";
const isLocalServer = process.env["SERVER"] === 'local';
export default env = {
    HOST: isLocalServer ? localHost : remoteHost,
    HOST_SOCKET: remoteHostSocket,
};
