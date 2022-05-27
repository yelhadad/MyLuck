import mongoose from "mongoose";

//An inteface that describes the properties
// that are requied to create new Post
interface PostAttrs {
  images: string[];
  userId: string;
  text: string;
  location?: {
    longitude: string;
    latitude: string;
  };
  counterOfLikes: number;
  // will be more
}

// An intefase that describe the propeties
// that a Post model has
interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: PostAttrs): PostDoc;
}

// An inteface that describes the properties
// that a Post document has
interface PostDoc extends mongoose.Document {
  userId: string;
  images: String[];
  counterOfLikes: number;
  text: string;
  location: {
    longitude: string;
    latitude: string;
  };
}

interface RetPostDoc extends mongoose.Document {
  userId?: string;
  images?: String[];
  counterOfLikes?: number;
  text?: string;
  location?: {
    longitude?: string;
    latitude?: string;
  };
}

const postSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      required: true,
    },
    userId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform: (doc: PostDoc, ret: RetPostDoc) => {
        delete ret.__v;
        ret["id"] = ret._id;
        delete ret._id;
      },
    },
  }
);
postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>("Post", postSchema);

export { Post };
