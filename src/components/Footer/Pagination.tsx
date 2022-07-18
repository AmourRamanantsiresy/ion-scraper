import { FC } from "react";
import { IFooterProps2 } from "../Interfaces/PrincipalInterface";

export const Pagination: FC<IFooterProps2> = (props) => {
    const { last_index, page, change } = props;
    return (
        <div className="input-group">
            <ButtonOP label="<" onClick={last_index != 1 ? change : (n: number) => { }} page={page} />
            <ButtonOP label={page.toString()} page={page} />
            <ButtonOP page={page} label=">" onClick={last_index != page ? change : (n: number) => { }} />
        </div>
    );
}

const ButtonOP: FC<{ onClick?: (page: number) => void, label: string, page?: number }> = (props) => {
    const { label, onClick, page } = props;

    const change = () => {
        if (onClick != undefined && page != undefined) {
            onClick(
                label === "<"
                    ? (page - 1)
                    : label === ">"
                        ? (page + 1)
                        : parseInt(label))
        }
    }

    return (
        <button
            onClick={() => change()}
            className={"btn btn-outline-primary mb-3 " + (page?.toString() === label ? " bg-primary text-light" : "")}>
            {label}
        </button>
    );
}