import React, { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { fetchResources } from '../utils/fetchResources';
import './resources.css';

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const getResources = async () => {
            const data = await fetchResources();
            setResources(data);
        };
        getResources();
    }, []);

    return (
        <div className="resources-container">
            <h1 className="resources-title">Resources</h1>
            <div className="resources-grid">
                {resources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
};

export default Resources;