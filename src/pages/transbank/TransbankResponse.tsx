import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

export const TransbankResponse = () => {

  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token"))
  // const [wsResponseCode, setResponseCode] = useState(searchParams.get("response_code"))
  // const [step, setStep] = useState(searchParams.get("step"))
  // const [tbkOrdenCompra, setTbkOrdenCompra] = useState(searchParams.get("tbkOrdenCompra"))
  // const [tbkIdSesion, settbkIdSesion] = useState(searchParams.get("tbkIdSesion"))
  
  const [stateResponseTransaction, setStateResponseTransaction] = useState({})
  

useEffect(() => {
  console.log('entro useeffect')
    if(!loading){
      makeGetCommitTransaction();
    }
}, []);


    const makeGetCommitTransaction = async () => {
      console.log('makeGetCommitTransaction')
      setLoading(true);
      // await axios.get(`http://localhost:8081/api/transbank/getResultTransaction/${token}`)
      await axios.get(`https://backend-transbank.herokuapp.com/api/transbank/getResultTransaction/${token}`)
      .then(response => {
        
        console.log('response', response);
        setStateResponseTransaction(response.data)
        setLoading(false);

      })
      .catch(error => {
          console.error('There was an error!', error);
          setLoading(false);
      });
  }

  
  return (
    <>
      <h1>TransbankResponse App Music Page</h1>
      <hr/>
      <pre>
        {
          JSON.stringify(stateResponseTransaction, null, 3)
        }
      </pre>
      
    </>
  )
}
