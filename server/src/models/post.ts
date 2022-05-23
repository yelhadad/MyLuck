import mongoose from "mongoose";

//An inteface that describes the properties 
// that are requied to create new Profile
interface ProfileAttrs {

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

}

interface RetProfileDoc extends mongoose.Document{
    
}

const profileSchema = new mongoose.Schema({
    profilePicture: {
        type: Buffer,
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