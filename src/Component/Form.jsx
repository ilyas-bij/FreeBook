import React,{useState} from 'react'
import emailjs from 'emailjs-com';

function Form() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Res, setRes] = useState(false)
    const [Err, setErr] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        if (e.target[0].value !== '' && e.target[1].value !== '' ){
    
        emailjs.sendForm('service_d3bp0ng', 'template_bde51jh', e.target, 'user_GYrkZ0jywiK2OWh6QOVRh')
          .then((result) => {
              console.log(result.text);
              setemail('')
              setname('')
              setRes(true)
              setErr(false)
          }, (error) => {
              console.log(error.text);
          });
        }else{
            setErr(true)
            setRes(false)
        }
      };
  
    return (
        <div>
              <form  onSubmit={sendEmail}>
                   <div className="form-group">
                                            
                            <input type="text"  placeholder='Enter your name' id="name" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
                            <input type="text"  placeholder='Enter your Email' id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                   </div>
                   <button>Get It Now</button> {Res &&<label>check your email</label>} {Err &&<label className='Err'>enter your name and email</label>}
                 </form>
                   
        </div>
    )
}

export default Form
