import React, { useState } from 'react';
import { Card, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Profile = () => {
    const [activeTab, setActiveTab] = useState('active');

    const activeQuestData = [
        {id: 1, username: "Hero1", title: "Retrieve the Lost Artifact", location: "Ancient Ruins"},
        {id: 2, username: "Adventurer42", title: "Uncover the Mystery of the Forbidden Forest", location: "Dark Woods"},
    ];

    const completedQuestData = [
        {id: 1, username: "Champion23", title: "Defeat the Ancient Wyrm", location: "Dragon's Peak"},
    ];

    const myQuestData = [
        {id: 1, username: "LegendaryKnight", title: "Retrieve the Excalibur Sword", location: "Camelot"},
    ];

    const renderQuests = (questData) => (
        questData.map((quest) => (
            <Card
                key={quest.id}
                hoverable
                className="shadow-md mb-4"
            >
                <div className="flex flex-col items-center">
                    <div className="flex justify-between w-full">
                        <div className="text-sky-500 font-bold xl:text-xl text-3xl">
                            {quest.username}
                        </div>
                        <UserOutlined />
                    </div>
                    <div className="mt-4 font-bold text-black xl:text-lg text-xl">
                        <Text type="secondary">{quest.title}</Text>
                    </div>
                    <div className="text-gray-500 mt-2">{quest.location}</div>
                </div>
            </Card>
        ))
    );

    return (
        <div className="flex flex-col w-full justify-center items-center"> 
            <div className="flex justify-between items-center w-full p-4 mb-5 border">
            <h1 className="text-lg text-teal-600 font-bold">Welcome Adventurer!</h1>
                <div className="flex justify-center items-center">
                    <div className="w-full justify-between">
                        <div className="text-lg text-teal-700 font-bold">
                            XP: Coming Soon!
                        </div>
                        <p className="ml-4 text-secondary">Rank: Coming Soon!</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full p-4">
                <div className="mb-4 flex">
                    <button
                        className={`px-4 py-2 ${activeTab === 'active' ? 'text-teal-600 font-bold' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('active')}
                    >
                        Active Quests
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'completed' ? 'text-teal-600 font-bold' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('completed')}
                    >
                        Completed Quests
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'myQuests' ? 'text-teal-600 font-bold' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('myQuests')}
                    >
                        My Quests
                    </button>
                </div>

                {activeTab === 'active' && (
                    <div className="w-full">
                        {renderQuests(activeQuestData)}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="w-full">
                        {renderQuests(completedQuestData)}
                    </div>
                )}

                {activeTab === 'myQuests' && (
                    <div className="w-full">
                        {renderQuests(myQuestData)}
                    </div>
                )}
            </div>
        </div> // Closing wrapper div
    );
};

export default Profile;
