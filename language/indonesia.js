exports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

exports.first_chat = (botname, pushname) => {
    return `Hai ${pushname}, Nama Saya ${botname} - Saya Adalah Bot Telegram Multi Fungsi, Klik /menu Untuk Mengetahui Lebih Lanjut Tentang Cara Menggunakan Bot Ini.

Bergabung Ke Grup Bot https://t.me/kirara_area - Agar Mendapatkan Informasi Terbaru

Kirim Perintah /privacy Untuk Melihat Syarat Dan Ketentuan Penggunaan Bot.
`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. Gunakan Dengan Bijak"
exports.getStyle = (style, style2) => {
    return `**${style2} Yang Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yang Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Sedang Diproses`"
exports.ok = `Done ✅`
exports.menu = async (alpha, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
    var ini_anu = `👋 Hai ${pushname}!

BOT INFO
• Creator: @${OWNER_NAME}
• Sponsored: @BotFather
• Prefix: ${prefix}
• Total Hit: ${hitall}
• Speed: ${latensii.toFixed(4)} Second
• Memory Used: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
• Hostname: ${os.hostname()}
• Platform: ${os.platform()}
• Runtime: ${simple.runtime(process.uptime())}

DATE INFO
• Hijriah : ${dateIslamic}

USER INFO
• Name: ${pushname}
• Profile: @${pushname}
| Owner : ${isCreator ? 'True' : `False`}

BOT COMMUNITY
• https://t.me/kirara_area
`
    var button = [
        [{
                text: '🇯🇵 ANIME',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'ASUPAN 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
                text: '♀️ CECAN',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'COGAN️ ♂️',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
                text: '📥 DOWNLOAD',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'EPHOTO 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            },
        ],
        [{
                text: '🎨 LOGO MAKER',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'ISLAMIC 🕌',
                callback_data: 'islamcmd ' + user_id
            },
        ],
        [{
                text: '🔞 NSFW & SFW',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'PHOTOOXY 📸',
                callback_data: 'photooxycmd ' + user_id
            },
        ],
        [{
                text: '👑 OWNER',
                callback_data: 'owner ' + user_id
            },
            {
                text: 'TEXT PRO 🖌️',
                callback_data: 'textprocmd ' + user_id
            },
        ],
    ]
    try {
        await alpha.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await alpha.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.animecmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'menucmd ' + user_id
            },
            {
                text: 'ASUPAN 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `ANIME 🇯🇵
/akame
/anna
/asuna-yuki
/ayuzawa
/chitoge
/emilia
/erza
/hinata
/inori
/kaga-kouko
/kaori-miyazono
/kotori-minami
/killua
/mikasa
/mio-akiyama
/mizore-sirayuki
/nakiri-alice
/naruto
/riyas-gremori
/sakura
/sento-isuzu
/shana
/shiina
/shinka
/winry
/yukino
/yuzuki
/mikosiba
/luffy
/zoro
/ussop
/sanji
/minato
/boruto
/sarada
/mitsuki
/orochimaru
/tsunade
/kakashi
/rimuru
/sagiri
/natsu
/tanjirou
/loli

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.asupancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'CECAN ♀️',
                callback_data: 'cecancmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `ASUPAN 😋
/chika
/rikagusriani
/bocil
/geayubi
/santuy
/ukhty
/asupan
/delvira
/ayu
/bunga
/aura
/nisa
/ziva
/yana
/viona
/syania
/riri
/syifa
/mama-gina
/alcakenya
/mangayutri

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cecancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'asupancmd ' + user_id
            },
            {
                text: 'COGAN️ ♂️',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `CECAN ♀️
/china
/indonesia
/malaysia
/thailand
/korea
/japan
/vietnam
/jenni
/jiiso
/lisa
/rose

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cogancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'DOWNLOAD 📥 ',
                callback_data: 'downloadcmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `COGAN ♂️
/wuyifan
/suga
/parkchanyeol
/ohsehun
/luhan
/kimtaehyung
/kimseok
/kimnanjoon
/kimminseok
/kimjunmyeon
/kimjong
/kimjondae
/jungkook
/jimin
/jhope
/huangzitao
/dohkyungsoo
/baekhyung

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.downloadcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'cogancmd ' + user_id
            },
            {
                text: 'EPHOTO 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `DOWNLOAD 📥
/ytmp4
/ytmp3
/play
/ytsearch
/igdl
/igphoto
/igvideo
/igreels
/pinterest
/mediafire
/tiktok
/tiktokaudio

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'NEXT ➡️',
                callback_data: 'ephotocmd2 ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `EPHOTO 360 🖼️
/1917text
/angelwing
/announofwin
/birthdaycake
/capercut
/cardhalloween
/christmascard
/christmasseason
/covergamepubg
/covergraffiti
/dragonfire
/embroider
/fabrictext
/facebookgold
/facebooksilver
/funnyanimations
/funnyhalloween
/galaxybat
/galaxywallpaper
/generalexam
/glowingtext
/graffiti3d
/graffititext
/graffititext2
/graffititext3
/greetingcardvideo
/halloweenbats
/heartcup
/heartflashlight
/horrorletter
/icetext
/instagramgold
/instagramsilver
/lightningpubg
/lovecard
/lovelycute
/masteryavatar
/merrycard
/messagecoffee
/metalstar
/milkcake
/modengold3

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'LOGO MAKER 🎨',
                callback_data: 'logocmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `EPHOTO 360 🖼️
/moderngold
/moderngold2
/moderngoldsilver
/nameonheart
/noeltext
/projectyasuo
/pubgbirthday
/pubgglicthvideo
/pubgmascotlogo
/puppycute
/realembroidery
/retrotext
/rosebirthday
/snowontext
/starsnight
/summerbeach
/sunglightshadow
/textcakes
/texthalloween
/textonglass
/textsky
/thundertext
/twittergold
/twittersilver
/viettel
/vintagetelevision
/watercolor2
/womansday
/writeblood
/writegalaxy
/writehorror
/youtubegold
/youtubesilver
/zombie3d
/shirtclub
/steellettering
/letterstext
/barcashirt
/premiercup
/stylepoligon
/lifebuoys
/juventusshirt

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'NEXT ➡️',
                callback_data: 'logocmd2 ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `LOGO MAKER 🎨
/anonymous2
/astronotspace
/avatar3q360
/avatarff
/avatarleagueofking
/avatarlolbyname
/avataroverwatch
/bannerofaov
/bannerofaov2
/bannerofapex
/banneroffreefire
/banneroflol
/bannerofoverwatch
/bannerofpubg
/bannerytcsgo
/beautifulgalaxylol
/beautifulshimmering
/blueneon
/circlemarcotteam
/colorfulpubg
/companylogo
/companylogo2
/coverbannerlol
/coverdota2
/coverfblol
/coverfreefirefb
/coverleagueofking
/coverloknew
/coverofwarface
/coveronepiecefb
/crossfirecover
/crossfirestyle
/csgocover

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'ISLAMIC 🕌',
                callback_data: 'islamcmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `LOGO MAKER 🎨
/cutegirlgamer
/cyberhunterfb
/dragonballfb
/effect3donbeach
/elegantrotation
/fbgamepubgcover
/footballteam
/gaminglogo4fvs
/gamingmascot
/gradientlogo
/gunlogogaming
/introvideomaker
/letterlogos 
/logoaccording 
/logogamingassasin 
/lolcoverbyname 
/lolpentakill 
/lolwallpaper 
/maketeamlogo 
/mascotstyle 
/metalmascot 
/newlolavatar 
/overwatchcover 
/overwatchwallpaper 
/pencilsketch 
/pubgcutelogo 
/pubglogomaker 
/rovwallpaper 
/rovwallpaperhd 
/teamlogo 
/wallpaperaov 
/wallpaperml

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.islamcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'NSFW & SFW 🔞',
                callback_data: 'nsfwcmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `ISLAMIC 🕌
/asmaulhusna
/kisahnabi
/jadwalshalat
/randomquran
/randomquran2
/dictator
/listsurah
/tafsirsurah
/alquranaudio

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.nsfwcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'islamcmd ' + user_id
            },
            {
                text: 'PHOTOOXY 📸',
                callback_data: 'photooxycmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `NSFW & SFW 🔞
/baka
/smug
/neko-sfw
/hentai-gif
/spank
/blowjob
/cumarts
/eroyuri
/eroneko
/erokemonomimi
/erokitsune
/ero
/feet
/erofeet
/feetgif
/femdom
/futanari
/hentai
/holoero
/holo
/keta
/kitsune
/kemonomimi
/pussyart
/pussywankgif
/girl-solo
/girl-solo-gif
/tits
/trap
/yuri
/avatar2
/anal
/bj
/boobs
/classic
/cumsluts
/kuni
/lesbian
/neko
/neko-gif
/ahegao
/bdsm
/cuckold
/cum
/foot
/gangbang
/glasses
/jahy
/masturbation
/nsfw-neko
/orgy
/panties
/tentacles
/thighs
/zettai
/cuddle
/foxgirl
/kemonomimi2
/woof
/holo2
/hug
/kiss
/lizard
/meowi
/neko2
/pat
/poke
/slap
/tickle

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.photooxycmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'TEXT PRO 🖌️',
                callback_data: 'textprocmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `TEXT PRO 🖌️
/typography-flower
/under-flower
/bevel-text
/silk-text
/sweet-andy
/smoke-typography
/carvedwood
/scary-cemetery
/royallook
/coffeecup2
/illuminated
/harry-potter2
/birthday-cake
/embroidery
/flaming
/furtext
/nightsky
/glow-rainbow
/gradient-avatar
/white-cube
/graffiti-cover
/rainbow-shine
/smoky-neon
/quotes-underfall
/vector-nature
/yellow-rose
/love-text
/underwater-ocean
/nature-text
/wolf-metal
/summer-text
/wooden-board
/quote-wood
/love-text
/quotes-undergrass
/naruto-banner
/love-message
/textoncup2
/burn-paper
/smoke
/romantic-messages
/shadow-sky
/text-cup
/coffecup
/battlegrounds-logo
/battlefield4
/text-8bit

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'photooxycmd ' + user_id
            },
            {
                text: 'NEXT ➡️',
                callback_data: 'textprocmd2 ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `TEXT PRO 🖌️
/3dbox
/3dchrome
/3dglue
/3dstone
/abstra
/advanced
/bear
/berry
/biscuit
/black-metal
/blackpink
/blood
/blood2
/blue-balloon
/blue-gem
/blue-glass
/blue-glitter
/blue-jewelry
/blue-metal
/blue-sparkling
/bokeh
/bread
/broken
/bronze-glitter
/candy
/captain-as2
/carbon
/chocolate
/chrismast
/christmas
/cloudsky
/cyan-balloon
/cyan-glass
/cyan-jewelry
/cyan-sparkling
/dark-gold
/decorate
/decorate-purple
/decorative
/deluxe-gold
/demon
/denim
/discovery
/dropwater
/drug
/embossed
/engraved
/equalizer
/eroded-metal

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'textprocmd ' + user_id
            },
            {
                text: 'NEXT ➡️',
                callback_data: 'textprocmd3 ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `TEXT PRO 🖌️
/fabric
/fiction
/firework
/glitch
/gloss
/glossy
/glossy-blue
/glossy-carbon
/gold-balloon
/gold-glitter
/gold-sparkling
/golden
/gradient
/gradient2
/green-balloon
/green-glass
/green-glitter
/green-jewelry
/green-neon
/green-sparkling
/halloween
/halloween2
/holographic
/honey2
/hot-metal
/ice
/joker
/juice
/koifish
/luxury2
/magma
/marble
/marble2
/matrix
/metal-silver
/metaldark
/metallic2
/minion
/multicolor
/natural
/neon
/neon-devil
/neon-light
/neon2
/neonc
/neonlight
/neonligth2
/newyear
/newyear2
/orange-glass
/orange-jewelry
/oscar
/papercut
/peridot
/pink-balloon
/pink-glitter

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd3 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ BACK',
                callback_data: 'textprocmd2 ' + user_id
            },
            {
                text: 'ANIME 🇯🇵',
                callback_data: 'animecmd ' + user_id
            }
        ],
        [{
            text: '👑 OWNER 👑',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `TEXT PRO 🖌️
/pink-sparkling
/purple
/purple-balloon
/purple-gem
/purple-glass
/purple-glitter
/purple-jewelry
/purple-shiny-glass
/purple-sparkling
/rainbow2
/red-balloon
/red-glass
/red-jewelry
/red-sparkling
/road-warning
/robot
/rock
/rusty
/scifi
/shiny
/silver-glitter
/silver-jewelry
/sircuit
/skeleton
/sketch
/snow
/steel
/strawberry
/summer
/summery
/thunder
/thunder2
/toxic
/transformer
/underwater
/wall
/water-pipe
/watercolor
/wicker
/wonderful-graffiti
/wood
/writing
/xmas
/yellow-glass
/yellow-jewelry
/horror
/game8bit
/layered
/glitch2
/cool-graffiti
/cool-wall-graffiti
/realistic
/space3d
/glitch-tiktok
/stone
/marvel
/marvel2
/metal-rose-gold
/pornhub
/avengers
/metal-rainbow
/metal-gold
/metal-galaxy
/lion
/wolf-black-white
/wolf-galaxy
/ninja
/3dsteel
/horror2
/lava
/bagel

`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}