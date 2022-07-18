import { IonIcon } from "@ionic/react";
import { FC, useRef, useState } from "react";
import { IPrimaryData } from "../Interfaces/PrincipalInterface";
import { PrimaryView } from "./PrimaryView";
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
                <div className="d-flex w-100 p-2 justify-content-end">
                    {
                        valueToShow?.flag === "urgent" &&
                        <i className="text-danger topleft">Urgent</i>
                    }
                    <i onClick={() => close()} className="text-danger mc-2 fa-regular fa-circle-xmark sc-2"></i>
                </div>
                <InItems valueToShow={valueToShow} />
            </div>
            <div className="overflowPos">
                {
                    values?.map((e: IPrimaryData, k: number) => <PrimaryView setValues={setValue} screen={screen} key={k} values={e} />)
                }
            </div>
        </div>
    );
}

const InItems: FC<{ valueToShow: (IPrimaryData | undefined) }> = ({ valueToShow }) => {
    return (
        <div className="mt-5 text-light container position-5">
            <p className="text-light fs-5">{valueToShow?.title}</p>
            {valueToShow?.limit_date != null && <p>{valueToShow.limit_date}</p>}
            <hr className="mb-5" />
            <div className="d-flex w-100 justify-content-between">
                <p className="text-primary"><i className="fa fa-building"></i> Company:</p>
                <p onClick={() => window.location.href = valueToShow?.href || ""} className="text-primary"><i className="mrC-2 fa fa-globe"></i>Web page</p>
            </div>
            <p className="left-m">{valueToShow?.company}</p>
            <p className="text-primary"><i className="fa fa-file-signature"></i> Contract:</p>
            <p className="left-m">{valueToShow?.contract}</p>
            <p className="text-primary"><i className="fa fa-circle-info"></i> Description:</p>
            <p className="left-m">{valueToShow?.description}</p>
        </div>
    );
}