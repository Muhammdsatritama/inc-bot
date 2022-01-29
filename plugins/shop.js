//hayo ngapain 🐦
let handler = async (m, { conn, usedPrefix: _p }) => {
let path = require('path')
let fs = require('fs')
let pp = './src/menu.png'
let shop = `
\`\`\`Selamat datang di inc.shop\`\`\`
*Selamat belanja*
━━━━━━━━━━━━━━━━━
*Xp: 350* 1 limit
untuk pembelian LIMIT akan dikalikan dengan pembagian XP
contoh dibawah:
━━━━━━━━━━━━━━━━━
LIMIT:
*~> 5 limit = 1.750 XP*
*~> 10 limit = 3.500 XP*
*~> 15 limit = 5.250 XP*
*~> 20 limit = 7.000 XP*
*~> 25 limit = 8.750 XP*
*~> 30 limit = 10.500 XP*
*~> 35 limit = 12.250 XP*
*~> 40 limit = 14.000 XP*
*~> 45 limit = 15.750 XP*
*~> 50 limit = 17.500 XP*
and so on
━━━━━━━━━━━━━━━━━
Buy All: ${_p}buyall
untuk beli semua limit

Untuk membeli limit, Ketik
*_${_p}buy <jumlah>_*

Contoh: *_${_p}buy 5_*
━━━━━━━━━━━━━━━━━
CAPTION: _limit itu apa kak? limit adalah cari di google aja kak:v xp dan limit tidak akan direset kalau data terhapus, jika xp habis, belilah odading mang oleh:v ya gk lah😐 main game yg menambah xp / selalu gunakan bot agar xp dan level selalu naik, eitsss... limit akan tetap hangus jika menggunakan menu limit_

Terimakasih, jangan lupa berbelanja lagi✨
`.trim()
conn.fakeReply(m.chat, shop, '0@s.whatsapp.net', '*MAKANNYA PREM BIAR UNLIMITED*', 'status@broadcast')
//muka gw ganteng gk broh?:v
/*
conn.sendFile(m.chat, pp, 'pp.png', shop.trim(), {
  key: {
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      caption: `*YAHAHAHA OZAN*`,
      jpegThumbnail: fs.readFileSync(`./src/zann.png`)
    }
  }
})
*/
}
handler.help = ['shop']
handler.tags = ['hari', 'info']
handler.command = /^(shop)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
//lihat si pengap diubah²:v
module.exports = handler
