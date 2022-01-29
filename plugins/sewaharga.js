let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p }) => {
conn.send2ButtonImg(m.chat, 'Jualan bang, beli dong', `src/list.png`, `© 2021 inc.bot`, 'Mau Dong', '.fktdktfl', 'Gak dulu deh', '.gakmau', { quoted: m })
}
handler.help = ['premium']
handler.command = /^hargasewa$/i

module.exports = handler