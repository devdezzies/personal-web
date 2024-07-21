import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharBannerLarge from 'assets/ReadInDark.png';
import volkiharBannerPlaceholder from 'assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from 'assets/ReadInDark.png';
import volkiharEnderalLarge from 'assets/bite-bg.jpg';
import volkiharEnderalLogoLarge from 'assets/biteLogo.png';
import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from 'assets/biteLogo.png';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/bite-bg.jpg';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';


import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Link } from 'components/Link';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
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
          src={{ src: 'https://images.unsplash.com/photo-1435686858161-59da32dfd4b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' }}
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
               <ProjectTextRow>
              <ProjectSectionHeading>Introducing ReadIn: Your Ultimate News Aggregator</ProjectSectionHeading>
              <ProjectSectionText>
              Discover the power of knowledge with ReadIn, the ultimate news aggregator app that brings you curated news from a wide range of top-notch sources. With its modern design and user-friendly interface, ReadIn provides you with the latest news updates and ensures an engaging reading experience.
          <br></br>
          <br></br>
          Note:
ReadIn aggregates news from various reputable sources, directing you to the original pages for each news article. Rest assured that you are accessing reliable information from reliable publishers.

Download ReadIn now and experience the power of a comprehensive news aggregator at your fingertips. Stay informed, empowered, and engaged with the world around you.

             
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          {/* <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[volkiharEnderal, volkiharEnderalLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Trying to make a song LOL</ProjectSectionHeading>
                  <ProjectSectionText>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: 'https://vid-share.s3.us-east-1.wasabisys.com/pmrhK0RBhX.mp4', width: 1280, },
                  { src: 'https://vid-share.s3.us-east-1.wasabisys.com/pmrhK0RBhX.mp4', width: 2560 },
                ]}
                placeholder={volkiharBackgroundPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns> 
          </ProjectSection> */}
        </ThemeProvider>
       
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={volkiharSlidePlaceholder}
              images={[
                {
                  srcSet: [volkiharBanner, volkiharBannerLarge],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [volkiharBanner, volkiharBannerLarge],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
              ]}
              width={3200}
              height={2400}
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
              <ProjectSectionHeading>A Product by Bite.</ProjectSectionHeading>
              <ProjectSectionText>
              After several months since its initial release, ReadIn v3.0 has reached a significant milestone, attracting its first 100 users. It is important to note that ReadIn remains an ad-free, non-profit application. The app serves as a testing ground for our Android app development and acts as a case study for our React Native project. It was primarily created for educational purposes, allowing us to experiment and gain valuable insights in the world of Android apps.
              
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
