export default function Home({ feed }) {
  const posts = feed.data;

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <div>{post.username}</div>
            <div>{post.caption}</div>
            <div>{post.timestamp}</div>
            <div>{post.permalink}</div>
          </div>
        ))}
    </div>
  );
}
