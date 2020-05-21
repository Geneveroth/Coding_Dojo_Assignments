import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function GetInfo({data, method, url, truthValue, id}){
    const [info, setInfo]=useState((data.info))
    const [truth, setTruth] =useState(truthValue.truth)
    useEffect(() => {
        axios[method](url)
        .then(res => setInfo(res.data))
        .catch(() => setTruth(truthValue))
        }, [id])
    }