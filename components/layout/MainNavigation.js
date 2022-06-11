import classes from './MainNavigation.module.css';
import NextLink from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <NextLink href='/' className={classes.logo}>The Taste</NextLink>
      <nav>
        <ul>
          <li>
            <NextLink href='/today-order'>Today Order</NextLink> {" "}
          </li>
          <li>
            <NextLink href='/new-order'>New Order</NextLink> {" "}
          </li>

          <li>
            <NextLink href='/delivered'>Delivered</NextLink> {" "}
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;