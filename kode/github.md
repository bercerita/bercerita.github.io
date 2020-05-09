# Cara menggunakan Github

Github adalah salah satu website yang menyediakan layanan git sebagaimana situs-situs lainnya semacam Gitlab, Bitbucket, dan situs-situs lainnya. Jadi, kita akan fokus membahas pada layanan gitnya aja.

Berikut ini adalah beberapa hal tentang git di Github:

## Buat akun Github dulu

## Install Git 

Di Termux:

```bash
pkg install git 
```

Di Linux:

```bash 
sudo apt install git 
```

## Setting Github di local (laptop/HP)

```bash
git config --global user.name usernamemu
git config --global user.email emailmu@gmail.com
```

## Membuat repositori

## Clone repositori

```bash
git clone --depth=1 https://usernamenya:password@github.com/username/nama-repositori
```

## Upload ke repositori

```bash
git status
git add -A .
git commit -m "Oke"
git push 
```

## Update data dari repositori

```bash
git pull 
```