import { response } from "express";

class ErrorHandler {


    handle(error, request, response, next) {
        const { name } = error;
        const errorType = this.errorTypes[name];
        errorType(request, response, next);
    }

   errorTypes = {
        "SyntaxError": this.badRequest,
        "UnauthorizedError": this.unauthorized,
        "ForbiddenError": this.forbidden,
        "ConflictError": this.conflict,
        "InternalServerError": this.internalServerError,
        "ServiceUnavailableError": this.serviceUnavailable,
        "GatewayTimeoutError": this.gatewayTimeout,
        "TooManyRequestsError": this.tooManyRequests,
        "NotImplementedError": this.notImplemented,
    }

    notFound(request, response, next) {
        const error = new Error("Not found");
        error.status = 404;
        next(error);
    }

    methodNotAllowed(request, response, next) {
        const error = new Error("Method not allowed");
        error.status = 405;
        next(error);
    }

    badRequest(request, response, next) {
        const error = new Error("Bad request");
        error.status = 400;
        next(error);
    }

    unauthorized(request, response, next) {
        const error = new Error("Unauthorized");
        error.status = 401;
        next(error);
    }

    forbidden(request, response, next) {
        const error = new Error("Forbidden");
        error.status = 403;
        next(error);
    }

    conflict(request, response, next) {
        const error = new Error("Conflict");
        error.status = 409;
        next(error);
    }

    internalServerError(request, response, next) {
        const error = new Error("Internal server error");
        error.status = 500;
        next(error);
    }

    serviceUnavailable(request, response, next) {
        const error = new Error("Service unavailable");
        error.status = 503;
        next(error);
    }

    gatewayTimeout(request, response, next) {
        const error = new Error("Gateway timeout");
        error.status = 504;
        next(error);
    }

    tooManyRequests(request, response, next) {
        const error = new Error("Too many requests");
        error.status = 429;
        next(error);
    }

    notImplemented(request, response, next) {
        const error = new Error("Not implemented");
        error.status = 501;
        next(error);
    }
}

export default new ErrorHandler();