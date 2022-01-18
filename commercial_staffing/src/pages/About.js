import AboutList from '../components/AboutList';

const About = () => {
    retrun (
        <div className='about'>
            <main className='container'>
                <section className='row'>
                    <h3 className='col-12 connect' style={{ fontSize: '260%' }}>Our Work</h3>
                    <div className='line2'></div>
                </section>
                <div className='row'>
                    <AboutList />
                </div>
            </main>
        </div>
    );
};

export default About;