import express, {Request, Response} from "express";
import { body } from "express-validator"
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../models/user";
import jwt from "jsonwebtoken";
import { validateRequest } from "../../middlewere/validation-handler";

const router = express.Router();

router.post('/api/users/signup',[
  body('email')
  .isEmail()
  .withMessage('email is not valid'),
  body('mobileNumber')
  //.isMobilePhone(locale: 'am-AM')
  // need to add filter to mobile phone
  .notEmpty()
  .withMessage('mobile number is not valid'),
  body('password')
  .trim()
  .isLength({min: 4, max: 20})
  .withMessage('password should be between 4 to 20 characters')
], validateRequest,
   async (req: Request, res: Response) =>{
  // const errors = validationResult(req)
  // if(!errors.isEmpty()){
  //  throw new RequestValidationError(errors.array()) 
  // }


  const { email ,password, mobileNumber }: {email: string, password: string, mobileNumber: string}  = req.body;
  // const hashedPassword = await Password.toHash(password);


  if (await User.findOne({email: email}) !== null){
    console.log('Bad request error')
    throw new BadRequestError('user is already exits');
  }
  else {
    console.log('creating a user')
    const newUser = User.build({email: email, password: password, mobileNumber: mobileNumber })
    await newUser.save();

    // Generate JWT
    const userJwt = jwt.sign({
      id: newUser.id,
      email: newUser.email
    }, process.env.JWT_KEY!)

    // Store it on session object
    req.session = {
      jwt: userJwt
    };
    // return with mongoose search
    // return res.status(201).send(await User.findOne({email: email}).exec());
    return res.status(201).send(newUser)
  }
})

export { router as signupRouter }; 

