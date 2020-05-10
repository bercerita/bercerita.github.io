# Menyelipkan kata "gan" di setiap kata

```coffeescript
teks = "Ayo gan meramal masa depan dengan hex"

mantra = "gan"
console.log teks.split(" ").join(" #{mantra} ").concat " #{mantra}"
```