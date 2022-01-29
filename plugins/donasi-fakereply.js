let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085759022133]
│ • Telkomsel [082211224927]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [085759022133]
│ • GOPAY [082211224927]
│ • https://saweria.co/Mstm_27
╰────

*kamu bisa mendapat premium hanya dengan berdonasi minimal 5k
*untuk donasi tidak mematok nominal yang besar. Asalkan mampu dan ikhlas itu lebih baik😇
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Yang memiliki harta lebih, boleh donasi ya...', 'status@broadcast')
}
handler.command = /^dona(si|te)$/i

module.exports = handler
