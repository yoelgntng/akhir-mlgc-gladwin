const tfjs = require('@tensorflow/tfjs-node');

const loadModel = async () => {
    const url = process.env.NODE_ENV !== 'production' ? 'file://models/model.json' : process.env.MODEL_URL;
    return tfjs.loadGraphModel(url);
}

const predict = (model, image) => {
    const tensor = tfjs.node
        .decodeImage(image)
        .resizeNearestNeighbor([224, 224])
        .expandDims()
        .toFloat();

    return model.predict(tensor).data();
}

module.exports = { loadModel, predict };