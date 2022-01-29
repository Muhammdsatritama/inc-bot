let handler = async m => m.reply(`
┏━━━「 *SOSMED OWNER* 」━━━
┣ ⛊  YT: https://youtube.com/c/CallMeMstm
┣ ⛊  IG: https://instagram.com/mstm_27
┣ ⛊  Nganu: https://linktr.ee/CallMeMstm
┗━━━━━━━━━━━━━━━

*BACA DOANG KAGAK FOLLOW*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sosialowner']
handler.tags = ['internet']
handler.command = /^(sosialowner)$/i

module.exports = handler