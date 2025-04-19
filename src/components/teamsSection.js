"use client";
import React from "react";

const TeamsSection = () => {
    const team = {
        leads: [
            {
                name: "Gaurpad Shukla",
                role: "Club Lead",
                image: "/images/gaurpad.jpg",
            },
            {
                name: "Anshika Shukla",
                role: "Club Lead",
                image: "/images/ansshukla.jpg",
            },
            {
                name: "Vansh Kuwar Ji",
                role: "CP Head",
                image: "https://media.licdn.com/dms/image/v2/D5603AQFsYy1U5C10sw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713546087599?e=1750291200&v=beta&t=evPBywfqnvhmdrKTRq2AFa3sOAqIJS_Mo6zkWqML09M"
            },
            {
                name: "Piyush Kumar",
                role: "Data Science Head",
                image: "https://media.licdn.com/dms/image/v2/D5603AQETPDZ3Np6X9g/profile-displayphoto-shrink_200_200/B56ZShDPTaHQAY-/0/1737868769595?e=1750291200&v=beta&t=3YNDrk5eadj7Mxidsl-3wo7mcyZQhMjnECOjpaD998Q"
            }
        ],
        secretaries: [
            {
                name: "Himanshu Dubey",
                role: "Joint Secretary",
                image: "/images/hismanshu.png",
            },
            {
                name: "Shambhavi Keshari",
                role: "Joint Secretary",
                image: "/images/shambhavvi.jpg",
            },
        ],
        members: [
            { name: "Aditya Kumar Singh", role: "CP Head", image: "https://media.licdn.com/dms/image/v2/D5603AQGr25ehRkflkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714932076837?e=1750291200&v=beta&t=RnZjE7h-AzXcZ-r-vnvodWAlII1ya18jIcAEqpRTY8E" },
            { name: "Abhishek Yadav", role: "CP Head", image: "https://media.licdn.com/dms/image/v2/D5603AQHDm6Qn_9CMGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723821961122?e=1750291200&v=beta&t=lAyyenAPEbsuhzQCwE33no9chHHkyhRxCLNhYnULvGk" },
            { name: "Vivek Tripathi", role: "Web Dev Head", image: "https://media.licdn.com/dms/image/v2/D5603AQEL_tT7gjvr9A/profile-displayphoto-shrink_200_200/B56ZTtVzcLGsAY-/0/1739148705152?e=1750291200&v=beta&t=zoKdrx87JPf1tvKG9xiCi9GDouGW-zfd0TmvRRHJVzA" },
            { name: "Shekhar Sharma", role: "Data Science Head", image: "/images/member3" },
            { name: "Akshit Raj Sigh", role: "Web Dev Head", image: "/images/member3" },
            { name: "Deepak Singh", role: "Web Dev Head", image: "/images/member3" },


        ],
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Meet Our Team
                </h2>

                {/* Tree Structure */}
                <div className="flex flex-col items-center">
                    {/* Club Leads */}
                    <div className="flex justify-center items-center mb-8 space-x-8">
                        {team.leads.map((lead, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={lead.image}
                                    alt={lead.name}
                                    className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
                                />
                                <h3 className="text-xl font-bold mt-4">{lead.name}</h3>
                                <p className="text-sm text-gray-400">{lead.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Connector */}
                    <div className="w-1 h-12 bg-blue-500"></div>

                    {/* Secretaries */}
                    <div className="flex justify-center items-center mb-8 space-x-8">
                        {team.secretaries.map((secretary, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={secretary.image}
                                    alt={secretary.name}
                                    className="w-28 h-28 rounded-full border-4 border-purple-500 shadow-lg"
                                />
                                <h3 className="text-xl font-bold mt-4">{secretary.name}</h3>
                                <p className="text-sm text-gray-400">{secretary.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Connector */}
                    <div className="w-1 h-12 bg-purple-500"></div>

                    {/* Members */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.members.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full border-4 border-gray-500 shadow-lg"
                                />
                                <h3 className="text-lg font-bold mt-4">{member.name}</h3>
                                <p className="text-sm text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamsSection;