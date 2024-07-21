import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
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
//import dynamic from 'next/dynamic';
//import { media } from 'utils/style';
//import volkiharBannerLarge from 'assets/ReadInDark.png';
//import volkiharBanner from 'assets/ReadInDark.png';
//import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import styles from './Uses.module.css';

//const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Skills"
        description="Details of my competency and skills as developer"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{
            src: 'https://images.unsplash.com/photo-1508633069371-a735f885a1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
          }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Foreword"
          description="Welcome to my personal website! My name is Abdullah, and I am thrilled to have you here. I reside in the vibrant city of Bogor, Indonesia, where I pursue my passion for programming and design. My primary focus lies in developing integrated mobile applications and crafting modern UI applications that merge functionality with aesthetic appeal.

          Beyond my technological endeavors, I am deeply intrigued by the realms of psychology and cognitive sciences. Exploring the intricate workings of the human mind fascinates me, and I believe that understanding these aspects can contribute to creating solutions that enhance the quality of life. My ultimate goal is to develop tools and innovations that empower individuals, fostering healthier lifestyles, efficiency, and stronger connections with others.
          
          From my own perspective, I embody a range of qualities that drive my journey. I consider myself to be creative, constantly seeking innovative approaches to problem-solving. As a social individual, I thrive in collaborative environments and cherish the opportunity to connect with like-minded individuals. I am a lifelong learner, always eager to expand my knowledge and acquire new skills. Lastly, I approach my work with meticulous attention to detail, ensuring thoroughness in every aspect.
          
          I invite you to explore my website and delve into my projects, ideas, and insights. Together, let's embark on a path of discovery, growth, and positive change.
          
          Thank you for visiting, and I look forward to connecting with you!
          "
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Events</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>November 2, 2019</TableHeadCell>
                    <TableCell>
                      Computer Problem Solving Competition IPB University
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>October 15, 2021</TableHeadCell>
                    <TableCell>
                      Computer Problem Solving Competition IPB University
                    </TableCell>
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
                    Recent JavaScript, I use JavaScript to build web app and mobile apps
                    using React Native.
                  </ListItem>
                  <ListItem>
                    Dart, Dart is a programming language to build high-quality apps
                  </ListItem>
                  <ListItem>HTML and CSS</ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React JS</Link>
                    {', '}
                    <Link href="https://reactnative.dev/">React Native</Link>
                    {', '}And <Link href="https://flutter.dev/">Flutter</Link>
                  </ListItem>
                  <ListItem>Figma and Adobe Xd for UI Design</ListItem>
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
                    Git, Git is a modern distributed Version Control System for source
                    code. I use Git everyday and all my projects are tracked with a Git
                    version. I host my projects on private GitHub repositories and track
                    related issues on the GitHub issue tracker.
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
                      <Link href="https://www.instagram.com/davidjmalan/?hl=en">
                        David J. Malan
                      </Link>
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
