const axios = require('axios');
const rbxmanager = require('rbxmanager');

rbxmanager.getGroup(6893121).then(res => {
    console.log(res);
});

async function getGroup(id) {
    return await(axios.get("https://groups.roblox.com/v2/groups?groupIds=" + id));
}