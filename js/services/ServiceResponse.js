
export class ServiceResponse {
    constructor(success, data, message, errors) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.errors = errors;
    }
}