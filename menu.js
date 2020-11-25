exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `◆ --[ *MENU ${BotName}* ]-- ◆
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

● *${tampilTanggal}*
● *${tampilWaktu}*

● Command / Perintah :
   
=> *PEMBUAT STICKER*
_${BotName} akan mengirimkan stickermu dengan caption #sticker!_
Perintah: #sticker
Contoh: kirim gambar dengan caption #sticker

=> *FITUR PANTUN*
_${BotName} akan mengirimkan pantun secara random!_
Perintah: #pantun
Contoh: #pantun

=> *PENYEGAR TIMELINE*
_${BotName} akan mengirimkan gambar cogan/cecan sesuai yang kamu kirim!_
Perintah: #ptl [cewek/cowok]
Contoh: #ptl cewek

=> *FITUR ANIME*
_${BotName} akan mengirimkan gambar anime secara random!_
Perintah: #randomanime
Contoh: #randomanime

=> *FITUR QURAN*
_${BotName} akan mengirimkan ayat-ayat quran secara random!_
Perintah: #quran
Contoh: #quran

=> *INFORMASI BOT*
_${BotName} akan mengirimkan informasi tentang bot!_
Perintah: #info
Contoh: #info

=> *FITUR SAY*
_${BotName} akan mengirimkan kata kata sesuai yang kamu kirim!_
Perintah: #say [kata]
Contoh: #say hai sayang

=> *WIKIPEDIA*
_${BotName} akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
Perintah: #wiki [query]
Contoh: #wiki air

● JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
● MAU DONASI? SILAHKAN KETIK #donate

● *Iklan* : Donasi via pulsa/dana: 0895395342125

● Follow akun instagram admin ${instagramlu}

○ INFORMASI COVID-19 TERBARU!

○ POSITIF: *${corohelp.confirmed.value}*
○ SEMBUH: *${corohelp.recovered.value}*
○ MENINGGAL: *${corohelp.deaths.value}*
○ UPDATE: *${corohelp.lastUpdate}*

● _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

● Mau pasang iklan di *${BotName} ?*
● WA : *${whatsapplu}*
  
● Gunakan dengan bijak !
● Bot ini berjalan ${kapanbotaktif} !

● Official Grub [1] : ${grupch1}

● Official Grub [2] : ${grupch2}

  
◆ --[ *POWERED BY ${BotName}* ]-- ◆`
}
