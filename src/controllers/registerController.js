
import registerService from "../services/registerService.js";
import errorHandler from "../helpers/errorHandler.js";

const registerController = {
    register:  async(request, response) => {
        try {

            if (!registerService.validateRegister(request)) {
                return response.status(400).json({ message: "Invalid data" });
            }
            
            if (!registerService.userExists(request.body.email)) {
                return response.status(409).json({ message: "User already exists" });
            }

            const result = await registerService.register(request);
            return response.status(200).json(result);
            
        } catch (error) {
            return errorHandler.handle(error, response);
        }
    },
};

export default registerController;