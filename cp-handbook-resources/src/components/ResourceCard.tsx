import React from 'react';

interface ResourceCardProps {
    title: string;
    description: string;
    link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link }) => {
    return (
        <div className="resource-card">
            <h3 className="resource-title">{title}</h3>
            <p className="resource-description">{description}</p>
            <a href={link} className="resource-link" target="_blank" rel="noopener noreferrer">
                Learn More
            </a>
        </div>
    );
};

export default ResourceCard;