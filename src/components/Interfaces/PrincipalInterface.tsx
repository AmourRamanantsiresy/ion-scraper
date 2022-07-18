import { Dispatch, SetStateAction } from "react";

export interface IPrimaryData {
    company: string;
    contract: string;
    description: string;
    href: string;
    limit_date: string | null;
    title: string;
}

export interface ISecondaryData {
    last_page: number;
    information: IPrimaryData[];
}

export interface IFooterProps {
    last_index: number;
    change: IRequest;
    page: number;
}

export interface IFooterProps2 {
    last_index: number;
    change: (page: number) => void;
    page: number;
}

export type IPage = Dispatch<SetStateAction<number>>;

export type IRequest = (page: number, setState: TSetterSecondary, setPage: IPage) => void;

export type TSetterSecondary = Dispatch<SetStateAction<ISecondaryData | null>>;