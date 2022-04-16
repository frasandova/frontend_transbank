import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

export const TransbankResponse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [wsToken, setWsToken] = useState(searchParams.get("token_ws"))
  const [stateResponseTransaction, setStateResponseTransaction] = useState({})
  console.log('token_ws', wsToken)

useEffect(() => {
  console.log('entro useeffect')
  // makePostCommitTransaction();
}, []);


    const makePostCommitTransaction = async () => {
      console.log('makePostCommitTransaction')
      // let res = await axios.post('http://webcode.me');
      let body = {
        "token_ws": wsToken,
        "TBK_TOKEN": null,
        "TBK_ORDEN_COMPRA": 1234567,
        "TBK_ID_SESION": 1234567
    };
      await axios.post('http://localhost:8081/api/transbank/commitTransaction',body)
      .then(response => {
        console.log('response', response);
        setStateResponseTransaction(response.data)

      })
      .catch(error => {
          console.error('There was an error!', error);
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
