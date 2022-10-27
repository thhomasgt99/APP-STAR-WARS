import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Info } from '../components/info'
import { Header } from '../components/header'
import AppContext from '../context/AppContext'
import useInitialSate from '../hooks/useInitialState'

import '../styles/styles.scss'

const App = () => {
	const initialState = useInitialSate()
	return (
		<AppContext.Provider value={initialState} >
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/info' element={<Info />} />
						<Route path='*' element={<h2>NOT FOUND</h2>} />
					</Routes>
				</BrowserRouter>
			</AppContext.Provider>
	)
}

export default App