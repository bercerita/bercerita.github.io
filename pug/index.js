var olahData = () => {
	$('.usernamenya').text(localStorage.username)
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