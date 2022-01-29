let handler = async m => m.reply(`
AYO JOIN KE GRUP KU KAK👋🏻
https://chat.whatsapp.com/K2n4PL2ysfrAUGNKijMArM
`.trim()) // Tambah sendiri kalo mau
handler.help = ['linkgrup']
handler.tags = ['main']
handler.command = /^(linkgrub)$/i

module.exports = handler
