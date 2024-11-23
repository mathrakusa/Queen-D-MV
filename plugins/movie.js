const { SinhalaSub }  = require('@sl-code-lords/movie-api')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "search",
    desc: "search movie",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return
    
    if(!q) {

let mvNo = await SinhalaSub.get_list.by_recent_movies(1)

let arrays = mvNo.results;
        
        
let resultNo = arrays.map((movie, index) => `${index + 1}. *Movie Name :* ${arrays[index].title}\n*Link :* ${arrays[index].link}\n*Type :* ${arrays[index].type}`).join("\n\n");

let dtNo = `*_QUEEN-D MOVIE BOT SEARCH RESULTS_*\n\n`
let capNo = `\n\n> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `
            
await conn.sendMessage(from, { text: `${dtNo} ${resultNo} ${capNo}` }, {quoted: mek})

    } else {
        
let mv = await SinhalaSub.get_list.by_search(q)

let array = mv.results;

        if(array.length === 0) {
return reply(`*_Can't find this movie !_*`);
        }       

let result = array.map((movie, index) => `${index + 1}. *Movie Name :* ${array[index].title}\n*Link :* ${array[index].link}\n*Type :* ${array[index].type}`).join("\n\n");

let dt = `*_QUEEN-D MOVIE BOT SEARCH RESULTS_*\n\n`
let cap = `\n\n> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

    }

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "info",
    desc: "get movie details",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return

if (!q && !q.startsWith("https://sinhalasub.lk/")) {

return reply("*_Please give me a movie name or sinhalasub.lk url._*")

} else if (q.startsWith("https://")) {

let mv_info = await SinhalaSub.movie(q)

let msg = `*_QUEEN-D MOVIE BOT MOVIE INFO_*

🍟 *Movie Name :* ${mv_info.result.title}

🧿 *Release Date :* ${mv_info.result.release_date}

🌍 *Country :* ${mv_info.result.country}

⏱ *Duration :* ${mv_info.result.duration}

🎀 *Categories :* ${mv_info.result.categories}

⭐ *IMDB Rate :* ${mv_info.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info.result.director.name}

🖇️ *Link* : ${q}

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

await conn.sendMessage(from,{image:{url: mv_info.result.images[0]},caption:msg},{quoted:mek})

} else {

let mv = await SinhalaSub.get_list.by_search(q)

let mv_info2 = await SinhalaSub.movie(mv.results[0].link)

let msg2 = `*_QUEEN-D MOVIE BOT MOVIE INFO_*

🍟 *Movie Name :* ${mv_info2.result.title}

🧿 *Release Date :* ${mv_info2.result.release_date}

🌍 *Country :* ${mv_info2.result.country}

⏱ *Duration :* ${mv_info2.result.duration}

🎀 *Categories :* ${mv_info2.result.categories}

⭐ *IMDB Rate :* ${mv_info2.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info2.result.director.name}

🖇️ *Link* : ${mv.results[0].link}

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

await conn.sendMessage(from,{image:{url: mv_info2.result.images[0]},caption:msg2},{quoted:mek})

    }
           
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "infosend",
    desc: "get movie details",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return

        let x = q
        
let a = x.split(" & ")

let b = a[0]
let c = a[1]


if(!c) {


let id = config.MV_SEND_JID

if (!q && !q.startsWith("https://sinhalasub.lk/")) {

return reply("*_Please give me a movie name or sinhalasub.lk url._*")

} else if (q.startsWith("https://")) {

let mv_info = await SinhalaSub.movie(q)

let msg = `🍟 *${mv_info.result.title}*

🧿 *Release Date :* ${mv_info.result.release_date}

🌍 *Country :* ${mv_info.result.country}

⏱ *Duration :* ${mv_info.result.duration}

🎀 *Categories :* ${mv_info.result.categories}

⭐ *IMDB Rate :* ${mv_info.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info.result.director.name}

🖇️ *Link* : ${b}

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

await conn.sendMessage(id ,{image:{url: mv_info.result.images[0]},caption:msg})

} else {

let mv = await SinhalaSub.get_list.by_search(q)

let mv_info2 = await SinhalaSub.movie(mv.results[0].link)

let msg2 = `🍟 *${mv_info2.result.title}*

🧿 *Release Date :* ${mv_info2.result.release_date}

🌍 *Country :* ${mv_info2.result.country}

⏱ *Duration :* ${mv_info2.result.duration}

🎀 *Categories :* ${mv_info2.result.categories}

⭐ *IMDB Rate :* ${mv_info2.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info2.result.director.name}

🖇️ *Link* : ${mv.results[0].link}

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

await conn.sendMessage(id ,{image:{url: mv_info2.result.images[0]},caption:msg2})

}
} else if (c.endsWith('@g.us') && c.endsWith('@s.whatsapp.net')) {

if (!q && !q.startsWith("https://sinhalasub.lk/")) {

return reply("*_Please give me a movie name or sinhalasub.lk url._*")

} else if (q.startsWith("https://")) {

let mv_info = await SinhalaSub.movie(q)

let msg = `🍟 *${mv_info.result.title}*

🧿 *Release Date :* ${mv_info.result.release_date}

🌍 *Country :* ${mv_info.result.country}

⏱ *Duration :* ${mv_info.result.duration}

🎀 *Categories :* ${mv_info.result.categories}

⭐ *IMDB Rate :* ${mv_info.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info.result.director.name}

🖇️ *Link* : ${b}

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

await conn.sendMessage( c ,{image:{url: mv_info.result.images[0]},caption:msg})

} else {

let mv = await SinhalaSub.get_list.by_search(q)

let mv_info2 = await SinhalaSub.movie(mv.results[0].link)

let msg2 = `🍟 *${mv_info2.result.title}*

🧿 *Release Date :* ${mv_info2.result.release_date}

🌍 *Country :* ${mv_info2.result.country}

⏱ *Duration :* ${mv_info2.result.duration}

🎀 *Categories :* ${mv_info2.result.categories}

⭐ *IMDB Rate :* ${mv_info2.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info2.result.director.name}

🖇️ *Link* : ${mv.results[0].link}

> ϙᴜᴇᴇɴ-ᴅ ᴍᴏᴠɪᴇ ʙᴏᴛ ~ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ `

await conn.sendMessage( c ,{image:{url: mv_info2.result.images[0]},caption:msg2})

}
}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
