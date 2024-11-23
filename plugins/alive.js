const config = require('../config')
const {cmd , commands} = require('../command')
const {getLinkPreview , getPreviewFromContent} = require('link-preview-js')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return

let aliveMsg = `Hey *${pushname}* What's Up

*QUEEN D IS ALIVE NOW !*

*OWNER :* Asᴍᴏᴅᴇᴜs Eᴘᴢɪ
*BOT :* Queen D 💃
*PLATFORM :* VPS
*RUNTIME :* ${runtime(process.uptime())}
*REPOSITORY:* https://github.com/HaCkr-EPZI-public/Queen-D

_*Epzi Might not here for now. U can use me if u like 🤭*_

_Wanna use me ?_ : `.menu`


> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

let aliveImg = `https://github.com/HaCkr-EPZI-public/CuduNona/raw/refs/heads/main/media/VID-20241110-WA0141(1).mp4`

return await conn.sendMessage(from,{video: {url: aliveImg },caption: aliveMsg },{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})



