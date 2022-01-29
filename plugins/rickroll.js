//tadinya iseng, eb malah work
let handler  = async (m, { conn, usedPrefix: _p }) => {
const { MessageType,Presence } = require('@adiwajshing/baileys')
await m.reply('Bentar kak, Nih sekalian aku kasih sound nya yaa')
 
conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/rickroll.mp3', 'tts.opus', null, m, true)
}
handler.customPrefix = /^(rick|rickroll)/i
handler.command = new RegExp
module.exports = handler