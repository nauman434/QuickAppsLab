export interface BlogCard {
    title: string;
    company: string;
    smallDescription: string;
    currentSlug: string;
    image: any;
  }
  
  interface Benefit {
    id: string;
    heading: string;
    description: string;
  }
  
  interface Testimonial {
    name: string;
    quote: string;
    occupation: string;
  }
  
  export interface FullBlog extends BlogCard {
    content: any;
    keyBenefits: Benefit[];
    offer: Benefit[];
    steps: Benefit[];
    chooseUs: Benefit[];
    faqs: Benefit[];
    testimonial: Testimonial[];
  }
  