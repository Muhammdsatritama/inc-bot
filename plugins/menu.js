let moment = require('moment-timezone')
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': '𝖬𝖺𝗂𝗇 𝖬𝖾𝗇𝗎',
  'game': '𝖦𝖺𝗆𝖾 𝖬𝖾𝗇𝗎',
  'xp': '𝖤𝗑𝗉 & 𝖫𝗂𝗆𝗂𝗍',
  'sticker': '𝖲𝗍𝗂𝖼𝗄𝖾𝗋 𝖬𝖾𝗇𝗎',
  'kerang': '𝖪𝖾𝗋𝖺𝗇𝗀 𝖠𝗃𝖺𝗂𝖻',
  'quotes': '𝖰𝗎𝗈𝗍𝖾𝗌 𝗆𝖾𝗇𝗎',
  'admin': '𝖮𝗇𝗅𝗒 𝖠𝖽𝗆𝗂𝗇',
  'group': '𝖦𝗋𝗈𝗎𝗉 𝖬𝖾𝗇𝗎',
  'premium': '𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖮𝗇𝗅𝗒',
  'internet': '𝖨𝗇𝗍𝖾𝗋𝗇𝖾𝗍 𝖬𝖾𝗇𝗎',
  'anonymous': '𝖠𝗇𝗈𝗇𝗒𝗆𝗈𝗎𝗌 𝖢𝗁𝖺𝗍',
  'nulis': '𝖭𝗎𝗅𝗂𝗌 & 𝖫𝗈𝗀𝗈',
  'downloader': '𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝖾𝗋 𝖬𝖾𝗇𝗎',
  'tools': '𝖳𝗈𝗈𝗅𝗌',
  'fun': '𝖥𝗎𝗇 & 𝖩𝗈𝗒',
  'database': '𝖣𝖺𝗍𝖺𝖻𝖺𝗌𝖾',
  'vote': '𝖵𝗈𝗍𝗂𝗇𝗀',
  'absen': '𝖠𝖻𝗌𝖾𝗇 𝖬𝖾𝗇𝗎',
  'quran': '𝖠𝗅- 𝖰𝗎𝗋\'𝖺𝗇',
  'jadibot': '𝖩𝖺𝖽𝗂 𝖡𝗈𝗍',
  'owner': '𝖮𝗐𝗇𝖾𝗋 𝖮𝗇𝗅𝗒',
  'host': '𝖧𝗈𝗌𝗍 𝖮𝗇𝗅𝗒',
  'advanced': '𝖠𝖽𝗏𝖺𝗇𝖼𝖾𝖽',
  'info': '𝖨𝗇𝖿𝗈',
  '': '𝖭𝗈 𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒',
}
const defaultMenu = {
  before: `
  \`\`\`Hai %name 🌹\`\`\`
  
╭──┈──「 *BOT INFO* 」
│➥ Bot Name: Inc.Bot
│➥ Prefix: Multi Prefix
│➥ Visit us: https://incbot.bio.link
│➥ Owner: @${owner[0]}
│➥ Total User: %totalreg
│➥ Berjalan selama: %uptime
╰───────────────┈───  

╭──┈──「 *USER INFO* 」
│➥ Name: %name
│➥ Level: %level
│➥ Limit: %limit Limit
│➥ Role: %role
│➥ Exp: %totalexp XP
╰───────────────┈───  

╭──┈──「 *TODAY INFO* 」
│➥ Hari: %week %weton
│➥ Tanggal: %date
│➥ Tanggal Islam: %dateIslamic
╰───────────────┈───  

https://chat.whatsapp.com/I83Pan5Sk7o7BCi5ZjhNzJ

%readmore`.trimStart(),
  header: '*⭙「 %category 」⭙*',
  body: '➜  %cmd',
  footer: '\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.reply(m.chat, text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

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

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}