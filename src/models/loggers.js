const {createLogger,transport,format} = require ('winston');

const loggers = createLogger({
    transport : [
        new transport.file({
            filename : "error.log",
            level : 'info',
            format :format.combine(format.timestamp(),format.json())
        })
    ]
})

module.exports= loggers ;