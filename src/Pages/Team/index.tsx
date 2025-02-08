
import styles from './style.module.scss'
import classNames from 'classnames';


const teamMembers = [
  {
    name: 'Benjamin Ford',
    role: 'Co-founder, CEO',
    image: '/img/team/Benjamin_Ford.jpg',
    linkedin: '',
    animationDelay: '0.1s',
  },
  {
    name: 'Amanda Velasquez',
    role: 'Co-founder, Blockchain Investigator',
    image: '/img/team/Amanda_Velasquez.jpg',
    linkedin: '',
    animationDelay: '0.4s',
  },
  {
    name: 'Jon Snowden',
    role: 'Senior Consultant, Team Leader',
    image: '/img/team/Jon_Snowden.jpg',
    linkedin: '',
    animationDelay: '0.7s',
  },
  {
    name: 'John Davis',
    role: 'Senior Consultant',
    image: '/img/team/John_Davis.jpg',
    linkedin: '',
    animationDelay: '1s',
  },
  // Add more team members as needed
  {
    name: "Jasmine Valentine",
    role: "Consultant",
    image: "/img/team/Jasmine_Valentine.jpg",
    linkedin: "",
    animationDelay: "0.4s",
  },
  {
    name: "Richard Abdul",
    role: "Consultant",
    image: "/img/team/Richard_Abdul.jpg",
    linkedin: "",
    animationDelay: "0.7s",
  },
  {
    name: "Jessica Sanchez",
    role: "Consultant",
    image: "/img/team/Jessica_Sanchez.jpg",
    linkedin: "",
    animationDelay: "1s",
  },
  {
    name: "Gabriella Lauren",
    role: "Consultant, Business Services",
    image: "/img/team/Gabriella_Lauren.jpg",
    linkedin: "",
    animationDelay: "0.2s",
  },
  {
    name: "Joseph Agabin",
    role: "Consultant",
    image: "/img/team/Joseph_Agabin.jpg",
    linkedin: "",
    animationDelay: "0.5s",
  },
  {
    "name": "Phoebe Famia",
    "role": "Compliance Specialist, Cryptocurrency Investigator",
    "image": "/img/team/Phoebe_Famia.jpg",
    "linkedin": "",
    "animationDelay": "0.6s"
  },
  {
    "name": "Alfredo Suarez",
    "role": "Team Leader, Senior Compliance Specialist, Cryptocurrency Investigator",
    "image": "img/team/Alfredo_Suarez.jpg",
    "linkedin": "",
    "animationDelay": "0.9s"
  },
  {
    "name": "Trixie Xhan",
    "role": "HR Manager",
    "image": "img/team/Trixie_Xhan.jpg",
    "linkedin": "",
    "animationDelay": "0.4s"
  }
];

const TeamSection = () => {
  return (
    <section className={styles.partner} id="partners">
      <div className={styles.container}>
        <h1 className={classNames(`${styles.title} wow animate__animated animate__fadeInUp`)} data-wow-delay="0.6s">
          <span>Get to Know Our Team: Greyzone Consulting’s Investigations Services</span>
        </h1>
      </div>
      <div className={classNames(`${styles.container} ${styles.team_container}`)}>
        {teamMembers.map((member, index) => (
          <div className={styles.single_team} key={index} style={{ padding: '0 20px' }}>
            <div style={{
                  width: "100%",
                  // display: "flex",
                  height: "31rem",
                  overflow: "hidden"
              
            }}>
              <img
                style={{ objectFit: 'contain', width: '100%'}}
                src={member.image}
                alt={`${member.name}'s photo`}
              />
            </div>
            <h2
              className={classNames(`${styles.title} wow animate__fadeInUp animate__animated`)}
              data-wow-delay={member.animationDelay}
              style={{ marginBottom: '0px' }}
            >
              <span style={{ fontSize: '24px' }}>{member.name}</span>
            </h2>
            <p
              className={classNames(` ${styles.title2} wow animate__fadeInUp animate__animated`)}
              
            >
              {member.role}
            </p>
            <a
              className={classNames(`${styles.title} wow animate__fadeInUp animate__animated`)}
              href={member.linkedin}
              data-wow-delay={member.animationDelay}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                background: 'url(https://tandhconsult.com/wp-content/uploads/2021/05/ldin.svg)',
                backgroundSize: 'contain',
              }}
            >
              <i
                className={classNames(`${styles.i} ${styles.i_insta}`)}
                style={{
                  maskImage: 'url(https://tandhconsult.com/wp-content/uploads/2021/05/ldin.svg)',
                }}
              ></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
