import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Link, Route, Router } from '../components';

describe('Route', () => {
  it('renders the component when the path matches', async () => {
    const Home = () => <div>Home Page</div>;
    const About = () => <div>About Page</div>;

    render(
      <Router>
        <Link to="/">Home Link</Link>
        <Link to="/about">About Link</Link>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.queryByText('About Page')).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText('About Link'));
    });

    // expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
    expect(screen.getByText('About Page')).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
