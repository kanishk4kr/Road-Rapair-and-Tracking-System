const model = require("./model");

const find1 = async() => {
    const list = await model.find();
    return list;
}
const find = async(appID) => {
    const list = await model.findById(appID);
    return list;
}
 
const create = async (list) => {
    const {id,labourID,materials,quantity} = list;
 
    const newList = await model.create({
        id,
        labourID,
        materials,
        quantity
    });

    return newList;
}
const delete1 = async(appId) => {
    const list = await model.findByIdAndDelete(appId);
    return list;
}

const update = async (appId,data) => {
    const list = await model.findByIdAndUpdate({_id:appId},data);
    return list;
}
module.exports = {
    create,
    find,
    find1,
    delete1,
    update
}