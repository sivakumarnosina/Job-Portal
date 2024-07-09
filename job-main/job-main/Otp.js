import React, { useState } from 'react'
import './Otp.css';
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


const Otp = () => {
    const navigate = useNavigate();
    const [enterotp, setenterotp] = useState('')
        
    const handlesubmit = async (e) => {
        e.preventDefault();
        if(enterotp === null || enterotp===" "){
            toast.error('enter valid otp')
        }
        try {
            const otpResponse = await fetch('http://127.0.0.1:8000/api/otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ enterotp }),
            });
            if(otpResponse.ok){
             toast.success('registered successfully.');
             navigate(`/signin`);
            } 
            }catch (error) {
            console.error('Error:', error.message);
            }
        
        
       
     }
        return (
            <div>
                <div className='container'>
                    <h4>You're almost done!</h4>
                    <h4>We sent an otp to your email</h4>

                    <form style={{ marginTop: '50px' }} method='post' onSubmit={handlesubmit}>
                        <label style={{ fontSize: '20px', fontWeight: 'bold' }}>Enter otp</label>
                        <input type='text' value={enterotp} onChange={e => setenterotp(e.target.value)} style={{ marginLeft: '20px' }}></input>
                        <button type='submit' style={{ marginLeft: '10px', padding: '5px', backgroundColor: 'green', color: 'white', fontSize: '20px' }}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    
    export default Otp
