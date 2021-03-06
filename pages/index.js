import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import PageBreak from '../components/PageBreak';
import Project from '../components/Project';
import { formatTimePeriod, yearsOfExperience } from '../lib/uitl';
import globalStyles from '../styles/global';
import SectionSkill from '../components/SectionSkill';

const Home = () => (
  <div>
    <Head>
      <title>Adam Thompson</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/dnx6kef.css" />
    </Head>

    <Header
      name="Adam Thompson"
      subheading="Web Developer"
      email="adam@adamth.com"
      phone="0428 804 282"
    />

    <Intro>
      <span>
        {yearsOfExperience}+ years experienced and result oriented web developer
        with a knack for delivering elegant, user-friendly software solutions
        effectively and efficiently. Applied competence in all stages of the
        software development life cycle including requirements gathering,
        infrastructure setup, coding and testing. Gained proficiency with a
        number of programming languages and developed in-depth knowledge of
        latest technologies as a result of working on numerous complex projects.
        Handles complex project management and coordination work very
        efficiently to deliver results. Looking forward to applying my diverse
        skill-set to a challenging software development role.
      </span>
    </Intro>

    <Section title="Technical Skills" icon="/icon-triangle.svg">
      <span>
        I have varying levels of experience with a wide range of languages and
        technologies, but there are a few that I consider my bread and butter.
        These are languages and technology that I’ve spent the most time with
        over my career.
      </span>
      <div className="skills">
        <SectionSkill
          title="Frontend"
          skills={[
            { title: 'React', bnb: true },
            { title: 'Vue', bnb: false },
            { title: 'Flutter', bnb: false },
          ]}
        />
        <SectionSkill
          title="Server/Backend"
          skills={[
            { title: 'Gatsby', bnb: true },
            { title: 'Django', bnb: true },
            { title: 'Rails', bnb: false },
            { title: 'Express', bnb: false },
          ]}
        />
        <SectionSkill
          title="Database"
          skills={[
            { title: 'Postgres', bnb: true },
            { title: 'Firebase', bnb: false },
            { title: 'MySQL', bnb: false },
          ]}
        />
        <SectionSkill
          title="Languages"
          skills={[
            { title: 'JavaScript', bnb: true },
            { title: 'CSS/LESS/SCSS', bnb: true },
            { title: 'Python', bnb: false },
            { title: 'Ruby', bnb: false },
            { title: 'SQL', bnb: false },
            { title: 'Swift', bnb: false },
            { title: 'Dart', bnb: false },
          ]}
        />
      </div>
    </Section>
    <PageBreak />

    <Section title="Work Background" icon="/icon-square.svg">
      <SectionHeading
        title="Software Engineer"
        info={`Vinomofo, ${formatTimePeriod(new Date(2020, 5, 1))}`}
        subtitle="Vinomofo is a leading Australian online wine retailer."
      />
      <section>
        <h3 className="sans">Frontend</h3>
        <ul>
          <li>
            Build a new frontend component library from the ground up using the
            latest techniques and tools, such as styled components and
            storybook. The new component library is now being used widely within
            the company, ensuring brand consistency across projects and
            increasing developer velocity.
          </li>
          <li>
            Implement automatic frontend UI testing through Chromatic, enabling
            the team to have greater confidence when deploying changes to
            components, as well as automatic documentation generation. This has
            also made testing frontend assets easier than ever, resulting in
            more tests being run and overall a more reliable set of tools.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="sans">Backend</h3>
        <ul>
          <li>
            Develop the Gatsby build pipeline including data transformation,
            incremental builds and automatic deployments
          </li>
          <li>Work on patches as required on the existing rails app</li>
        </ul>
      </section>
      <section>
        <h3 className="sans">Leadership</h3>
        <ul>
          <li>
            Mentor fellow developers in my areas of strength resulting in
            improved knowledge sharing and upskilling of the team.
          </li>
          <li>
            Work effectively remotely during the 2020 pandemic, ensuring strong
            communication is maintained between the team and work is coordinated
            effectively
          </li>
        </ul>
      </section>
      <PageBreak />
      <SectionHeading
        title="Web Developer"
        info={`Alliance Software, ${formatTimePeriod(
          new Date(2018, 3, 1),
          new Date(2020, 5, 1)
        )}`}
        subtitle="Alliance Software is a world-class agile software development agency specialising in complex web apps."
      />
      <section>
        <h3 className="sans">Project Management</h3>
        <ul>
          <li>
            Work as the sole developer on projects or as part of a larger
            development team
          </li>
          <li>
            Communicate effectively with clients to establish project
            requirements and maintain excellent relationships
          </li>
          <li>
            Scope and estimate tasks as part of the agile project management
            process
          </li>
        </ul>
      </section>
      <section>
        <h3 className="sans">Development</h3>
        <ul>
          <li>
            Conduct code reviews ensuring a high degree of quality is maintained
          </li>
          <li>Manage source code using git</li>
          <li>Work with Django to create complex, scalable web servers</li>
          <li>
            Work with React and companion libraries to build modern, high
            performance user interfaces
          </li>
          <li>Deliver native iOS apps using Swift and XCode</li>
        </ul>
      </section>
      <section>
        <h3 className="sans">Design</h3>
        <ul>
          <li>
            Logo and branding design for both internal and external clients
          </li>
          <li>
            Work closely with the design team to deliver pixel perfect frontend
            products
          </li>
          <li>
            Use libraries like p5.js to create bespoke interactive visual
            components
          </li>
          <li>
            Design user interfaces as required with keen attention to detail
          </li>
        </ul>
      </section>
      <section>
        <h3 className="sans">Key Achievements</h3>
        <ul>
          <li>
            Consistently achieve over 100% on all key performance targets,
            ensuring projects are delivered on time
          </li>
          <li>
            Deliver technical presentations to the company, sharing my unique
            experience and skill set with my peers and showing new opportunities
            that might not have otherwise been visible
          </li>
        </ul>
      </section>
      <PageBreak />
      <SectionHeading
        title="Founder and Developer"
        info={`Autopilot Digital, ${formatTimePeriod(new Date(2017, 0, 1))}`}
        subtitle="Autopilot Digital is a small software development startup specialising in mobile apps"
      />
      <section>
        <h3 className="sans">Logbookr</h3>
        <span>
          Logbookr is a beautiful vehicle logbooking app for iOS built from the
          ground up to deliver a reliable vehicle management process and
          streamlined user experience.
        </span>
        <ul>
          <li>Designed product logo</li>
          <li>Built reporting backend using firebase cloud functions</li>
          <li>App built using Swift and XCode</li>
        </ul>
      </section>
      <SectionHeading
        title="Systems Analyst"
        info={`Mind Australia, ${formatTimePeriod(
          new Date(2013, 0, 1),
          new Date(2018, 3, 1)
        )}`}
        subtitle="Mind Australia is one of the country's leading community-managed specialist mental health service providers"
      />
      <section>
        <span>
          As the sole developer at Mind Australia I was responsible for the
          management, design and delivery of a wide range of software projects.
        </span>
        <ul>
          <li>
            Design and build a telecommunications asset register to manage over
            700 mobile devices resulting in increased visibility into device
            usage and ultimately saving over $80k annually in mobile bills.
          </li>
          <li>
            Design and build a web app to allow clients to sign on a touch
            screen, reducing the need to paper forms and further streamlining
            the service delivery process.
          </li>
          <li>
            Design and build comprehensive reporting dashboards to be used by
            all levels of management, unlocking hidden value previously locked
            in the rich data sets of various business systems.
          </li>
          <li>
            Numerous other web app projects to help increase efficiency of
            business process and accuracy of government reporting, ensuring
            continued government funding and helping secure additional funding.
          </li>
        </ul>
      </section>
      <PageBreak />
      <section>
        <h3 className="sans">Key Achievements</h3>
        <ul>
          <li>
            Invited to be on discussion panel at Qlik &quot;Visualise your
            world&quot; conference in 2015 as a subject matter expert.
          </li>
          <li>
            Implemented git version control for all software projects (GitLab)
            enabling proper management of software projects and improved
            security of source code.
          </li>
          <li>
            Conducted QlikView training sessions for staff resulting a strong
            uptake of data reporting tools from all levels of management.
          </li>
        </ul>
      </section>
      <SectionHeading
        title="Senior Service Desk Analyst"
        info={`Wesley Mission Victoria, ${formatTimePeriod(
          new Date(2010, 0, 1),
          new Date(2013, 3, 1)
        )}`}
        subtitle="Wesley Mission cares for and supports disadvantaged and vulnerable Victorians through a range of community-based services"
      />
      <ul>
        <li>Provided on site and phone support for remote clients.</li>
        <li>
          Configure and troubleshoot network equipment ranging from Cisco
          routers and switches to consumer level ADSL modems.
        </li>
        <li>Work in a team on projects including:</li>
        <ul>
          <li>
            Designing and implementing a VPN solution for over 40 residential
            units and other remote sites.
          </li>
          <li>
            Designing and implementing full directory structure update impacting
            over 400 full time staff and hundreds of volunteers.
          </li>
        </ul>
      </ul>
    </Section>
    <PageBreak />
    <Section title="Education" icon="/icon-circle.svg">
      <SectionHeading
        title="Deakin University"
        info="Bachelor of Information Technology, 2015"
      />
      <section>
        <ul>
          <li>Graduated with a high distinction average</li>
          <li>
            Selected to be part of the team representing Deakin in the Telstra
            IoT competition
          </li>
        </ul>
      </section>
      <SectionHeading
        title="Box Hill TAFE"
        info="Advanced Diploma of Computer Systems Engineering, 2010"
      />
    </Section>

    <Section title="Other Interests" icon="/icon-square-2.svg">
      <span>I have numerous hobbies that I pursue outside of work</span>
      <ul>
        <li>
          Electronics - developing tools to help with my other projects such as
          a web enabled thermostat to help with baking
        </li>
        <li>
          Film photography - I develop and scan my film at home and love
          learning how the process works. Check out my pictures on{' '}
          <a
            href="https://www.instagram.com/adam_thomps/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>{' '}
          if that&apos;s of interest!
        </li>
        <li>
          Drones - I have built a number of racing and acrobatic drones and have
          recently been exploring the possibilities of autopilot and GPS
          navigation
        </li>
        <li>
          Various personal software projects at different stages of completion
        </li>
      </ul>
    </Section>
    <PageBreak />

    <Section title="My Projects" icon="/icon-triangle-2.svg">
      <span>
        In my spare time I love to explore new technologies and push myself to
        build new things. Below are some of the projects I’m most proud of, as
        well as the technologies used.
      </span>
      <Project
        icon="/icon-logbookr.png"
        title="Logbookr"
        info="Swift"
        subtitle="Vehicle logbooking app for iOS"
      />
      <Project
        icon="/icon-dev-clock.png"
        title="Dev Clock App"
        info="Flutter/Dart"
        subtitle="Film development timer and chemistry register for iOS and Android"
      />
      <Project
        icon="/icon-viper.png"
        title="Viper Constructions"
        link="https://viperconstructions.com.au"
        info="Vue"
        subtitle="Promotional website for local small business"
      />
    </Section>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>
      {`
        .skills {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .content {
          padding: 20px;
        }
      `}
    </style>
  </div>
);

export default Home;
