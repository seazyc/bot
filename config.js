import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['628887878328', 'Aldi XF', true],
  ['+6282274241198'], 
  ['082274241198'] 
] //Numeros de owner 

global.mods = ['6282274241198'] 
global.prems = ['6282274241198', '6282274241198', '6282274241198']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Aldi XF' 
global.author = ' © 0xaldiXF' 
global.fgig = '▢' 
global.dygp = 'https://wa.me/6282274241198'
global.fgsc = 'https://wa.me/6282274241198' 
global.fgyt = 'https://wa.me/6282274241198'
global.fgpyp = 'https://wa.me/6282274241198'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '⌛ loading...\n▰▰▰▱▱▱▱▱'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
