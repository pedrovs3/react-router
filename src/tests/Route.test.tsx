import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Router from '@/components/Router';
import Link from '@/components/Link';
import Route from '@/components/Route';

describe('Route', () => {
  it('renders the component when the path matches', () => {
    const Home = () => <div>Home</div>;
    const About = () => <div>About</div>;

    render(
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('About')).not.toBeInTheDocument();

    screen.getByText('Home').click();

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
