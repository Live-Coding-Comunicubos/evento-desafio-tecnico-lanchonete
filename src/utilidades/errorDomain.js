export class ErrorDomain extends Error {
    domain = true
    constructor(message){
        super(message)
    }
}