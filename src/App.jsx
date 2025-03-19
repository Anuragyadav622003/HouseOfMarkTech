import { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import SearchUsers from './Components/SearchUsers';
import ContactForm from './Components/ContactForm';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Pricing />
      <SearchUsers users={users} />
      <ContactForm />
    </div>
  );
}