import { db } from "@/db";
import auth from "../../middleware";

export default async function UserProfile({ params }) {
  const session = await auth();

  return (
    <>
      <div>
        <div className="first-letter:rounded-2xl bg-gradient-to-br from-red-500 to-rose-800 flex items-center justify-center text-white font-bold shadow-lg">
          {session.user.name.charAt(0).toUpperCase()}
        </div>
        <span className="text-xs text-zinc-400 mr-3">#{session.user.id}</span>{" "}
        {session.user.name}
      </div>
    </>
  );
}
