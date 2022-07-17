import volkiharBackgroundLarge from 'assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharBackground from 'assets/volkihar-background.jpg';
import volkiharBannerLarge from 'assets/ReadInDark.png';
import volkiharBannerPlaceholder from 'assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from 'assets/ReadInDark.png';
import volkiharBookLarge from 'assets/volkihar-book-large.png';
import volkiharBookPlaceholder from 'assets/volkihar-book-placeholder.png';
import volkiharBook from 'assets/volkihar-book.png';
import volkiharEnderalLarge from 'assets/bite-bg.jpg';
import volkiharEnderalLogoLarge from 'assets/biteLogo.png';
import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from 'assets/biteLogo.png';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/bite-bg.jpg';
import VolkiharKnightLogo from 'assets/volkihar-logo.svg';
import volkiharSlide1Large from 'assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from 'assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from 'assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from 'assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from 'assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from 'assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import videoSprMotionLarge from 'assets/readin-bg.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/readin-bg.mp4';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './VolkiharKnight.module.css';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));
const Armor = dynamic(() => import('./Armor').then(mod => mod.Armor));

const title = 'ReadIn';
const description =
  'A simple modern mobile app created with React Native and integrated with Codepush by Microsoft';
const roles = ['Mobile Apps', 'React Native', 'UI Design'];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 113 235 145;
              --rgbAccent: 113 235 145;
            }
            [data-theme='light'] {
              --rgbPrimary: 0 0 0;
              --rgbAccent: 0 0 0;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          src={{ src: videoSprMotionLarge }}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View release"
          url="https://play.google.com/store/apps/details?id=com.readin&hl=%3Did_id&gl=id"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[volkiharBanner, volkiharBannerLarge]}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
          <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Armor alt="3D model of the Volkihar Knight armor" />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Armor design</ProjectSectionHeading>
              <ProjectSectionText>
                As a player I noticed there weren’t any heavy armor options for the
                Volkihar faction. This kinda sucks when you’ve specialised in heavy armor
                and decide to join the faction and discover they all wear light armor.
              </ProjectSectionText>
              <ProjectSectionText>
                My solution was to create a mod that combines meshes from the Volkihar
                faction armor with heavy plate armor. The mod builds upon textures and
                meshes from the base game, so it unifies with Skyrim’s overall aesthetic.
                I combined and modified the meshes in 3DS Max. To establish a cohesive
                design across the set, I edited existing textures, and designed custom
                textures in Photoshop.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <VolkiharKnightLogo
                role="img"
                aria-label="The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Identity design</ProjectSectionHeading>
              <ProjectSectionText>
                The monogram uses custom designed typography to get the right balance of
                weight and angularity. I combined this with Trajan for the text, which is
                also used for Skyrim’s game title wordmark.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={volkiharSlidePlaceholder}
              images={[
                {
                  srcSet: [volkiharSlide1, volkiharSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [volkiharSlide2, volkiharSlide2Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
                {
                  srcSet: [volkiharSlide3, volkiharSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={[volkiharEnderalLogo, volkiharEnderalLogoLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Product by Bite.</ProjectSectionHeading>
              <ProjectSectionText>
              This app is already released on the play store, this is a non-profit App. Created for education purposes. If you want to support us,
                we are always happy to hear ideas or suggestions. We are growth from every ideas and imaginations
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://play.google.com/store/apps/details?id=com.readin&hl=%3Did_id&gl=id"
              >
                View on Play Store
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
