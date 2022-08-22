import { LEVELS } from "./levels.enum";


export class Contact {
    name = '';
    last_name = '';
    email = '';
    connected = false;
    level = LEVELS.NOMARL;

    constructor ( name, last_name, email, level, connected ) {
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.level = level;
        this.connected = connected;


    }
}