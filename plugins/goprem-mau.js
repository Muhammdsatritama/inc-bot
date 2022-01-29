let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
K E T E R A N G A N

-> Fitur Prem adalah Fitur vip yg dapat di akses
anda secara tak terbatas! Kamu dapat mengakses fitur khusus secara bebas sampai masa berlaku habis`.trim()

conn.send2Button(m.chat, prem.trim(), '© inc.bot', 'Cek Harga', '.minat', 'Oh', '.okelah', { sendEphemeral: true, quoted: m })}

handler.command = /^(hooh)$/i

module.exports = handler