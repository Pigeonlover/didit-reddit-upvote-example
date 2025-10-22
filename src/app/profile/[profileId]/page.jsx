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

  return (
    <>
      <div>
        <div className="first-letter:rounded-2xl bg-gradient-to-br from-red-500 to-rose-800 flex items-center justify-center text-white font-bold shadow-lg">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <span className="text-xs text-zinc-400 mr-3">#{user.id}</span>{" "}
        {user.name}
      </div>
    </>
  );
}
