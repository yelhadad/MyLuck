import mongoose from "mongoose";

//An inteface that describes the properties 
// that are requied to create new Profile
interface ProfileAttrs {
  userId: string
  profilePicture?: string;
  name: string;
  lastName: string;
  mobileNumber: string;
  ratingCounter?: number; 
  
  // will be more
}

// An intefase that describe the propeties
// that a Profile model has
interface ProfileModel extends mongoose.Model<ProfileDoc>{
  build(attrs: ProfileAttrs): ProfileDoc
}

// An inteface that describes the properties
// that a Profile document has
interface ProfileDoc extends mongoose.Document{
  userId: string;
  profilePicture?: string;
  name: string;
  lastName: string;
  mobileNumber: string;
  ratingCounter?: number; 
}

interface RetProfileDoc extends mongoose.Document{
  profilePicture?: string;
  name?: string;
  lastName?: string;
  mobileNumber?: string;
  ratingCounter?: number; 
}

const profileSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    }
},{
     toJSON: {
    transform: (doc: ProfileDoc, ret: RetProfileDoc) => {
      delete ret.__v;
      ret['id'] = ret._id
      delete ret._id
    }
  }
}
)
profileSchema.statics.build = (attrs: ProfileAttrs) => {
  return new Profile(attrs);
}

const Profile = mongoose.model<ProfileDoc, ProfileModel>('Profile', profileSchema)

export { Profile };