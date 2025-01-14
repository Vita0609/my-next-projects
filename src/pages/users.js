import Header from "../components/Header";
import Link from "next/link";

const UsersPage = ({ users }) => {
    return (
        <div>
            <Header />
            <h1>Users</h1>
            <div style={{ display: "flex", overflowX: "auto" }}>
                {users.map((user) => (
                    <Link
                        key={user.id}
                        href={`/users/${user.id}`}
                        style={{ marginRight: "10px" }}
                    >
                        {user.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

export default UsersPage;
