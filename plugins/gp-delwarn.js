
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `Tag atau mention seseorang`
        if (!(who in global.db.data.users)) throw `Pengguna tidak ditemukan di database saya`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *DELWARN*
         
▢ Warns: *-1*
▢ Warns total: *${warn - 1}*`)
         m.reply(`Admin menurunkan peringatan mereka, sekarang Anda punya ${warn - 1}`, who)
         } else if (warn == 0) {
            m.reply('Pengguna tidak memiliki peringatan')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
