const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let prem = `Mau premium kak??`.trim()

await conn.send2Button(m.chat, prem.trim(), '© inc.bot', 'Iya', '.hooh', 'Engga', '.ndak', { sendEphemeral: true, quoted: m })}


handler.help = ['goprem']
handler.tags = ['premium']
handler.command = /^(getprem)$/i

module.exports = handler