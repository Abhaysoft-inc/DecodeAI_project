import React from 'react';

const Testimonial = ({ quote, author, role, imageUrl }) => {
    return (
        <div className="bg-gray-900 p-6 rounded-xl relative">
            <div className="absolute -top-4 left-6 text-4xl text-blue-500">"</div>
            <p className="text-gray-300 mt-4 mb-6">{quote}</p>
            <div className="flex items-center">
                <img src={imageUrl} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                    <h4 className="text-white font-medium">{author}</h4>
                    <p className="text-gray-400 text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Joining the Programming and Tech Skill Club has been a game-changer for my career. The hands-on projects and support from the community helped me land my dream job.",
            author: "Sarah Chen",
            role: "Frontend Developer",
            imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
        },
        {
            quote: "The courses are well-structured and the mentors are incredibly knowledgeable. I've learned more in 6 months than I did in 2 years of self-study.",
            author: "Marcus Johnson",
            role: "Full Stack Engineer",
            imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
        },
        {
            quote: "As someone switching careers, this club provided me with the structure and community I needed to successfully transition into tech.",
            author: "Elena Rodriguez",
            role: "Data Scientist",
            imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
        }
    ];

    return (
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Members Say</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hear from the people who have transformed their skills and careers with us
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            imageUrl={testimonial.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;