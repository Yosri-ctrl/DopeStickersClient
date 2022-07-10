import { publicReq } from "../reqMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res= await publicReq.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
        console.log(err)
    }
}