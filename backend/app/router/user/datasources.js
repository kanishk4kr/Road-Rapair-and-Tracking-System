const model = require("./model");

const find1 = async() => {
    const user = await model.find();
    return user;
}
const find = async(appID) => {
    const user = await model.findById(appID);
    return user;
}
const find2 = async(email) => {
    const user = await model.findOne({email});
    return user;
}

const create = async (user) => {
    const {name, email, isSupervisor,isAdmin} = user;
 
    const newUser = await model.create({
        name,
        email,
        isSupervisor,
        isAdmin
    });

    return newUser;
}
const delete1 = async(appId) => {
    const user = await model.findByIdAndDelete(appId);
    return user;
}

const update = async (appId,data) => {
    const user = await model.findByIdAndUpdate({_id:appId},data);
    return user;
}
module.exports = {
    create,
    find,
    find1,
    find2,
    delete1,
    update
}