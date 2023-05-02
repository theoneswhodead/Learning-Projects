import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import React, { useRef, useEffect } from 'react'
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {

  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting"

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if(!isSubmiting) {
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmiting])


  return (
    <div className='form-wrapper'>
      <h2 className='h3'>
        Create Budget
      </h2>
      <fetcher.Form 
        method="post"
        className='grid-sm'
        ref={formRef}
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input type="text" name="newBudget" id='newBudget'
            placeholder='e.g., Groceries' required ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmout">Amout</label>
          <input type="number" step="0.01" name="newBudgetAmout" placeholder='e.g., $350'
            required
            inputMode='decimal'
          />
        </div>
        <input type="hidden" name="_action" value="create Budget"/>
        <button type='submit' className='btn btn-dark' disabled={isSubmiting}>

          {

            isSubmiting ? <span>Creating budget...</span> : (
              <>
                 <span>Create Budget</span> <CurrencyDollarIcon width={20}/>
              </>
)

          }

        </button>
      </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm
