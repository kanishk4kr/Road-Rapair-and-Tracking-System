const model = require("./model");

const find1 = async() => {
    const Material = await model.find();
    return Material;
}
const find = async(appID) => {
    const Material = await model.findById(appID);
    return Material;
}
 
const create = async (Material) => {
    const { name, quantity} = Material;
    const newMaterial = await model.create({
        name,
        quantity,
    });

    return newMaterial;
}
const updateall = async (data) => {
    const labour = await model.updateMany({},data);
    return labour;
}
module.exports = {
    create,
    find,
    find1,
    updateall
}