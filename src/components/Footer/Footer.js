import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
import Script from 'next/script'

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
    <a
        href="//24timezones.com/current_time/indonesia_bogor_clock.php"
        className="clock24"
        id="tz24-1658359276-c213124-eyJob3VydHlwZSI6IjEyIiwic2hvd2RhdGUiOiIxIiwic2hvd3NlY29uZHMiOiIxIiwic2hvd3RpbWV6b25lIjoiMSIsInR5cGUiOiJkIiwibGFuZyI6ImVuIn0="
        title="Bogor timezone"
        target="_blank"
        rel="noreferrer"
        
      >
        Bogor    
      </a>
      <Script type="text/javascript" src="//w.24timezones.com/l.js" async></Script>
    </Text>
  </footer>
);
// you can add attribution/copyright to this web on your own IF you have already modified this website and make the UI Looks significantly different with original design
