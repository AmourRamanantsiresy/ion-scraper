import { Network } from "@capacitor/network";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { TSetterSecondary, IPage } from "../Interfaces/PrincipalInterface";
export const request = (page: number, setState: TSetterSecondary, setPage: IPage, changeS: React.Dispatch<React.SetStateAction<boolean>>): void => {
    axios.get("https://wspc52.herokuapp.com/" + page).then(res => {
        setState(res.data);
        setPage(page);
        changeS(false)
    }).catch(err => {

    });
}


export const networkCheck = (setStatus: (Dispatch<SetStateAction<boolean | null>>), status: (boolean | null)) => {
    if (status === null) {
        Network.getStatus().then(res => {
            setStatus(res.connected)
        })
    } else {
        Network.addListener('networkStatusChange', status => {
            setStatus(status.connected);
            console.log(status);
        });
    }
}