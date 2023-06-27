let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ TOTAL : *${participants.length}*${text ? `\nINFORMASI : ${text}\n` : ''}\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
