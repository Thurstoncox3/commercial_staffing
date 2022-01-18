import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { user } from '../Assets/Data';
import Button from 'react-bootstrap/Button';

const Contact = () => (
    <main className='bg3'>
        <div className='container connect-wrapper'>
            <div className='row'>
                <h3 className='col-12 connect' style={{ fontSize: '260%' }}>Let's Chat</h3>
                <div className='line'></div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form>
                        <div className='form-group row'>
                            <label htmlFor='inputName' className='col-sm-2 form-control-label text-sm-right'>Name: </label>
                            <div className='col-sm-8'>
                                <input type='text' className='form-control' id='inputName' placeholder='Name' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='inputEmail' className='col-sm-2 form-control-label text-sm-right'>Email: </label>
                            <div className='col-sm-8'>
                                <input type='email' className='form-control' id='inputEmail' placeholder='Email' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='inputMessage' className='col-sm-2 form-control-label text-sm-right'>Message: </label>
                            <div className='col-sm-8'>
                                <textarea className='form-control' placeholder='Write us a Message' rows='5' id='comment'></textarea>
                            </div>
                        </div>
                        <div className='col-sm-12 text-center'>
                            <Button type='submit' style={{ backgroundColor: '#bd030d', border: 'none' }}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row socials'>
                <div className='col'>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    <a href={`mailto:${user.name}`}><p>{user.email}</p></a>
                </div>
                <div className='col'>
                    <span><FontAwesomeIcon icon={faMobile} /></span>
                    <a href={`tel:${user.mobile}`}><p>{user.mobile}</p></a>
                </div>
                <div className='col'>
                    <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    <a href={user.linkedin}><p>{user.name}</p></a>
                </div>
                <div className='col'>
                    <span><FontAwesomeIcon icon={faFacebook} /></span>
                    <a href={user.facebook}><p>{user.name}</p></a>
                </div>
            </div>
        </div >
    </main >
);

export default Contact;