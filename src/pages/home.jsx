import React, { useEffect, useState, useContext } from 'react'
import { Card } from '../components/card'


export function Home() {
	const [apiData, setApiData] = useState([])
	const [flag, setFlag] = useState(1)

	const fetchResults = (num) => {
		fetch(`https://swapi.dev/api/people/?page=${num}&format=json`)
			.then(response => response.json())
			.then(data => setApiData(data.results))
		console.log(apiData)
	}

	function siguiete() {
		setFlag(flag + 1)
		fetchResults(flag)
	}

	function buscar(busqueda) {
		const inputValue = document.querySelector('.input').value
		fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
			.then(response => response.json())
			.then(data => setApiData(data.results))
		flag = 1
	}

	useEffect(() => {
		fetchResults(flag)

	}, [])

	return (
		<main>
			<aside className='buscador'>
				<input className='input' type="text" placeholder='buscar' value='luke'/>
				<button onClick={buscar}>buscar</button>
			</aside>
			<div className='cardsList'>
				{
					apiData.map(item =>
						<Card
							key={item.name}
							name={item.name}
							height={item.height}
							mass={item.mass}
							gender={item.gender}
							item={item} />
					)
				}
			</div>
			<button className='siguiente' onClick={siguiete}>Siguiente: {flag}</button>
		</main>
	)
}