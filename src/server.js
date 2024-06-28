require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { postCheckFailHandler } = require('./handler');
const { loadModel } = require('./inference');

const init = async () => {
    console.log('Loading model...');
    const model = await loadModel();
    console.log('Model loaded!');
    
    const server = Hapi.server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 3000,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    
    server.app.model = model;
    server.route(routes);
    server.ext('onPreResponse', postCheckFailHandler);
    
    await server.start();
    console.log(`Server start at: ${server.info.uri}`);
};

init();