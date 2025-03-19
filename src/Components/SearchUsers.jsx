import { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';
import { Trie } from '../utils/tries';
import UserList from './UserList';

export default function SearchUsers({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [trie, setTrie] = useState(new Trie());

  useEffect(() => {
    const newTrie = new Trie();
    users.forEach(user => newTrie.insert(user.name));
    setTrie(newTrie);
  }, [users]);

  const handleSearch = debounce((term) => {
    const results = term ? trie.search(term) : users.map(u => u.name);
    setFilteredUsers(users.filter(user => results.includes(user.name)));
  }, 300);

  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-3 border rounded-lg"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}