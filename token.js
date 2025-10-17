// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1292842847216734280",
        serverId: "762786136459968521",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
    {
        channelId: "1292842847216734280",
        serverId: "762786136459968521",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
    {
        channelId: "1292842847216734280",
        serverId: "762786136459968521",
        token: process.env.token3,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },    
];
