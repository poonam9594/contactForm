import React,{useState} from 'react'
import emailjs from 'emailjs-com'
import validator from 'validator'

function Mailar() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
    function sendEmail(e){
       e.preventDefault();

        emailjs.sendForm('service_dwv2pht','template_u25oox8',e.target,
        'lLC-eudMUF0EL6RM2').then(res=>{
          alert("Mail Send Successfuly");
            console.log(res);
        }).catch(err=>{
          alert(err);
            console.log(err)
        });

        

    }
  return (
    <div className="container border" style={{marginTop:"50px",width:"50%", backgroundImage:'url("https://c4.wallpaperflare.com/wallpaper/715/830/515/simple-background-white-texture-white-background-web-design-wallpaper-thumb.jpg")',backgroundPosition:"center", backgroundSize:"cover"}}>
      <h1 style={{marginTop:"25px"}}>Contact Form</h1>
      <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label style={{marginLeft:"-203px"}}>Name:</label>
        <input className="form-control" type="text" name="name" required/>
        <label style={{marginLeft:"-203px"}}>Email:</label>
        <input className="form-control" type="email" name="user_email" required onChange={(e) => validateEmail(e)}/><br/>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
        <label style={{marginLeft:"-203px"}}>Message</label>
        <textarea className="form-control" name="message" row="4" required/>
        <input type="submit" value="send" className="form-control btn btn-primary"
        style={{marginTop:"30px"}}/>

      </form>
    </div>
  )
}

export default Mailar
