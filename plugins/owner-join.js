
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.reply(m.chat, `*Undang bot ke grup*\n\nHeii @${m.sender.split('@')[0]}\nAnda dapat menyewa bot untuk bergabung dengan grup`.trim(), m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `Kirim tautan grup\n\ncontoh:\n *${usedPrefix + command}* <linkwa> <hari>\n\nnomor adalah hari bot akan berada di grup` 
  if (!code) throw `✳️ Link inválid`
  if (!args[1]) throw `Jumlah hari tidak ada \n\n contoh:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `Nomor saja, mewakili hari bot akan berada di grup!`
  let owbot = global.owner[1] 
  m.reply(`😎 Espere 3 segundos, me uniré al grupo`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅Saya berhasil bergabung dengan grup \n\n≡ Info grup \n\n Nama : ${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelahnya \n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `hai

@${owbot} dia adalah pencipta saya jika mau sewa chat dia
fui invitado por *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `oke semuanya santai 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\n@${m.sender.split('@')[0]} telah mengundang*${conn.user.name}* ke grup\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Tautan : ${args[0]}\n\nBot akan keluar secara otomatis setelahnya\n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\n@${m.sender.split('@')[0]} telah mengundang *${conn.user.name}* Ke grup\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Tautan : ${args[0]}\n\nBot akan keluar secara otomatis setelahnya\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️Berhasil mengundang bot ke grup\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelahnya *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hola a todos 👋🏻
     
*${conn.user.name}* saya adalah salah satu bot WhatsApp multi-device yang dibangun dengan Node.js, *${conn.user.name}* hanya diundang oleh*${m.name}*

untuk melihat menu bot tulis

${usedPrefix}help
@${conn.user.jid.split('@')[0]} akan keluar secara otomatis setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.reply(res, mes, m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `Maaf, bot tidak bisa bergabung dengan grup`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Días*\n ', h, ' *Horas*\n ', m, ' *Minutos*\n ', s, ' *Segundos* '].map(v => v.toString().padStart(2, 0)).join('')
}
