let handler = async m => m.reply(`
*Testing sukses✓*
_Ketik [#menu] Untuk menampilkan menu_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['tes']
handler.tags = ['info']
handler.command = /^te(s|st)$/i

module.exports = handler
