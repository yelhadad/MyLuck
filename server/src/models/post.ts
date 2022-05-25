import mongoose from "mongoose";

//An inteface that describes the properties 
// that are requied to create new Post
interface PostAttrs {
  images: string[];
  userId: string;
  text: string;
  location: {
    longitude: string,
    latitude:  string,
  }
  // will be more
}

// An intefase that describe the propeties
// that a Post model has
interface PostModel extends mongoose.Model<PostDoc>{
  build(attrs: PostAttrs): PostDoc
}

// An inteface that describes the properties
// that a Post document has
interface PostDoc extends mongoose.Document{
  userId: string;
  images: Buffer[];
  counterOfLikes: number;
  text: string
}

interface RetPostDoc extends mongoose.Document{
  userId?: string;
  images?: Buffer[];
  counterOfLikes?: number;
  text?: string
}

const postSchema = new mongoose.Schema({
    images: {
        data: Array,
        contentType: true,
    }
},{
     toJSON: {
    transform: (doc: PostDoc, ret: RetPostDoc) => {
      delete ret.__v;
      ret['id'] = ret._id
      delete ret._id
    }
  }
}
)
postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
}

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema)

export { Post };