let fetch = require('node-fetch')

let timeout = 120000
let poin = 1500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'Jawab dulu soal yg Ini ngab', conn.tebakgambar[id][0])
    throw false
  }
  let res = await fetch(global.API('zahir', '/api/kuis/tebakgambar', {}, 'apikey'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
*Reply gambar ini saat menjawab!*

Note: Gabisa jawab harus donasi:)
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendFile(m.chat, json.result.images, 'tebakgambar.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*\n\nsilahkan hubungi owner untuk donasi:)`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

module.exports = handler