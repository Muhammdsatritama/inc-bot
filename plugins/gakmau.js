//ucapan terima kasih
let handler = async (m, { conn, usedPrefix: _p }) => {
let gak = `
😁
`.trim()

conn.fakeReply(m.chat, rules, '0@s.whatsapp.net', '*Yaudah deh gpp*', 'status@broadcast')
}//iyes
handler.help = ['gakmau']
handler.tags = ['owner']
handler.command = /^gakmau$/i

module.exports = handler