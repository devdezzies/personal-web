import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Abdullah.`} 
      </span>
      <Link secondary className={styles.link} href="mailto:boltholt17@gmail.com" target="_self">
        Email
      </Link>
    </Text>
  </footer>
);
// you can add attribution/copyright to this web on your own IF you have already modified this website and make the UI Looks significantly different with original design