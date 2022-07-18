import { FC, useState, Dispatch, SetStateAction } from "react";
import { IFooterProps, IFooterProps2 } from "../Interfaces/PrincipalInterface";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";
import "./style.css";

export const Footer: FC<IFooterProps2> = (props) => {
    const { last_index, change, page } = props;
    const [state, setState] = useState<{ search: boolean }>({ search: false });
    return (
        <div className="footer p-3 bg-dark w-100">
            <div className="d-flex justify-content-around">
                {
                    state.search
                        ? <SearchBar change={change} page={page} last_index={last_index} />
                        : <Pagination change={change} page={page} last_index={last_index} />
                }
                <button onClick={() => toggleSearch(setState)} className="btn btn-outline-primary mb-3">
                    <i className={"fa fa-" + (state.search ? "xmark" : "search")}></i>
                </button>
            </div>
        </div>
    );
}

const toggleSearch = (setState: Dispatch<SetStateAction<{ search: boolean; }>>): void => setState(e => ({ ...e, search: !e.search }));