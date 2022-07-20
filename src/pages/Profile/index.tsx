import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

const Profile = () => {
  const { user, signOut } = useAuth();
  const history = useNavigate();

  async function handleSignOut() {
    await signOut();

    history('/login');
  }

  return (
    <div>
      <h1>Bem-vindo, {user?.email}</h1>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  );
};

export default Profile;
