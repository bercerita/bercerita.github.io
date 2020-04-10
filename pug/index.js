var sekarang = new Date()
var tanggal = sekarang.getDate()
var bulan = sekarang.getMonth() + 1
var tahun = sekarang.getFullYear()
var tanggalSekarang = `${tanggal}/${bulan}/${tahun}`

var olahData = () => {
	$('.usernamenya').text(localStorage.username)
	$('.form-control').val('')
	$('.modal').modal('hide')
	loadingStart()
	$.get(database, data => {
		loadingDone()
		var datanya = new OlahJson(data)
		var ambil = datanya.query(`postingan?user_id=${localStorage.id}`).get()
		var ambilReverse = ambil.reverse()
		var isiIsian = ''
		for (var x of ambilReverse){
			isiIsian += `
				<div class='list-group-item isiPostingan' data-idPostingan='${x.id}'>
					<span class='judulnya'>${x.judul}</span>
					<span class='isinya sembunyi'>${x.isi}</span>
					<span class='pull-right tanggalnya'>${x.tanggal}</div>
				</div>
			`
		}
		$('.postingannya').html(isiIsian)
	})
}

if (!localStorage.id){
	$('.modalLogin').modal()
} else {
	olahData()
}

$('.formLogin').on('submit', x => {
	x.preventDefault()
	loadingStart()
	$.get(database, data => {
		loadingDone()
		var datanya = new OlahJson(data)
		var cek = datanya.query(`user?username=${$('.loginUsername').val()}&password=${$('.loginPassword').val()}`).get()
		if (cek.length > 0){
			localStorage.setItem('id', cek[0].id)
			localStorage.setItem('username', $('.loginUsername').val())
			$('.modalLogin').modal('hide')
			olahData()
		} else {
			alert('Username dan password salah')
		}
	})
})

$('.tambahBaru').click(() => $('.modalTambah').modal())

$('.formTambah').on('submit', x => {
	x.preventDefault()
	loadingStart()
	$.get(database, data => {
		loadingDone()
		var datanya = new OlahJson(data)
		var ambil = datanya.query(`postingan?user_id=${localStorage.id}`).post({
			'tanggal': tanggalSekarang,
			'judul': $('.tambahJudul').val(),
			'isi': $('.tambahIsi').val(),
			'user_id': localStorage.id
		}).get()
		loadingStart()
		$.ajax({
			url: database,
			headers: {
				'Content-Type': 'application/json'
			},
			type: 'put',
			data: JSON.stringify(ambil),
			success: () => {
				loadingDone()
				olahData()
			}
		})
	})
})

$(document).on('click', '.isiPostingan', function(){
	localStorage.setItem('idPostingan', $(this).data('idPostingan'))
	$('.tampilJudul').text($(this).find('.judulnya').text())
	$('.tampilIsi').text($(this).find('.isinya').text())
	$('.tampilTanggal').text($(this).find('.tanggalnya').text())
	$('.modalTampil').modal()
})

$('.logout').click(() => {
	localStorage.removeItem('id')
	$('.modalLogin').modal()
})