var winston = require('winston');
var EVN = process.env.NODE_ENV;

function getLogger(module){
    var path = module.filename.split('/').slice(-2).join('/');
    
    var transports = [

        new winston.transports.Console({
            colorize: true,
            level: EVN == 'development' ? 'debug' : 'error',
            label: path
        }),

        new winston.transports.File({ filename: 'debug.log', level: 'debug' })
    ];

    return winston.createLogger({ transports: transports });

}

module.exports = getLogger;
