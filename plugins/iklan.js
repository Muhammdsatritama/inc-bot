//hayo ngapain π¦
let handler = async (m, { conn }) => {
let iklan = `
        γ SOCIAL ADS γ
β https://linktr.ee/https://linktr.ee/Zeroz04n
β https://linktr.ee/yahahaErlangga
β https://instagram.com/zeroz04n


        γ RANDOM ADS γ
β Jasa Buat menu atau Req. Menu bot : https://wa.me/6285856430321


Pengen Sosial media, Jasa, atau Bisnis kalian Mangkal di iklan bot ini? Hubungi owner dengan *Ketik #owner* Ya sob... Harga? Ramah di kantong pastinya hehe :D
`.trim()//ini lu ubah aja ngap pengap
conn.reply(m.chat, iklan)
}//jangan diuncommand yg gw tutup ini
handler.help = ['iklan']
handler.tags = ['info']
handler.command = /^iklan$/i
//nanti eror nangisπΏ
module.exports = handler
//Zeroz04n