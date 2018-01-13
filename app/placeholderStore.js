// @flow
const data: State = {
  phone: '020 7123 4567',
  address: '38a Lea Bridge Road <br> London <br> E5 9QD <br> W1T 3PE',
  email: 'test@treatwell.co.uk',
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
  }],
  services: [{
    name: 'Haircuts & Hairdressing',
    products: [{
      productName: 'Hairwash & Finish with Olaplex Conditioning Treatment',
    }, {
      productName: 'Ladies Wash & Cut',
    }, {
      productName: 'Hairwash & Finish',
    }, {
      productName: 'Hairwash, Haircut & Finish',
    }, {
      productName: 'Hairwash, Haircut & Finish with Olaplex Conditioning Treatment',
    }],
  }, {
    name: 'Keratin/ brazilian blow dry',
    products: [{
      productName: 'Hairwash & Finish with Olaplex Conditioning Treatment',
    }],
  }, {
    name: 'Hair Colouring & Highlights',
    products: [{
      productName: 'Hairwash & Finish with Olaplex Conditioning Treatment',
    }],
  }],
  employees: [{
    name: 'James Smith',
    image: '',
    description: 'He is a cool dude',
    profession: 'Hair dresser',
  }, {
    name: 'Alex Cameron Smith',
    image: '',
    description: 'Cuts Hair like a pro',
    profession: 'Hair dresser',
  }],
};

export default data;
