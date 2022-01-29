//ucapan terima kasih
let handler = async (m, { conn, usedPrefix: _p }) => {
let rules = `
Silahkan baca Rules dulu ya Kak👇🏻

1. Bot tidak 24 Jam Online
2. Bot masih dalam pengembangan, jadi tolong maklumi jika ada Bug atau Error
3. Fitur game sesekali Work dan sesekali Tidak work. Silahkan Cek sendiri ya...
4. Menelpon bot Auto Block!!!
5. Jika bot On tapi tidak respon, Harap tunggu beberapa saat dan Ulangi perintah nya.

HAVE A NICE DAY KAK
`.trim()

conn.fakeReply(m.chat, rules, '0@s.whatsapp.net', '*PATUHI PERATURAN AGAR KAMU GAK KE BANNED*', 'status@broadcast')
}//iyes
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i
handler.register = true

module.exports = handler