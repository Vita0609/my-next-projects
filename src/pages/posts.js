import Header from "../components/Header";

const PostsPage = ({ posts }) => {
    return (
        <div>
            <Header />
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default PostsPage;
