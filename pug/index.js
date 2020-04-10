if (!localStorage.id){
	$('.modalLogin').modal()
}

$('.formLogin').on('submit', x => {
	x.preventDefault()
})