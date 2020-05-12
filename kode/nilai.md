# Cara menghitung nilai dengan cepat menggunakan Coffeescript

Misalnya aja kunci jawabannya:

```
akdflafjalkdsjflkafs
```

Kemudian, jawaban-jawaban siswa:

```
aksdjfklajslfdkjalks
laksjkfdljalsfkljasj
klklasjdlkfjkalsjdfk
kklasksejkadskjkfajd
askdljfkajsdfkjaksdj
akdflafjalkdsjflkafs
```

Lalu, berapakah nilainya untuk masing-masing anak? Nomor berapa aja salahnya?

Ini scriptnya:

```coffeescript
kunci = "akdflafjalkdsjflkafs"
jawaban = """
aksdjfklajslfdkjalks
laksjkfdljalsfkljasj
klklasjdlkfjkalsjdfk
kklasksejkadskjkfajd
askdljfkajsdfkjaksdj
akdflafjalkdsjflkafs
"""

jawaban = jawaban.split "\n"
hasil = []
for x in jawaban
  teks = ""
  for y, n in x
    if y is kunci[n]
      teks += "1"
    else
      teks += "0"
  hasil.push teks
hasil2 = []
for x, n in hasil 
  nomor = n + 1
  total = 0
  for y in x
    if y is "1"
      total++
  nilai = total / x.length * 100
  hasil2.push {nomor: nomor, data: x, total: total, nilai: nilai}
console.log hasil2
```

Hasilnya:

```javascript
[
  { nomor: 1, data: '11000000100000000001', total: 4, nilai: 20 },
  { nomor: 2, data: '00000010000010010100', total: 4, nilai: 20 },
  { nomor: 3, data: '00000000000000000010', total: 1, nilai: 5 },
  { nomor: 4, data: '01000000000110000100', total: 4, nilai: 20 },
  { nomor: 5, data: '10001010100100001000', total: 6, nilai: 30 },
  { nomor: 6, data: '11111111111111111111', total: 20, nilai: 100 }
]
```