import { redirect } from "react-router-dom"
import { deleteItem } from "../helpers"
import { toast } from "react-toastify"

export async function logoutAction() {
    //deleteuser
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    //redirect
    toast.success("You deleted your account!")
    return redirect('/')
}