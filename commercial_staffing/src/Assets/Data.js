// import groupClean from './images/group_clean.jpg';
import cautionClean from './images/caution_clean.jpg';
import messyClean from './images/messy_clean.jpg';
// import relaxClean from './images/relax_clean.jpg';
import scrubberClean from './images/scrubber_clean.jpg';
import c4Staffing from './images/c4_staffing.JPEG';

const user = {
    name: "Commercial Staffing",
    aboutPic: c4Staffing,
    jobTitle: 'Cleaning with Kindness',
    altTag: 'c4Staffing',
    email: 'inquiries@commercialstaffing.com',
    mobile: '919.555.5555',
    linkedin: 'https://www.linkedin.com/commercialstaffing-c4',
    p1: 'Whether you need deep cleaning performed monthly, quarterly, or on a more specific schedule, Commercial Staffing is here for you!',
    p2: 'Our commercial cleaning services are among the best-reviewed in the area. We like to focus on our clients need from financing to efficiency. Here at Commercial Staffing we take deep cleaning serious! A failure to satisfy your unblemished facility, places a blemish on us!',
    p3: 'We look to focus on your commercail cleanliness, so that is is noticiable to clients, and is immaculate in the publics image.'
};

const about = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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