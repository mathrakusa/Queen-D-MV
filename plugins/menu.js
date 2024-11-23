const {cmd , commands} = require('../command')
const config = require('../config')

cmd({
    pattern: "menu",
    desc: "Get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return

let menu = {
main: '',
owner: '',
movie: '',
other: ''
};

 for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│► .${commands[i].pattern}\n`;
 }
}   

let madeMenu = `*👋 HELLO _${pushname}_*

「 ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ᴍᴇɴᴜ 」

╭──────────●
│❯ MAIN COMMANDS ❮
│   ───────
${menu.main}╰───────────●
╭───────────●
│❯ OWNER COMMANDS ❮
│   ───────
${menu.owner}╰───────────●
╭───────────●
│❯ MOVIE COMMANDS ❮
│   ───────
${menu.movie}╰───────────●
╭───────────●
│❯ OTHER COMMANDS ❮
│   ───────
${menu.other}╰───────────●

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

      let menuImg = `https://github.com/HaCkr-EPZI-public/CuduNona/raw/refs/heads/main/media/VID-20241110-WA0141(1).mp4`


await conn.sendMessage(from,{video:{url: menuImg },caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
