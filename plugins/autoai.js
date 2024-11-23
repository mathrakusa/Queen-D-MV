const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    on: "body"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const workGrp = config.AUTO_AI_JID
    
if(isCmd) return
if(senderNumber === botNumber) return      
if(!workGrp.includes(from)) return

if (config.AUTO_AI === 'on') {
    
let data = await fetchJson(`https://dark-yasiya-api-new.vercel.app/ai/chatgpt?q=${body}`)
    
    return reply(`${data.result}`)

} 

    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
