const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "directdl",
    desc: "download direct url",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return
    
    let a = q

let b = a.split(" & ")

let c = b[0]
let d = b[1]

if(!d) {

await conn.sendMessage(from,{document: {url: c },mimetype:"video/mp4",fileName: "🎬 QUEEN-D MOVIE BOT 🎬" + ".mp4",caption:"> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ"},{quoted:mek})

} else {
    
await conn.sendMessage(from,{document: {url: c },mimetype:"video/mp4",fileName: d + ".mp4",caption:"> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ"},{quoted:mek})

}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
