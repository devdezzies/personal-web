import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profil.png';
import profileImgPlaceholder from 'assets/profile-placeholder.png';
import profileImg from 'assets/profil.png';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there 👋" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hello, my name is Abdullah, and I currently reside in Indonesia where I am actively
      working on a personal project at{' '}
      <Link href="https://play.google.com/store/apps/dev?id=7355009604149943956&hl=%3Did_id&gl=id">
        Xplora.
      </Link>{' '}
      As a technology and science enthusiast, I have a strong passion for coding and
      devouring non-fiction books. I am recently venturing into the realm of mobile
      development, honing my skills as a Frontend Engineer with a focus on creating
      visually appealing UI designs and interactive features that align with modern mobile
      app trends.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my leisure time, I indulge in a combination of high-intensity cardio and
      weightlifting, as well as indulging in my love for literature and cinema. When it
      comes to books, I have a soft spot for biographies and motivational works, while my
      movie preferences lean towards action-packed thrillers. I am always eager to expand
      my horizons, so do not hesitate to share your latest and greatest projects with me.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/articles"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me on graduation party in high school"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
