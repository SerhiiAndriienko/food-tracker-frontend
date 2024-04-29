import { Link } from 'react-router-dom';
import { NavList } from './NavigationLink.styled';

export default function NavigationLink() {
  return (
    <NavList>
      <li>
        <Link to={'/test'}>Home</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link>Diary</Link>
      </li>
      <li>
        <Link>Recommended</Link>
      </li>
    </NavList>
  );
}
