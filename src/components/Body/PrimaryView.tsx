import { IonFab } from "@ionic/react";
import { FC, useState } from "react";
import { IPrimaryData } from "../Interfaces/PrincipalInterface";

export const PrimaryView: FC<{ values: IPrimaryData, screen: React.RefObject<HTMLDivElement>, setValues: React.Dispatch<React.SetStateAction<IPrimaryData | undefined>> }> = (props) => {
    const { values, screen, setValues } = props;
    const [state, setState] = useState<boolean>(false);
    const open = () => {
        if (screen.current != null) {
            setValues(values);
            screen.current.style.visibility = 'visible';
        }
        screen.current?.classList.remove("fullscreenClose")
        screen.current?.classList.add("fullscreenOpen")
    }
    return (
        <div>
            <div onClick={() => open()} className="m-2 bg-dark items text-light p-2 rounded-3">
                <p className="fs-6">{values.title}</p>
                {
                    values.flag === 'urgent' &&
                    <div className="urgent">
                        <i className="text-danger fa fa-circle-exclamation"></i>
                    </div>
                }
                <div className="d-flex justify-content-between">
                    <small>{values.company} | {values.contract}</small>
                </div>
            </div>
        </div>
    );
}