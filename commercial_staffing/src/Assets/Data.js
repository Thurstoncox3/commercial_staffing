import groupClean from '../Assets/images/group_clean.jpg';
import cautionClean from '../Assets/images/caution_clean.jpg';
import messyClean from '../Assets/images/messy_clean.jpg';
// import relaxClean from '../Assets/images/relax_clean.jpg';
import scrubberClean from '../Assets/images/scrubber_clean.jpg';

const user = {
    name: "Commercial Staffing",
    aboutPic: groupClean,
    jobTitle: 'Cleaning with Kindness',
    altTag: 'Group Cleaning',
    email: 'inquiries@commercialstaffing.com',
    mobile: '919.555.5555',
    linkedin: 'https://www.linkedin.com/commercialstaffing-c4',
    p1: 'Whether you need deep cleaning performed monthly, quarterly, or on a more specific schedule, Commercial Staffing is here for you!',
    p2: 'Our commercial cleaning services are among the best-reviewed in the area. We like to focus on our clients need from financing to efficiency. Here at Commercial Staffing we take deep cleaning serious! A failure to satisfy your unblemished facility, places a blemish on us!',
    p3: 'We look to focus on your commercail cleanliness, so that is is noticiable to clients, and is immaculate in the publics image.'
};

const about = [
    {
        image: cautionClean,
        altTag: '3d caution figure',
        name: 'Janitorial',
        description: 'Some of our janitorial services include, daily trash removal, floor cleaning, interior window cleaning and dusting. In addition to daily services we can also provide a weekly deep cleaning to ensure your building is free of germs, allergens and Covid-19 contamination.',
        link1: 'https://commercialstaffing.herokuapp.com/contact',
        linkBtnName: 'Request A Quote!',
        // link2:'https://commercialstaffing.herokuapp.com/careers',
        // linkBtnName: 'Careers',
    },
    {
        image: scrubberClean,
        altTag: '3d scrubber figure',
        name: 'High-Speed Buffing',
        description: 'Our High-Speed buffering is the best deep clean for your floor that you`ll come across. We "exfoliate" your floor to reveal the original glossy appearance, the process works on most floors including: vinyl, concrete, wood, tile, and laminate.',
        link1: 'https://commercialstaffing.herokuapp.com/contact',
        linkBtnName: 'Request A Quote!',
        // link2:'https://commercialstaffing.herokuapp.com/careers',
        // linkBtnName: 'Careers',
    },
    {
        image: messyClean,
        altTag: '3d messy figure',
        name: 'Pressure Washing',
        description: 'Surface preparation, makes your business stand out! Our employees focus on your care inside and out, our pressure washing services are used fore loose and peeling paint, dirt, mold and many other functions.',
        link1: 'https://commercialstaffing.herokuapp.com/contact',
        linkBtnName: 'Request A Quote!',
        // link2:'https://commercialstaffing.herokuapp.com/careers',
        // linkBtnName: 'Careers',
    },
    
];

export { user, about };