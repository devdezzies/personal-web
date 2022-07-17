import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { media } from 'utils/style';
import volkiharBannerLarge from 'assets/ReadInDark.png';
import volkiharBanner from 'assets/ReadInDark.png';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import styles from './Uses.module.css';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Skills"
        description="Details of my competency and skills as developer"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="My Journey"
          description="My first journey as a tech enthusiast starts when I was 15, since junior high school I had an interest in computer programming. My first programming
          language I learnt is Python, but I'm not deeply learning that language (just for fun). At first, my journey as a tech enthusiast is diving into UI design and create 
          some mobile User Interfaces with Adobe Xd. After a few years, I decided to learn JavaScript deeply and build my first mobile app when I was in High School
          and release the app on the play store (still available)."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Events</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                  <TableHeadCell>November 2, 2019</TableHeadCell>
                    <TableCell>Computer Problem Solving Competition IPB University</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableHeadCell>October 15, 2021</TableHeadCell>
                    <TableCell>Computer Problem Solving Competition IPB University</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Front-End</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  Recent JavaScript, JavaScript is my primary programming
                    language, I learn deeply and experimenting a lot with this language.
                  </ListItem>
                  <ListItem>
                    HTML and CSS
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React JS</Link> and <Link href="https://reactnative.dev/">React Native</Link>
                  </ListItem>
                  <ListItem>
                    Figma and Adobe Xd for UI Design
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                   Git, Git is a modern distributed Version Control System for source code. I use Git everyday and all my projects are tracked with a Git version. I host my projects on private GitHub repositories and track related issues on the GitHub issue tracker.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionContent>
          <ProjectSectionHeading>Certificates</ProjectSectionHeading>
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
        </ProjectSection> */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Courses</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                  <TableHeadCell>Frontend Masters</TableHeadCell>
                    <TableHeadCell>
                      <Link href="https://github.com/getify">Kyle Simpson</Link>
                    </TableHeadCell>
                    <TableCell>Getting started with JavaScript, v2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Frontend Masters</TableHeadCell>
                    <TableHeadCell>
                      <Link href="https://twitter.com/scotups?lang=en">Scott Moss</Link>
                    </TableHeadCell>
                    <TableCell>React Native (feat. Redux)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Frontend Masters</TableHeadCell>
                    <TableHeadCell>
                      <Link href="https://abdullahspace.tech/">Bianca Gandolfo</Link>
                    </TableHeadCell>
                    <TableCell>Javascript: From Fundamentals to Functional</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Harvard CS50</TableHeadCell>
                    <TableHeadCell>
                      <Link href="https://www.instagram.com/davidjmalan/?hl=en">David J. Malan</Link>
                    </TableHeadCell>
                    <TableCell>Introduction to Computer Science</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Frontend Masters</TableHeadCell>
                    <TableHeadCell>
                      <Link href="https://abdullahspace.tech/">Nina Zakharenko</Link>
                    </TableHeadCell>
                    <TableCell>Git In-depth</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
