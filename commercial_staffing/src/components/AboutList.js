import { about } from '../Assets/Data';
import Button from 'react-bootstrap/Button';

const AboutList = () => {
    return(
        <>
        {about.map((about) => (
                <div key={about.id} className='col-lg-4' id='about'>
                    <div className='card mb-3'>
                        <img
                            className='card-img-top img-fluid'
                            src={about.image}
                            alt={about.altTag}
                        />
                    <article className='card-body'>
                        <h5 className='card-title'>{about.name}</h5>
                        <p className='card-text'>{about.description}</p>
                        <Button href={about.link1} variant='outline-dark' size='sm'>
                            {about.link1BtnName}
                        </Button>{''}
                        {/* <Button href={about.link2} variant='outline-dark' size='sm'>
                            {about.link2BtnName}
                        </Button> */}
                    </article>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AboutList;

