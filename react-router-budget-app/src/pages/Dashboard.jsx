import React from 'react'
//helper functions
import { createBudget, fetchData, wait } from '../helpers'
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';

import { toast } from 'react-toastify';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm';

//loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets }
}

//action

export async function dashboardAction({request}) {

  await wait() 

    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);


  if(_action === 'newUser') {
    try{
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`welcome ${values.userName}`)
    }  catch(e) {
      throw new Error("There was a problem creating your account")
    }
  }

  if(_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })
      return toast.success("budget created")
    } catch(error) {
      throw new Error("There waw a problem your budget")
    }
  }

}


const Dashboard = () => {
    const {userName, budgets} = useLoaderData() 
  return (
    <>
        {userName ? (
          
          <div className="dashboard">
            <h1>Welcome back,
            <span className='accent'>{userName}</span></h1>
            <div className="grid-sm">

              {/* {budgets ? () : ()} */}
              {
                budgets && budgets.length > 0
                ? (
                  <div className="grid-lg">
                    <div className="flex-lg">
                     <AddBudgetForm/>
                     <AddExpenseForm />
                    </div>
                  </div>
                )
                : (
                  <div className="grid-sm">
                    <p>Personal budgeting is the secret to financial freedom.</p>
                    <p>Create a budget to get started!</p>
                    <AddBudgetForm budgets={budgets}/>
                  </div>
                )
              }
              
            </div>
          </div>
          ) : (<Intro />)}
    </>
  )
}

export default Dashboard
