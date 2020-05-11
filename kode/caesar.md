# Sandi Julius Caesar

Kode:

```coffeescript
kata = "Ayo Gan kita heck masa depan dengan Hex editor 🙂"
geser = 666

huruf = "abcdefggijklmnopqrsruvwz".split ""
kata = kata.toLowerCase().split ""
gabung = []
for x in kata
  if x.match(/[a-z]/) isnt null
    posisi = huruf.indexOf(x) + geser
    if posisi >= huruf.length
      posisi = posisi % huruf.length
    gabung.push huruf[posisi]
  else
    gabung.push x
console.log gabung.join ""
```

Hasilnya:

sri asg ecrs rwue gsms vwjsg vwgasg rwr wvcril 🙂