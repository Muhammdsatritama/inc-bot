let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'MAU PREM 1 BULAN', description: "Saya Premium selama Sebulan", rowId:"/beliprem bang mau prem 1 bulan"},
        {title: 'MAU PREM 1 MINGGU', description: "Saya Premium selama Seminggu", rowId:"/beliprem bang mau prem 1 minggu"},
        {title: 'MAU SEWA 1 BULAN', description: "Saya mau sewa bot 1 Bulan", rowId:"/beliprem bang sewa 1 bulan"},
        {title: 'MAU SEWA 1 MINGGU', description: "Saya mau sewa bot 1 Minggu", rowId:"/beliprem bang sewa 1 Minggu"},
        {title: 'GAK', description: "Nanti dulu deh", rowId:"/gakmau"},
        {title: 'BINGUNG', description: "Au ah mau nanya ke Owner dulu", rowId:"/owner"},
        {title: 'MAU PREMIUM PERMANEN', description: "Saya Premium selama Permanen", rowId:"/beliprem bang mau prem permanen"},
    ]
    
    const sections = [{title: "Silahkan Pilih Kak", rows: rows}]
    const button = {
        buttonText: 'Klik disini Ngab',
        description: `Dipilih Dipilih:v`,
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
}
handler.help = ['getprem']
handler.tags = ['info']
handler.command = /^(fktdktfl)$/i
module.exports = handler