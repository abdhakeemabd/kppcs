import React from 'react';
import '../assets/style/css/team.css';
import Team1 from '../assets/images/team/1.webp';
import Team2 from '../assets/images/team/2.webp';
import Team3 from '../assets/images/team/6.webp';
import Team4 from '../assets/images/team/4.webp';
import Team5 from '../assets/images/team/5.webp';
import Team6 from '../assets/images/team/8.webp';
import Team7 from '../assets/images/team/9.webp';



const teamMembers = [
  {
    id: 1,
    name: 'Nizam',
    position: 'CEO / Founder',
    image: Team1,
  },
  {
    id: 2,
    name: 'Musthafa ',
    position: 'Business Head',
    image: Team2,
  },
  {
    id: 3,
    name: 'Salman',
    position: 'Technical Head ',
    image: Team5,
  },
  {
    id: 4,
    name: 'Nyothika Pattniak',
    position: 'Technical Manager ',
    image: Team4,
  },
  {
    id: 5,
    name: 'Teesha Jain',
    position: 'Sr. Consultant',
    image: Team7,
  },
  {
    id: 6,
    name: 'Shihab',
    position: 'Product Head',
    image: Team3,
  },
  {
    id: 7,
    name: 'Saidhalavi',
    position: 'Treasury Head',
    image: Team6,
  },
];

function Team() {
  return (
    <section className='team-sec'>
      <div className="container">
        <div className="row">
            <div className="col-12 mb-3" data-aos="fade-down" data-aos-offset="10">
            <h4>Our Team</h4>
            </div>
          {teamMembers.map((member) => (
            <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-offset="10" key={member.id}>
              <div className="team-card">
                <div className="img-card">
                  <img className='team-img' src={member.image} alt={member.name}  loading='lazy'/>
                </div>
                <div className='cont'>
                  <h5>{member.name}</h5>
                  <h6>{member.position}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
