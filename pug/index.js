var sekarang = new Date()
var tanggal = sekarang.getDate()
var bulan = sekarang.getMonth() + 1
var tahun = sekarang.getFullYear()
var tanggalSekarang = `${tanggal}/${bulan}/${tahun}`

$.expr[':'].contains = $.expr.createPseudo(function(arg){
	return function(elem){
		return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
	}
})

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
					<span class='pull-right tanggalnya'>${x.tanggal}</div>
					<span class='judulnya'>${x.judul}</span>
					<span class='isinya sembunyi'>${x.isi}</span>
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

$('.inputanTambah').on('keyup', () => {
	localStorage.setItem('cacheJudul', $('.tambahJudul').val())
	localStorage.setItem('cacheIsi', $('.tambahIsi').val())
})

$('.tambahJudul').val(localStorage.cacheJudul)
$('.tambahIsi').val(localStorage.cacheIsi)

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
			'user_id': Number(localStorage.id)
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
				localStorage.removeItem('cacheJudul')
				localStorage.removeItem('cacheIsi')
				olahData()
			}
		})
	})
})

$(document).on('click', '.isiPostingan', function(){
	localStorage.setItem('idPostingan', $(this).attr('data-idPostingan'))
	localStorage.setItem('judulPostingan', $(this).find('.judulnya').text())
	localStorage.setItem('isiPostingan', $(this).find('.isinya').text())
	localStorage.setItem('tanggalPostingan', $(this).find('.tanggalnya').text())
	$('.tampilJudul').text($(this).find('.judulnya').text())
	$('.tampilIsi').text($(this).find('.isinya').text())
	$('.tampilTanggal').text($(this).find('.tanggalnya').text())
	$('.modalTampil').modal()
})

$('.logout').click(() => {
	localStorage.removeItem('id')
	$('.modalLogin').modal()
})

$('.tampilHapus').click(() => {
	var tanya = confirm('Hapus kah?')
	if (tanya){
		loadingStart()
		$.get(database, data => {
			loadingDone()
			var datanya = new OlahJson(data)
			var ambil = datanya.query(`postingan/${localStorage.idPostingan}`).delete().get()
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
	}
})

$('.tampilEdit').click(() => {
	$('.modal').modal('hide')
	$('.editJudul').val(localStorage.judulPostingan)
	$('.editIsi').val(localStorage.isiPostingan)
	$('.modalEdit').modal()
})

$('.formEdit').on('submit', function(x){
	x.preventDefault()
	loadingStart()
	$.get(database, data => {
		loadingDone()
		var datanya = new OlahJson(data)
		var ambil = datanya.query(`postingan/${localStorage.idPostingan}`).put({
			"tanggal": localStorage.tanggalPostingan,
			"judul": $(this).find('.editJudul').val(),
			"isi": $(this).find('.editIsi').val(),
			"user_id": Number(localStorage.id)
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

$('.cari').on('keyup', function(){
	if ($('.cari').val() != ''){
		$('.isiPostingan').addClass('sembunyi')
		$('.isiPostingan').each(function(){
			if ($(this).is(":contains(" + $('.cari').val() + ")")) {
				$(this).removeClass('sembunyi')
			}
		})
	} else {
		$('.isiPostingan').removeClass('sembunyi')
	}
})