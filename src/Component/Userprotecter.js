import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Userprotecter = (props) => {
    const history = useHistory()
    const [token , settoken] = useState("")
    useEffect(() => {
        const gettoken = sessionStorage.getItem("emptoken")
        if(!gettoken){
            return history.push("/")
        }
        settoken(gettoken)
    },[])

    if(!token){
        return <p>...loader</p>
    }
  return props.children
}
