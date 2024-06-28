const { postPredictHandler, getHistoryHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/predict',
        options: {
            payload: {
                maxBytes: 1000000,
                allow: 'multipart/form-data',
                multipart: true,
            }
        },
        handler: postPredictHandler,
    },
    {
        method: 'GET',
        path: '/predict/histories',
        handler: getHistoryHandler,
    },
];

module.exports = routes;