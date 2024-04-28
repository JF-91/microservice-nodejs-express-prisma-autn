

class ErrorHandler {


    handle(error, response) {

        const { name } = error;

        if (this.errorTypes[name]) {
            return this.errorTypes[name](error, response);
        }

        return this.internalServerError(error, response);
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

    badRequest(error, response) {
        return response.status(400).json({ message: error.message });
    }

    unauthorized(error, response) {
        return response.status(401).json({ message: error.message });
    }

    forbidden(error, response) {
        return response.status(403).json({ message: error.message });
    }

    conflict(error, response) {
        return response.status(409).json({ message: error.message });
    }

    internalServerError(error, response) {
        return response.status(500).json({ message: error.message });
    }

    serviceUnavailable(error, response) {
        return response.status(503).json({ message: error.message });
    }

    gatewayTimeout(error, response) {
        return response.status(504).json({ message: error.message });
    }

    tooManyRequests(error, response) {
        return response.status(429).json({ message: error.message });
    }

    notImplemented(error, response) {
        return response.status(501).json({ message: error.message });
    }
}

export default new ErrorHandler();