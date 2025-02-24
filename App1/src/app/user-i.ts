import { Company } from "./company";

import { Addres } from "./addres";

export interface UserI {
    
    id: number;
	name: string;
	username: string;
	email: string;
	address: Addres;
	phone: string;
	website: string;
	company: Company;
}
// mirar lo del tema de las interfaces...
//  si hay que crear otra que tenga un array de estas mierdas
//https://jsonplaceholder.typicode.com/users