import Post from '../Posts/Post/Post';

type Props = {};

const Posts: React.FC<Props> = () => {
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
