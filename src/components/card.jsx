import React from 'react'

export function Card ({name , height, mass, gender , item}){

	
	function arbi (){
		window.localStorage.setItem('info', JSON.stringify(item))
	}


	return (
		<div className='card'>
			<p>{name}</p>
			<p>{height}</p>
			<p>{mass}</p>
			<p>{gender}</p>
			<button onClick={arbi}><a href="/info">ver más</a></button>
	</div>
	)
}