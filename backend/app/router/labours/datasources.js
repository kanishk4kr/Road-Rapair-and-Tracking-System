const model = require("./model");

const find1 = async() => {
    const labour = await model.find();
    return labour;
}
const find = async(appID) => {
    const labour = await model.findById(appID);
    return labour;
}
 
const create = async (labour) => {
    const {type, name, expertise, phone,accountno} = labour;
 
    const newLabour = await model.create({
        type,
        name,
        expertise,
        phone,
        accountno,
    });

    return newLabour;
}
const delete1 = async(appId) => {
    const labour = await model.findByIdAndDelete(appId);
    return labour;
}

const update = async (appId,data) => {
    const labour = await model.findByIdAndUpdate({_id:appId},data);
    return labour;
}
module.exports = {
    create,
    find,
    find1,
    delete1,
    update
}