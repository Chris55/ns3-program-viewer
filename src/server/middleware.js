const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const appHelmet = helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", "blob:"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            fontSrc: ["'self'", "data:"],
            imgSrc: ["'self'", "data:"],
            "frame-src": ["'self'"],
            // "worker-src": ["blob:"],    // required by Chrome to export csv (but Unrecognized in Safari)
            "child-src": ["blob:"], // required by Safari to export csv
        },
    },
});

const apiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

const appLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { appHelmet, apiLimiter, appLimiter };
