import React from 'react'
import { Link } from 'react-router-dom'

export function Info(){

	let info = JSON.parse(window.localStorage.getItem('info'))
	console.log(info)

	return (
		<div className='info'>
			<p>name: {info.name}</p>
			<p>height: {info.height}</p>
			<p>mass: {info.mass}</p>
			<p>gender: {info.gender}</p>
			<p>hair color: {info.hair_color}</p>
			<p>skin color: {info.skin_color}</p>
			<p>eye color: {info.eye_color}</p>
			<p>birth year: {info.birth_year}</p>
			<hr />
			<Link to="/">volver</Link>
		</div>
	)
}