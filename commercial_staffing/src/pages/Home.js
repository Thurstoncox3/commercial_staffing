import { user } from '../Assets/Data';

const Home = () => (
    <div>
        <div className='bg2'>
            <div className='container hero-text'>
                <h1>{user.name}</h1>
                <h2>{user.jobTitle}</h2>
            </div>
        </div>
        <div className='bg'>
            <div className='container about-wrapper'>
                <div className='row'>
                    <div className='me-text col'>
                        <h3 className='col about' style={{ fontSize: '260%' }}>About</h3>
                        <div className='line'></div>
                        <p>{user.p1}</p>
                        <p>{user.p2}</p>
                        <p>{user.p4}</p>
                    </div>
                    <div className='me-image col'>
                        <img src={user.aboutPic} alt={user.altTag} />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg3'>
            <div className='container skills-wrapper'>
                <div className='row'>
                    <h3 className='col-12 skills' style={{ fontSize: '260%'}}>What We Offer</h3>
                    <div className='line'></div>
                </div>
                <div className='row skills-list'>
                    <div className='col'>
                        <img src='' alt=''/>
                        <h4>Commercial Floor Cleaning</h4>
                        <p>
                            a;ldjfajdfajhd;kag;jkd;fajksd;fajs;kldjfa;lsdjfasdj;flajsd;klfjadkfjlasdjf;lajkdfadjfadjf;lajkdf;jadfjka;jdfas;
                        </p>
                    </div>
                    <div className='col'>
                        <img src='' alt=''/>
                        <h4>Industrial Scale Cleaning</h4>
                        <p>
                            a;ldjfajdfajhd;kag;jkd;fajksd;fajs;kldjfa;lsdjfasdj;flajsd;klfjadkfjlasdjf;lajkdfadjfadjf;lajkdf;jadfjka;jdfas;
                        </p>
                    </div>
                    <div className='col'>
                        <img src='' alt=''/>
                        <h4>Janitorial Services</h4>
                        <p>
                            a;ldjfajdfajhd;kag;jkd;fajksd;fajs;kldjfa;lsdjfasdj;flajsd;klfjadkfjlasdjf;lajkdfadjfadjf;lajkdf;jadfjka;jdfas;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;