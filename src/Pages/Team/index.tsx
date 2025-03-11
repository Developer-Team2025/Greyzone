// import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
// import HttpService from "../../Components/api/HttpService";


const teamMembers = [
   {
     name: 'Benjamin Ford',
     role: 'Co-founder, CEO',
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Benjamin_Ford.jpeg`,
     linkedin: '',
     animationDelay: '0.1s',
   },
   {
     name: 'Amanda Velasquez',
     role: 'Co-founder, Blockchain Investigator',
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Amanda_Velasquez.jpeg`,
     linkedin: '',
     animationDelay: '0.4s',
   },
   {
     name: 'Jon Snowden',
     role: 'Senior Consultant, Team Leader',
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Jon_Snowden.jpeg`,
     linkedin: '',
     animationDelay: '0.7s',
   },
   {
     name: 'John Davis',
     role: 'Senior Consultant',
     image: `${import.meta.env.VITE_REDIRECT}/img/team/John_Davis.jpeg`,
     linkedin: '',
     animationDelay: '1s',
   },
   // Add more team members as needed
   {
     name: "Jasmine Valentine",
     role: "Consultant",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Jasmine_Valentine.jpeg`,
     linkedin: "",
     animationDelay: "0.4s",
   },
   {
     name: "Richard Abdul",
     role: "Consultant",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Richard_Abdul.jpeg`,
     linkedin: "",
     animationDelay: "0.7s",
   },
   {
     name: "Jessica Sanchez",
     role: "Consultant",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Jessica_Sanchez.jpeg`,
     linkedin: "",
     animationDelay: "1s",
   },
   {
     name: "Gabriella Lauren",
     role: "Consultant, Business Services",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Gabriella_Lauren.jpeg`,
     linkedin: "",
     animationDelay: "0.2s",
   },
   {
     name: "Joseph Agabin",
     role: "Consultant",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Joseph_Agabin.jpeg`,
     linkedin: "",
     animationDelay: "0.5s",
   },
   {
     "name": "Phoebe Famia",
     "role": "Compliance Specialist, Cryptocurrency Investigator",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Phoebe_Famia.jpeg`,
     "linkedin": "",
     "animationDelay": "0.6s"
   },
   {
     "name": "Alfredo Suarez",
     "role": "Team Leader, Senior Compliance Specialist, Cryptocurrency Investigator",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Alfredo_Suarez.jpeg`,
     "linkedin": "",
     "animationDelay": "0.9s"
   },
   {
     "name": "Trixie Xhan",
     "role": "HR Manager",
     image: `${import.meta.env.VITE_REDIRECT}/img/team/Trixie_Xhan.jpeg`,
     "linkedin": "",
     "animationDelay": "0.4s"
   }
 ];

const TeamSection = () => {
  // const api = HttpService;

  // interface OurTeamMembers {
  //   fullname: string;
  //   job_position: string;
  //   profile_img: {
  //     file_name: string;
  //     file_location: string;
  //     full_path_location: string;
  //   };
  // }

  // const [ourTeams, setOurTeams] = useState<OurTeamMembers[]>([]);

  // useEffect(() => {
  //   api
  //     .get("our-teams")
  //     .then((data: { our_teams: OurTeamMembers[] }) => {
  //       setOurTeams(data.our_teams);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <section className={styles.partner} id="partners">
      <div className={styles.container}>
        <h1
          className={classNames(
            `${styles.title} wow animate__animated animate__fadeInUp`
          )}
          data-wow-delay="0.6s"
        >
          <span>
            Get to Know Our Team: Greyzone Consulting’s Investigations Services
          </span>
        </h1>
      </div>
      <div
        className={classNames(`${styles.container} ${styles.team_container}`)}
      >
        {teamMembers &&
          teamMembers.map((member, index) => {
            return (
              <div
                className={styles.single_team}
                key={index}
                // style={{ padding: "0 20px" }}
              >
                <div className={styles.frame_team}>
                  <img
                    // style={{ objectFit: "contain", width: "100%" }}
                    // style={{ width: "100%" }}
                    src={`${member.image}`}
                    alt={`${member.name}'s photo`}
                  />
                </div>
                <h2
                  className={classNames(
                    `${styles.title} wow animate__fadeInUp animate__animated`
                  )}
                  data-wow-delay="0.7s"
                  style={{ marginBottom: "0px" }}
                >
                  <span style={{ fontSize: "24px" }}>{member.name}</span>
                </h2>
                <p
                  className={classNames(
                    ` ${styles.title2} wow animate__fadeInUp animate__animated`
                  )}
                >
                  {member.role}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TeamSection;
