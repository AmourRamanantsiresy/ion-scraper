import { ChangeEvent, FC, useState } from "react";
import { IFooterProps2 } from "../Interfaces/PrincipalInterface";

export const SearchBar: FC<IFooterProps2> = (props) => {
    const [value, setValue] = useState<number>(0);
    const { last_index, change, page } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(parseInt(e.currentTarget.value));
    }

    const setChange = (): void => {
        if (value != page && value > 0 && value <= last_index) {
            change(value);
        }
    }

    return (
        <div className="input-group h-75 mrg-2">
            <div className="w-10">
                <input onChange={handleChange} value={value} type="number" className="form-control" />
            </div>
            <button className="btn btn-outline-primary">/ {last_index}</button>
            <button onClick={() => setChange()} className="btn btn-outline-primary">To page</button>
        </div>
    );
} 