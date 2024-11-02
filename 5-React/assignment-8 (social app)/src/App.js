import React, { useEffect, useState } from 'react'
import Routing from './routing/Routing'
import './App.css'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './store/slices/authSlice'
import Spinner from './components/spinner/Spinner'

export default function App() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser(setLoading))
  }, [])
  

  return (
    <div>
    {loading ? <Spinner />:  <Routing />}
    </div>
  )
}
