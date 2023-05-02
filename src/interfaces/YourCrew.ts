import { Dispatch, SetStateAction } from "react";

export interface YCrew {
    imagePerson:  string;
    rolePerson: string;
    namePerson: string;
    descriptionPerson: string;
    seteador: Dispatch<SetStateAction<number>>
}

/* {Dispacth<Setstateaction<number>>} */