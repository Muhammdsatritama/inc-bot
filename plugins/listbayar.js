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

`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Dibawah ini adalah list pembayaran, Baik via pulsa atau non pulsa', 'status@broadcast')
}
handler.command = /^listbayar$/i

module.exports = handler
