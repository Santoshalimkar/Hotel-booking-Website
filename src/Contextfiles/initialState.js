import { Category } from "@mui/icons-material"
import {fetchuserinfo} from "../Logincomponent/Userinfo"
const userinfo=fetchuserinfo()

export const initialState={
    user:userinfo,
    date:[],
    guest:[],
    Category:null,
    fillter:{},
    guestdetails:[]

}