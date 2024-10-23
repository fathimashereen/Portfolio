import React from 'react'
import Header from '../../components/header'
import { BiPhone } from 'react-icons/bi'
import { Animate } from 'react-simple-animate'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import './style.scss'


const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [description,setDescription]=useState('')
  const [isSending, setIsSending] = useState(false);

  //handle submission
  const handleSubmission=async (e)=>{
    e.preventDefault();
    setIsSending(true);

    try{
      await emailjs.send(
        'service_cwqhotd',
        'template_clastif',
        {
          from_name: name,
          from_email: email,
          description: description,
        },
        'gapJKkY9un83koD0Q'
      );
    

    //clear data
    setName('');
    setEmail('');
    setDescription('');
    alert('thanks for the message');
  }
  catch (error){
    alert("something went wrong, try again")
  }finally{
    setIsSending(false);
  }
}


  //nameHandle
  const handleName=(e)=>{
    setName(e.target.value)
  }
  //emailHandle
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }  
  //descriptionHandle
  const handleDescription=(e)=>{
    setDescription(e.target.value)
  }
  return (
    <section id='contact' className='contact'> 
      <Header
      headerText='Contact Me'
      icon={<BiPhone size={40}/>}
      />

      <div className='contact__content'>  
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform:"translateX(-200px)"
        }}
        end={{
          transform:"translateX(0px)"
        }}
        >
          <h3 className='contact__content__header-text'>
            Let's talk!
          </h3>
        </Animate>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform:"translateX(200px)"
        }}
        end={{
          transform:"translateX(0px)"
        }}
        >
          <div className='contact__content__form'>
            <form onSubmit={handleSubmission}>
            <div className='contact__content__form__controlswrapper' >
              <div>
                <input name='name' value={name} onChange={handleName} required className='inputName' type={'text'}></input>
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>
              <div>
                <input name='email' value={email} onChange={handleEmail} required className='inputEmail' type={'email'}></input>
                <label htmlFor='email' className='emailLabel'>Email</label>
              </div>
              <div>
                <textarea name='description' value={description} onChange={handleDescription} required className='inputDescription' type={'text'} rows='5'></textarea>
                <label htmlFor='description' className='descriptionLabel'>Description</label>
              </div>
            </div>
            <button type="submit" disabled={isSending}> {isSending ? 'Sending...' : 'Submit'}</button>
            </form>
          </div>

        </Animate>
      </div>
    </section>
    
  )
}

export default Contact

