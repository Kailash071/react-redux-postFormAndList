import React from "react";
import { useSelector } from "react-redux";
import { usePostsSelector } from "../../reducers/postsSlice";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
const PostLists = () => {
  const posts = useSelector(usePostsSelector);

  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post}/>
    </article>
  ));
  return (
    <section>
      <h2>Post Lists</h2>
      {renderPosts}
    </section>
  );
};

export default PostLists;
