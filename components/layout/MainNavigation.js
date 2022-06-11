import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      {/* <Link href='/' className={classes.logo}>The Taste</Link> */}
      <Link href="/">
          <a>The Taste</a>
      </Link>
      <nav>
        <ul>
          {/* <li>
            <Link href='/today-order'>Today Order</Link>
          </li>
          <li>
            <Link href='/new-order'>New Order</Link>
          </li>

          <li>
            <Link href='/delivered'>Delivered</Link>
          </li> */}

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;