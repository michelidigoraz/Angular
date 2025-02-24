import { Geo } from "./geo";

export interface Addres {
    street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}
