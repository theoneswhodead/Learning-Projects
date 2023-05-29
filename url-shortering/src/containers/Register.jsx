import React, {useState} from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    });

    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    });

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const isValidUsername = (username) => { //TO EDIT
        return true;
    }
    const isValidPassword = (password) => { //TO EDIT
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    }

    const isValidConfirm = (password, confirm) => {
        return password === confirm ? true : false
    }


    const handleChange = (e) => {
        const {name, value} = e.target

        if(name == 'email') {
            if(!isValidEmail(e.target.value)) {
                setError((prev) => ({
                    ...prev,
                     email: 'Please Enter corect email'
                }));
            } else {
                setError(null)
            }
            
        } else if (name == 'username') {
            if(!isValidUsername(e.target.value)) {
                setError((prev) => ({
                    ...prev,
                     username: 'Please Enter another username'
                }));
            } else {
                setError(null)
            }
        }else if (name == 'password') {
            if(!isValidPassword(e.target.value)) {
                setError((prev) => ({
                    ...prev,
                     password: 'Your password is too week'
                }));
            } else {
                setError(null)
            }
        }


        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [name]: value
            }
            
        })


        console.log(error);
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [name]: value
            }
            
        })
    }   

    const handlesubmit = (e) => {
        e.preventDefault();
       if(!error) {
        console.log('form Submit')
       }
    }
  return (
    <div >
      <form action="/register" method="post" className='flex flex-col items-center gap-[8px] my-[50px]' onSubmit={handlesubmit}>
        <label htmlFor="username" ></label>
        <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='Enter a username...' required className='border-2 border-violet px-12 py-3 rounded-xl placeholder:text-violet'/>

        {error && <span className='text-[12px] text-red'>{error.username}</span>}

        <label htmlFor="email"></label>
        <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Enter an email...' required className='border-2 border-violet px-12 py-3 rounded-xl placeholder:text-violet'/>

            {error && <span className='text-[12px] text-red'>{error.email}</span>}

        <label htmlFor="password"></label>
        <input type="text" name='password' value={formData.password} onChange={handleChange} placeholder='Enter a password...' required className='border-2 border-violet px-12 py-3 rounded-xl placeholder:text-violet'/>

        {error && <span className='text-[12px] text-red'>{error.password}</span>}

        <label htmlFor="confirm"></label>
        <input type="password" name='confirm' value={formData.confirm} onChange={handleChange} placeholder='Repeat a password...' required className='border-2 border-violet px-12 py-3 rounded-xl placeholder:text-violet'/>

        <button type="submit" className={`mt-[20px] px-[116px] py-[16px] rounded-xl bg-cyan hover:bg-cyan_hover focus:bg-violet text-white font-bold`}>Register</button>
      </form>
    </div>
  )
}

export default Register
