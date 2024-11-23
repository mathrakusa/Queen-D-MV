const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DqgmHCCD#CJLpRU_zf8VyizKlNzLyISCTGMINKt-f5kUeOEN3AnI", //your session id
MV_SEND_JID: process.env.MV_SEND_JID || "120363197756141044@g.us", //default movie send group
MODE: process.env.MODE || "public", //private or inbox or groups
AUTO_AI: process.env.AUTO_AI || "off", //on or off
AUTO_AI_JID: process.env.AUTO_AI_JID || "", //auto ai working group
BLOCK_JID: process.env.BLOCK_JID || "", //block jids
};
