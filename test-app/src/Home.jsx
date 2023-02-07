export default function Home({ feed }) {
  return (
    <div>
      {feed &&
        feed.map((post) => (
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
