import { db } from "@/db";

export default function UserProfile() {
  return (
    <>
      <div>
        <div
          className={`rounded-2xl bg-gradient-to-br from-red-500 to-rose-800 flex items-center justify-center text-white font-bold shadow-lg ${className}`}
          style={{
            width: size,
            height: size,
            fontSize: Math.max(24, size / 3),
          }}
          aria-hidden
        >
          {session.user.name.charAt(0).toUpperCase()}
        </div>
        <span className="text-xs text-zinc-400 mr-3">#{session.user.id}</span>{" "}
        {session.user.name}
      </div>
    </>
  );
}
