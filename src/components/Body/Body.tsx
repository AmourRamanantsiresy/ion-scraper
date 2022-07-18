import { FC, useRef, useState } from "react";
import { IPrimaryData } from "../Interfaces/PrincipalInterface";
import "./style.css";

export const Body: FC<{ values: (IPrimaryData[] | undefined) }> = ({ values }) => {
    const screen = useRef<HTMLDivElement>(null);
    const [valueToShow, setValue] = useState<IPrimaryData>();

    const close = () => {
        screen.current?.classList.remove("fullscreenOpen")
        screen.current?.classList.add("fullscreenClose")
        const i = setTimeout(() => {
            screen.current?.classList.remove("fullscreenClose");
            if (screen.current != null) {
                screen.current.style.visibility = 'hidden';
            }
        }, 1000)
    }
    return (
        <div className="">
            <div className="fullscreen" ref={screen}>
                <div className="d-flex w-100 justify-content-between p-2">
                    <button onClick={() => window.location.href = valueToShow?.href || ""} className="btn btn-outline-primary">Web page</button>
                    <button onClick={() => close()} className="btn btn-outline-primary">close</button>
                </div>
                <div className="mt-5 text-light container position-5">
                    <p className="text-light display-6">{valueToShow?.title}</p>
                    <p className="text-primary">Company:</p>
                    <p className="left-m">{valueToShow?.company}</p>
                    <p className="text-primary">Contract:</p>
                    <p className="left-m">{valueToShow?.contract}</p>
                    <p className="text-primary">Description:</p>
                    <p className="left-m">{valueToShow?.description}</p>
                </div>
            </div>
            <div className="overflowPos">
                {
                    values?.map((e: IPrimaryData, k: number) => <PrimaryView setValues={setValue} screen={screen} key={k} values={e} />)
                }
            </div>
        </div>
    );
}

const PrimaryView: FC<{ values: IPrimaryData, screen: React.RefObject<HTMLDivElement>, setValues: React.Dispatch<React.SetStateAction<IPrimaryData | undefined>> }> = (props) => {
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
                <div className="d-flex justify-content-between">
                    <small>{values.company} | {values.contract}</small>
                </div>
            </div>
        </div>
    );
}


//
