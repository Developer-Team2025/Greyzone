
import { useEffect, useState } from 'react';
import styles from './style.module.scss'
import classNames from 'classnames'
import HttpService from '../../Components/api/getValue';

const TeamSection = () => {

  const api = HttpService

  interface OurTeamMembers {
    fullname: string;
    job_position: string;
    profile_img: {
      file_name: string;
      file_location: string;
      full_path_location: string;
    };
  }

  const [ourTeams, setOurTeams] = useState<OurTeamMembers[]>([]);

  useEffect(() => {
    api.get('/our-teams')
      .then((data: { our_teams: OurTeamMembers[] }) => {
        setOurTeams(data.our_teams)
        console.log(data.our_teams)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <section className={styles.partner} id="partners">
      <div className={styles.container}>
        <h1 className={classNames(`${styles.title} wow animate__animated animate__fadeInUp`)} data-wow-delay="0.6s">
          <span>Get to Know Our Team: Greyzone Consulting’s Investigations Services</span>
        </h1>
      </div>
      <div className={classNames(`${styles.container} ${styles.team_container}`)}>
        {
          ourTeams.map((member, index) => {
            return (
              <div className={styles.single_team} key={index} style={{ padding: '0 20px' }}>
                <div style={{
                  width: "100%",
                  height: "31rem",
                  overflow: "hidden"
                }}>
                  <img
                    style={{ objectFit: 'contain', width: '100%' }}
                    src={`${member.profile_img.full_path_location}`}
                    alt={`${member.fullname}'s photo`}
                  />
                </div>
                <h2
                  className={classNames(`${styles.title} wow animate__fadeInUp animate__animated`)}
                  data-wow-delay="0.7s"
                  style={{ marginBottom: '0px' }}
                >
                  <span style={{ fontSize: '24px' }}>{member.fullname}</span>
                </h2>
                <p
                  className={classNames(` ${styles.title2} wow animate__fadeInUp animate__animated`)}
                >
                  {member.job_position}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default TeamSection;