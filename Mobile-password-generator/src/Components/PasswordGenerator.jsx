import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [formData, setFormData] = useState({
        password: '',
        char: 0,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        strength: 'Too Weak!'

    })

    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let LowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let UpperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let symbols = ['.',',',':','?','=','-','(',')','/','%','@','!','#','$','^','&','*']

    const generatePassword = (numbers, LowerCaseAlphabet, UpperCaseAlphabet,symbols, formData) => {
        let newArray = [];
        let newPassword = '';

        if(formData.uppercase == true) {
          newArray = newArray.concat(UpperCaseAlphabet);
        }
        if(formData.lowercase == true) {
          newArray = newArray.concat(LowerCaseAlphabet);
        }
        if(formData.numbers == true) {
          newArray = newArray.concat(numbers);
        }
        if(formData.symbols == true) {
          newArray = newArray.concat(symbols);
        }
        console.log('array')
        console.log(newArray)
        if(formData.char > 0) {
          for(let i=0; i < formData.char; i++) {
            let random = Math.floor(Math.random() * newArray.length);
             newPassword += newArray[random]
           }
           setFormData(prevFormData => {
            return {
                ...prevFormData,
                password: newPassword,
                strength: newArray.length >= 60 && formData.char > 10  
                ? 'Strong'
                : newArray.length >= 30 && formData.char >= 8 
                ? 'Medium' 
                : newArray.length >=  10 && formData.char > 4 
                ? 'Weak'  
                : 'Too Weak!'

            }
        })
           console.log('new Password: ',newPassword);
        }
        
    }

    const handleChange = (e) =>  {
        const {name, value, type, checked } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value

            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if(formData.uppercase == true || formData.lowercase == true || formData.numbers == true || formData.symbols == true) {
          generatePassword(numbers, LowerCaseAlphabet, UpperCaseAlphabet, symbols, formData);
        }
        
    }

   

    const handleCopy = (copy) => {
        navigator.clipboard.writeText(copy);
      }

      const strengthColors = {
        'Too Weak!': ['bg-red', 'bg-gray-500', 'bg-gray-500', 'bg-gray-500'],
        'Weak': ['bg-orange', 'bg-orange', 'bg-gray-500', 'bg-gray-500'],
        'Medium': ['bg-yellow', 'bg-yellow', 'bg-yellow', 'bg-gray-500'],
        'Strong': ['bg-neon_green', 'bg-neon_green', 'bg-neon_green', 'bg-neon_green']
      };

  return (
    <div className='bg-very_dark_gray text-gray pb-[64px]'>
      <h2 className='font-jetBrainsMono_Bold text-[16px] leading-[21.12px] text-center pt-[64px] pb-[16px]'>Password Generator</h2>

      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex items-center'>
          <label htmlFor='password' className='sr-only'>Password</label>
          <div className='relative flex-grow mx-4'>
            <input
              type='text'
              id='password'
              value={formData.password}
              readOnly='readonly'
              className='bg-dark_gray w-full h-[64px] px-[16px] text-light_gray'
            />
            <button type="button" className='absolute right-0 top-0 h-full px-3' onClick={() => handleCopy(formData.password)}>
                <img src="../../assets/images/icon-copy.svg" alt="Copy Icon" className='w-[17.5px] h-[20px]'/>
            </button>
          </div>
        </div>
        
        <div className='flex flex-col mt-[16px] bg-dark_gray mx-4 text-light_gray'>
        
        <div className='px-4 pt-4'>
            <label htmlFor="char" className='flex justify-between text-[16px] font-jetBrainsMono_Bold leading-[21px] '>Character Length
             <span className='text-[24px] leading-[31.68px] text-neon_green'>{formData.char}</span>
            </label>
            <input type="range" min="1" max="100" value={formData.char} id="char" name="char" onChange={handleChange} className='w-full slider'/>
        </div>

         <label className='container mt-[32px]'>
            <input type="checkbox" id="uppercase" name="uppercase" checked={formData.uppercase} onChange={handleChange} className=''/>
            <span className='checkmark'></span>
            <label htmlFor="uppercase">Include Uppercase Letters</label>
          </label>

          <label className='container'>
            <input type="checkbox" id="lowercase" name="lowercase" checked={formData.lowercase} onChange={handleChange}/>
            <span className='checkmark'></span>
            <label htmlFor="lowercase">Include Lowercase Letters</label>
          </label>

          <label className='container'>
             <input type="checkbox" id="numbers" name="numbers" checked={formData.numbers} onChange={handleChange}/>
             <span className='checkmark'></span>
             <label htmlFor="numbers">Include Numbers</label>
          </label>

          <label className='container'>
             <input type="checkbox" id="symbols" name="symbols" checked={formData.symbols} onChange={handleChange}/>
             <span className='checkmark'></span>
             <label htmlFor="symbols">Include Symbols</label>
          </label>
        
            <div className='bg-very_dark_gray mx-4 flex justify-between items-center px-4 py-[14px] uppercase font-jetBrainsMono_Bold text-[16px] leading-[21.12px]'>
                <div>
                    <p className='text-gray'>Strength</p>
                </div>
                <div className='flex items-center'>
                    <p>{formData.strength}</p>
                    <div className='ml-4 flex gap-[8px]'>
              {strengthColors[formData.strength].map((color, index) => (
                <div key={index} className={`border-2 ${color} w-[10px] h-[28px]`}></div>
              ))}
            </div>
                    
                </div>
            </div>
            
            <button type="submit" className='bg-neon_green text-dark_gray leading-[21px] font-jetBrainsMono_Bold uppercase py-[18px] px-[103px] mx-[16px] my-[16px]'>Generate</button>
        
        </div> 
        
      </form>
    </div>

  )
}

export default PasswordGenerator
