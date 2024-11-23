const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

const id = config.MV_SEND_JID

cmd({
    pattern: "dirdlsend",
    desc: "download direct url",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return
    
    let a = q

let b = a.split("& ")

let c = b[0]
let d = b[1]

  if(!a) return reply(`*_Please give me a direct link & jid. Ex :- .dirdlsend <direct link> & <jid>_*`)

if(!d) {

await conn.sendMessage( id ,{document: {url: c },mimetype:"video/mp4",fileName: "🎬 QUEEN-D MOVIE BOT 🎬" + ".mp4",caption:"> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ"})

} else {
    
await conn.sendMessage( d ,{document: {url: c },mimetype:"video/mp4",fileName: "🎬 QUEEN-D MOVIE BOT 🎬" + ".mp4",caption:"> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ"})
  
}
}catch(e){
console.log(e)
reply(`${e}`)
}
})
