import helmet from "helmet";
import rateLimit from "express-rate-limit";

const appHelmet = helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", "blob:"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            fontSrc: ["'self'", "data:"],
            imgSrc: ["'self'", "data:"],
            "frame-src": ["'self'"],
            // "worker-src": ["blob:"],    // required by Chrome to export const csv (but Unrecognized in Safari)
            "child-src": ["blob:"], // required by Safari to export const csv
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

export { appHelmet, apiLimiter, appLimiter };
