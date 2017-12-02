const data = {
  phone: '020 7123 4567',
  address: 'test@treatwell.co.uk',
  email: '38a Lea Bridge Road <br> London <br> E5 9QD <br> W1T 3PE',
  venueName: 'Sarah\'s Day Spa',
  image: 'http://localhost:3000/venue-image.jpeg',
  socialMedia: {
    facebook: 'http://www.facebook.com',
    instagram: 'http://www.instagram.com',
    twitter: 'http://twitter.com',
  },
  description: 'Sarah Snips is a hairdressers and salon based in Marylebone, London. We offer a range of hair services from experienced professionals to help you achieve your perfect style, as well as a selection of beauty treatments to add that finishing touch.',
  products: [{
    image: 'http://localhost:3000/p1.png',
  }, {
    image: 'http://localhost:3000/p2.png',
  }, {
    image: 'http://localhost:3000/p3.png',
  }, {
    image: 'http://localhost:3000/p4.png',
  }],
  workingHours: [{
    day: 'Monday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Tuesday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Thrusday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Wendnesday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Friday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Saturday',
    open: false,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Sunday',
    open: false,
    opensAt: '08:00',
    closesAt: '22:00',
  },
  ],
};

export default data;
