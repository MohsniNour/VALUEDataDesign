import { Tag } from "../Tag/tag";
import { Tab } from "../tab/tab";

export class Attribute {
    idAttribute!:string;
	name!:string;
	description!:string;;
	type!:string;;
	lengthAttribute!: number;
	decimalAttribute!:number;
	requiredAttribute!:boolean;
	PKey!:boolean;
	FKey!:boolean;
	tab!:Tab;
	tags!:Tag[];
}
