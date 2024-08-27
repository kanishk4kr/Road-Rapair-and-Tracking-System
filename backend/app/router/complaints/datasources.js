const model = require("./model");

const find1 = async() => {
    const complaints = await model.find();
    return complaints;
}
const find = async(appID) => {
    const complaint = await model.findById(appID);
    return complaint;
}

const create = async (complaint) => {
    const {location, type, comment,email} = complaint; 
    const newComplaint = await model.create({
        location,
        type,
        comment,
        email
    });

    return newComplaint;
}
const _delete = async (appId,email) => {
    const complaint = await model.findOneAndDelete({appId,email});
    return complaint;
}
const delete1 = async (appId) => {
    const complaint = await model.findByIdAndDelete(appId);
    return complaint;
}
module.exports = {
    create,
    find,
    find1,
    _delete,
    delete1
}