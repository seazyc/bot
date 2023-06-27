
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `*FITUR ADMIN [GRUP]*
  ➮ !hidetag
  ➮ !invite [ 62xxx ]
  ➮ !kick @user
  ➮ !link
  ➮ !tagall
  ➮ !totag

*FITUR OWNER [ONLY]*
  ➮ !restart
  ➮ !banchat
  ➮ !unbanchat
  ➮ !ban @user
  ➮ !setcmd

*TOOLS YANG BISA DIGUNAKAN*
  ➮ !gitclone <repo link>
  ➮ !sticker <reply>
  ➮ !toimg <stiker to png>
  ➮ !tiktok <link>
  ➮ !tiktokstalk @username
  ➮ !fecth <link>
  ➮ !tourl <link>
  ➮ !take <reply>
  ➮ !tovideo <reply>

Sengaja fitur dibikin simple 👀`

    let pp = 'https://i.imgur.com/Owmb93c.png' 
    conn.sendFile(m.chat,pp , 'xfrivaldi.store', m2, m, null,rpl)
   
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['help', 'menu'] 

export default handler
