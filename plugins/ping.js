const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "ping",
    desc: "Check bot ping.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return

    const startTime = Date.now()
  
        const response = await conn.sendMessage(from, { text: '*_Pinging QUEEN-D MOVIE BOT..._*' }, {quoted : mek})
  
        const endTime = Date.now()
        const ping = endTime - startTime
    
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        await delay(1000)
    
        await conn.sendMessage(from, { text: `*Infinity's ping :* _${ping} ms_`, edit: response.key, })

    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
