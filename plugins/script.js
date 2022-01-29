let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
Bot ini menggunakan Script dari:
_https://github.com/mhmmdsatritama/inc-bot_

*Note: Script ini gratis untuk digunakan, dengan syarat tidak diperjual belikan. Follow juga githubnya, jangan lupa bintang 5*`.trim()

conn.send3Button(m.chat, prem.trim(), '© inc.bot', 'Oke', '.ping', '🔙Back To Menu', '.menu', 'Owner', '.owner', { sendEphemeral: true, quoted: m })}

handler.command = /^sc|scriptbot|script$/i
handler.private = true

module.exports = handler