"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface User {
  id: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "users")
      );

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<User, "id">),
      }));

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Users Management 👥
        </h1>

        <p className="text-gray-400 mt-2">
          Total Users: {users.length}
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        {loading ? (
          <p>Loading Users...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-400">
            No users found.
          </p>
        ) : (
          <div className="space-y-3">

            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center border border-zinc-800 rounded-xl p-4"
              >
                <div>
                  <p className="font-semibold">
                    {user.email}
                  </p>

                  <p className="text-xs text-gray-500">
                    {user.id}
                  </p>
                </div>

                <span className="text-green-400">
                  Active
                </span>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}