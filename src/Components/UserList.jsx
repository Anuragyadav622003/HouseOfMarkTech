// src/components/UserList.jsx
import { memo } from 'react';

const UserList = memo(({ users }) => {
  return (
    <div className="mt-6">
      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No users found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={`https://i.pravatar.cc/40?u=${user.id}`}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                    loading="lazy"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">
                    {user.company.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default UserList;