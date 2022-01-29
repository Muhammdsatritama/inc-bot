let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085759022133]
│ • Telkomsel [082211224927]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [085759022133]
│ • GOPAY [082211224927]
│ • https://saweria.co/Mstm_27
╰────

*MAKE DOANG KAGAK DONASI*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^YgHxjUdu$/i

module.exports = handler
