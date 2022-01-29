let handler  = async (m, { conn, usedPrefix: _p }) => {
let prem = `
Beneran mau Upgrade ke Premium kak? Lihat dulu harga nya disini : https://wa.me/p/4445000648854968/6282211224927`.trim()

conn.send2Button(m.chat, prem.trim(), '© inc.bot', 'Iya mau', '.fktdktfl', 'Cek Pembayaran', '.donasi', { sendEphemeral: true, quoted: m })}

handler.command = /^(minat)$/i

module.exports = handler