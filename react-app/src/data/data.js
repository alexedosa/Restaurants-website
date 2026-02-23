import food from '../assets/rice.webp'

export const blogPosts = [
  
  {
    id: 'b1',
    title: 'The Art of the Patty',
    excerpt: 'How we craft the perfect burger patty — tips from the grill.',
    image: {food},
    rate: "⭐⭐⭐"
  },

  {
    id: 'b2',
    title: 'Sides that Steal the Show',
    excerpt: 'Crispy fries and house-made dips that pair perfectly with burgers.',
    image: {food},
    rate: "⭐⭐⭐⭐⭐"
  }

];

export const testimonials = [
  
  { id: 't1', name: 'Aisha',
    text: 'Best burger I have had in ages. Juicy and perfectly seasoned.', 
    image: {food}, rate: "⭐⭐⭐⭐⭐"},

  { id: 't2', name: 'Mark',
    text: 'Cozy vibe and delicious menu. Will come back with friends!', 
    image: {food}, rate: "⭐⭐⭐"},

  { id: 't3', name: 'Jade',
    text: 'Fast service and the smoky BBQ is my go-to. Highly recommend.',
    image: {food}, rate: "⭐⭐⭐⭐"}
    
];

export default { burgers, blogPosts, testimonials };