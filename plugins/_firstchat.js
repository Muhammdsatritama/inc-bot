let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.fromMe) return
    if (m.isGroup) return
    let users = global.db.data.users[m.sender]
    if (new Date - users.pc < 43200000) return // setiap 12 jam
    await this.send3Button(m.chat, `
\`\`\`Hai, ${ucapan()}\`\`\`

\`\`\`Ada yang bisa robot bantu?\`\`\`
\`\`\`Silahkan tekan tombol dibawah\`\`\`

\`\`\`Matikan pesan sementara, agar tombol dapat ditekan!\`\`\`
`.trim(), '© inc.bot | have Tamz | From ARGIO DEV', 'MENU', '/menu', 'DONASI', '/donate', 'OWNER', '/owner')
    users.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🌃"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang 🌅"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌃"
    }
    return res
}