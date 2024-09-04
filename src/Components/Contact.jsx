import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [message,setMessage]= useState("");
  const [loading,setLoading]= useState(false);
  return (
    <section className="contact">
      <form>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input 
          type='text'
          value={name} 
          onchange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Email</label>
          <input 
          type='email'
          value={email}
          onchange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Message</label>
          <input type='text'
          value={message}
          onchange={(e)=>setMessage(e.target.value)}/>
        </div>
        <button type="submit" dissabled={loading}
        style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
        {loading && <ClipLoader ssize={20} color="white"/>}  
        Send Messages</button>
      </form>

    </section>
        
    
  )
}

export default Contact