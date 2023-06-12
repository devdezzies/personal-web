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
              <ProjectSectionHeading>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ProjectSectionHeading>
              <ProjectSectionText>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
              et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis 
              voluptas assumenda est,{' '} <Link href="https://abdullahspace.tech/">
                  test link
                </Link>{' '}omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
              saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente 
              delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
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
              After a few months of 1st release date, our first application finally hit first 100 users when we released readin v3.0. This app 
              doesnt contain any advertisements and still as a non-profit app. This app actually is an our testing app, in order to experimenting
              about android apps and a case study for react native project. This app was created only for educational purpose.
              
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
