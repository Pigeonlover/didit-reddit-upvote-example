import { db } from "@/db";
import auth from "../../middleware";

export default async function UserProfile({ params }) {
  const session = await auth();
  const profileId = params.profileId;

  const { rows } = await db.query("SELECT id, name FROM users WHERE id = $1", [
    profileId,
  ]);

  const user = rows[0];

  if (!user) {
    return <div className="text-red-500">User not found.</div>;
  }

  // User's posts
  const { rows: userPosts } = await db.query(
    "SELECT id, title, created_at FROM posts WHERE user_id = $1 ORDER BY created_at DESC",
    [profileId]
  );

  return (
    <>
      {/* User card */}
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-rose-800 flex items-center justify-center text-white font-bold shadow-lg text-2xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-zinc-500">User ID: #{user.id}</p>
          </div>
        </div>
      </div>

      {/* User's posts */}
      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Posts by {user.name}
        </h3>
        {userPosts.length === 0 ? (
          <p className="text-sm text-gray-500">
            This user hasn&apos;t posted anything yet :(
          </p>
        ) : (
          <ul className="space-y-2">
            {userPosts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-rose-200 rounded-lg shadow-sm"
              >
                <a
                  href={`/post/${post.id}`}
                  className="text-rose-700 hover:underline font-medium"
                >
                  {post.title}
                </a>
                <p className="text-xs text-gray-600">
                  Posted on {new Date(post.created_at).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
