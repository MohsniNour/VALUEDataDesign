import { User } from "../user/user";

export class Project {
    idProject !: number;
    name !: string;
    lastUpdatedDate!: Date;
    formattedDate!: string|null;
    order !: number;
    user !: User;
}
