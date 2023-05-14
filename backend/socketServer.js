const { verifyTokenSocket } = require("./middleware/authSocket");
const { disconnectHandler } = require("./socketHandler.js/disconnectHandler");
const newConnectionHandler = require("./socketHandler.js/newConnectionHandler");

const registerSocketServer = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    //serverStore.setSocketServerInstance(io);

    io.use((socket, next) => {
        verifyTokenSocket(socket, next);
    });

    // const emitOnlineUsers = () => {
    //     const onlineUsers = serverStore.getOnlineUsers();
    //     io.emit("online-users", { onlineUsers });
    // };

    io.on("connection", (socket) => {
        console.log("user connected socket.io");
        console.log(socket.id);


        newConnectionHandler(socket, io);
        //emitOnlineUsers();

        socket.on("disconnect", () => {
            disconnectHandler(socket);
        });
    });

    // setInterval(() => {
    //     emitOnlineUsers();
    // }, [1000 * 8]);
};

module.exports = {
    registerSocketServer,
};