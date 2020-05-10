# Menyelesaikan persamaan matematika

Soal:

2x + y + 2z = 2

Kode:

```coffeescript
# 2x + y + 2z = 2

mulai = -5
akhir = 5

for x in [mulai..akhir]
  for y in [mulai..akhir]
    for z in [mulai..akhir]
      if 2 * x + y + 2 * z is 2
        console.log "Jawaban: #{x}, #{y}, #{z}"
```

Hasil:

```
Jawaban: -5, 2, 5
Jawaban: -5, 4, 4
Jawaban: -4, 0, 5
Jawaban: -4, 2, 4
Jawaban: -4, 4, 3
Jawaban: -3, -2, 5
Jawaban: -3, 0, 4
Jawaban: -3, 2, 3
Jawaban: -3, 4, 2
Jawaban: -2, -4, 5
Jawaban: -2, -2, 4
Jawaban: -2, 0, 3
Jawaban: -2, 2, 2
Jawaban: -2, 4, 1
Jawaban: -1, -4, 4
Jawaban: -1, -2, 3
Jawaban: -1, 0, 2
Jawaban: -1, 2, 1
Jawaban: -1, 4, 0
Jawaban: 0, -4, 3
Jawaban: 0, -2, 2
Jawaban: 0, 0, 1
Jawaban: 0, 2, 0
Jawaban: 0, 4, -1
Jawaban: 1, -4, 2
Jawaban: 1, -2, 1
Jawaban: 1, 0, 0
Jawaban: 1, 2, -1
Jawaban: 1, 4, -2
Jawaban: 2, -4, 1
Jawaban: 2, -2, 0
Jawaban: 2, 0, -1
Jawaban: 2, 2, -2
Jawaban: 2, 4, -3
Jawaban: 3, -4, 0
Jawaban: 3, -2, -1
Jawaban: 3, 0, -2
Jawaban: 3, 2, -3
Jawaban: 3, 4, -4
Jawaban: 4, -4, -1
Jawaban: 4, -2, -2
Jawaban: 4, 0, -3
Jawaban: 4, 2, -4
Jawaban: 4, 4, -5
Jawaban: 5, -4, -2
Jawaban: 5, -2, -3
Jawaban: 5, 0, -4
Jawaban: 5, 2, -5
```