import React from 'react';
import './TestimonialSection.css'; // Import the CSS file for the TestimonialSection component

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: "I'm amazed by the quality of their products. The service is top-notch as well.",
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'The team at this company is incredibly professional and talented. Highly recommended!',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      quote: 'I have been a customer for years and they never disappoint. Fantastic products and support.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
