import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faLock,faUnlock,faPhone} from '@fortawesome/free-solid-svg-icons';



import { toast } from "react-toastify";
const Register = () => {
  const[username,usernamechange]=useState("");
  const[email,emailchange]=useState("");
  const[password,passwordchange]=useState("");
  const[confirm,confirmchange]=useState("");
  const[phonenumber,phonenumberchange]=useState("");
  const[gender,genderchange]=useState("");
  const[usertype,usertypechange]=useState("");

  const navigate=useNavigate();
  const IsValidate=()=>{
    let isproceed=true;
    let errormessage='Please enter the value in';
    if(username===null || username===''){
      isproceed=false;
      errormessage += 'username';  
    }
    if(email===null || email===''){
      isproceed=false;
      errormessage += 'email';  
    }
    if(password===null || password===''){
      isproceed=false;
      errormessage += 'password';  
    }
    if(phonenumber===null || phonenumber===''){
      isproceed=false;
      errormessage += 'phonenumber';  
    }
    if(!isproceed){
      toast.warning(errormessage)
    }else{
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

      }else{
        isproceed=false;
        toast.warning('Please enter valid email')
      }
    

    }
    if(/^\d{10}$/.test(phonenumber)){

    }else{

        isproceed=false;
        toast.warning('Please enter valid phonenumber')
      }
      if(password!==confirm){
        toast.warning('Password do not match');
      }else{

      }
    
    return isproceed;

  }

  const handlesubmit=(e)=>{
    if(IsValidate()){

    

    e.preventDefault();
    let regobj={username,email,password,confirm,phonenumber,gender,usertype}
    //console.log(regobj);
    fetch("http://127.0.0.1:8000/api/login/",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(regobj)
      

    }).then((res)=>{
      toast.success('Registered successfully')
      navigate('/Login');
    }).catch((err)=>{
      toast.error('Failed :'+err.message);
    })
  }

  }
  <>
  return (
      <div className="offset-lg-3 col-lg-6" id="form">
        <form className="container"  onSubmit={handlesubmit}>
          <div className="card" >
            <div className="card-header">
            <h2 style={{color:'chocolate'}}>Create account</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                      <label>
                      &nbsp;&nbsp;<FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;User Name<span className="errmsg">*</span>
                        </label>
                      <input value={username} onChange={e=>usernamechange(e.target.value)} className="form-control" placeholder="Enter full name"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                      <label>
                      &nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Email-Id<span className="errmsg">*</span>
                        </label>
                      <input value={email} onChange={e=>emailchange(e.target.value)} type='email' className="form-control" placeholder="email@gmail.com"></input>
                  </div>
                </div>
                </div>
              
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                      <label>
                      &nbsp;&nbsp;<FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;Password<span className="errmsg">*</span>
                        </label>
                      <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control" placeholder="********"></input>
                  </div>
                </div>
              
                <div className="col-lg-12">
                  <div className="form-group">
                      <label>
                      &nbsp;&nbsp;<FontAwesomeIcon icon={faUnlock} />&nbsp;&nbsp;Confirm Password<span className="errmsg">*</span>
                        </label>
                      <input value={confirm} onChange={e=>confirmchange(e.target.value)} type="password" className="form-control" placeholder="********"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                  <label>
                  &nbsp;&nbsp;<FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;Phone<span className="errmsg">*</span>
                    </label>
                      <input value={phonenumber} onChange={e=>phonenumberchange(e.target.value)} className="form-control" placeholder="xxxxxx0100"></input> 
                  </div>
                </div>
               <div className="row">
                <div className="col-lg-12">
                  <div className="form-group" style={{height:'50px',position:'relative',top:'10px'}}>
                      <label>Gender<span className="errmsg">*</span></label>&nbsp;&nbsp;
                      <input type="radio"  checked={gender==='M'} onChange={e=>genderchange(e.target.value)} value="M" name="gender" className="app-check"></input>&nbsp;&nbsp;
                      <label>M</label>&nbsp;&nbsp;
                      <input type="radio"  checked={gender==='F'} onChange={e=>genderchange(e.target.value)} value="F" name="gender" className="app-check"></input>&nbsp;&nbsp;
                      <label>F</label>&nbsp;&nbsp;
                     

                  </div>
                  </div>
                  <div className="col-lg-12">
                  <div className="form-group">
                    <label>User Type<span className="errmsg">*</span></label>
                    <select value={usertype} onChange={e=>usertypechange(e.target.value)} className="form-control">
                      <option value="select user type" placeholder="select user type">select user type</option>
                      <option value="Student">Student</option>
                      <option value="Recruiter">Recruiter</option>


                    </select>


                  </div>

                </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Upload Resume<span className="errmsg">*</span></label>
                    <input type="file"></input>

                  </div>

                </div>
                </div>
                
             
      
             
  
         
            <div className="card-footer">
              <div className="col-lg-6">
              
              <button type="submit" className="btn btn-primary">Register</button>
              <button type="reset" className="btn btn-danger">Back</button>
              
              </div>
            </div>
            <div className="login-here">
            <p>already you have an account? <a href="#">login here</a></p>
            </div>
          </div>
          </div>
          </form>
          </div>
       
      
     
)
</>
};

export default Register;
