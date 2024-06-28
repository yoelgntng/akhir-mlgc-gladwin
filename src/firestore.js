const { Firestore } = require("@google-cloud/firestore");

const storeData = async (id, data) => {
    const db = new Firestore();
    const predictCollections = db.collection('predictions');
    return predictCollections.doc(id).set(data);
}

const getData = async () => {
    const db = new Firestore();
    const snapshotPredictions = await db.collection('predictions').get();
    const histories = snapshotPredictions.docs.map((doc) => ({
        id: doc.id,
        history: doc.data()
    }));
    return histories;
}

module.exports = { storeData, getData };