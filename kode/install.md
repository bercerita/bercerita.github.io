# Cara tepat menginstall paket Linux yang berbentuk file

Bagaimana caramu menginstall paket Linux yang berbentuk file (.deb)? Apakah langsung dengan perintah ini:

```bash
sudo dpkg -i ./paket.deb
```

Biasanya sih tutorial-tutorial yang kita baca menganjurkan perintah seperti itu. Namun, sebenarnya yang lebih baik adalah dengan cara seperti ini:

```bash
sudo apt install ./paket.deb
```

Nah, apa bedanya? Bukankah kedua-duanya adalah cara menginstall aplikasi dari file?

Bedanya adalah ketika paket aplikasi yang kita install itu memerlukan (dependency) dari beberapa library. Dan library-library tersebut tidak tersedia di dalam paket maupun di dalam komputer kita. Kalau menggunakan cara pertama, pasti akan error. Namun, jika menggunakan cara kedua, dia akan mendownload paket-paket yang kurang itu di internet.