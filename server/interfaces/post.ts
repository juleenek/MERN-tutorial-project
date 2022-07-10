export interface Post {
  title: String;
  message: String;
  creator: String;
  tags: [String];
  selectedFile: String;
  likeCount: {
    type: Number;
    default: 0;
  };
  createdAt: {
    type: Date;
    default: Date;
  };
}
