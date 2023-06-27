
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://xfrivaldi.store/wp-content/uploads/Image/xf.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'support group', title: packname, body: 'SIMPLE BOT - 404 not found', thumbnailUrl: pp, sourceUrl: dygp }}} 
   
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: 'Donate', title: 'SIMPLE BOT © AldiXF', body: 'selalu online 24jam', thumbnailUrl: pp, sourceUrl: fgpyp }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: 'SIMPLE BOT © AldiXF' + fgyt, title: 'Aldi XF', body: 'selalu online 24jam', thumbnailUrl: pp, sourceUrl: fgyt }}}

} 
export default handler
