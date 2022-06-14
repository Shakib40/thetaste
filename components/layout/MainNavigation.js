import classes from './MainNavigation.module.css';
import NextLink from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <NextLink href='/' className={classes.logo}>THE TASTE</NextLink>
      <nav>
        <ul>
          <li>
            <NextLink href='/today-order'>Today Ordered</NextLink> {" "}
          </li>
          <li>
            <NextLink href='/delivered'>Today Delivered</NextLink> {" "}
          </li>
          
          <li>
            <NextLink href='/new-order'>New Order</NextLink> {" "}
          </li>

          

        </ul>
         {/* <ul>
            <li>
              <Link href="/">
                <a>thetaste</a>
              </Link>
            </li>
            <li>
              <Link href="/today-order">
                <a>Today Order</a>
              </Link>
            </li>
            <li>
              <Link href="/new-order">
                <a>New Order</a>
              </Link>
            </li>
            <li>
              <Link href="/delivered">
                <a>Delivered</a>
              </Link>
            </li>

          </ul> */}
      </nav>
    </header>
  );
}

export default MainNavigation;