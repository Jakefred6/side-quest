import {Card, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";

const {Text} = Typography;


const Profile = () => {
    const activeQuestData = [
        {id: 1, username: "Hero1", title: "Retrieve the Lost Artifact", location: "Ancient Ruins"},
        {id: 2, username: "Adventurer42", title: "Uncover the Mystery of the Forbidden Forest", location: "Dark Woods"},
        {id: 3, username: "MageMaster", title: "Study the Arcane Runes", location: "Magical Library"},
        {id: 4, username: "StealthyRogue", title: "Steal the Crown Jewels", location: "Royal Palace"},
        {id: 5, username: "SkyPirate99", title: "Plunder the Floating Sky Islands", location: "Sky Kingdom"},
        {id: 6, username: "Explorer007", title: "Chart the Unexplored Seas", location: "Mysterious Ocean"},
        {id: 7, username: "DungeonDelver", title: "Conquer the Labyrinth of Shadows", location: "Haunted Dungeon"},
        // Add more quest data as needed
    ];

    const completedQuestData = [
        {id: 1, username: "Champion23", title: "Defeat the Ancient Wyrm", location: "Dragon's Peak"},
        {id: 2, username: "RescuerQueen", title: "Rescue the Enchanted Princess", location: "Mystical Palace"},
        {id: 3, username: "DesertNomad", title: "Find the Oasis in the Endless Desert", location: "Sands of Time"},
        {id: 4, username: "GhostWhisperer", title: "Communicate with the Spirits", location: "Ethereal Cemetery"},
        // Add more quest data as needed
    ];

    const myQuestData = [
        {id: 1, username: "LegendaryKnight", title: "Retrieve the Excalibur Sword", location: "Camelot"},
        {id: 2, username: "ShadowAssassin", title: "Assassinate the Dark Overlord", location: "Shadow Fortress"},
        {id: 3, username: "SkyExplorer", title: "Reach the Celestial Observatory", location: "Celestial Peak"},
    ];


    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex justify-between p-4 mb-5 border  items-center">
                <h1 className="text-lg text-teal-600 font-bold">Jake Marsee</h1>

                    <div className="flex justify-center items-center">
                        <div className=" w-full justify-between">
                            <div className="text-lg text-teal-700 font-bold">
                                XP: 1000
                            </div>
                            <p type="secondary">Rank: 100</p>
                        </div>
                    </div>
            </div>
            <div className="flex flex-row w-full justify-center gap-5">

                <div className="flex flex-col border p-4 overflow-y-auto"
                     style={{height: "calc(100vh - 32px)", width: "30%"}}>
                    {/*  Header of the section */}
                    <div className="flex flex-row w-full justify-between mb-4">
                        <div className="xl:text-xl text-3xl text-teal-600 font-bold">
                            Active Quests
                        </div>
                    </div>
                    {/* Loop through questData and create a Card for each quest */}
                    {activeQuestData.map((quest) => (
                        <Card
                            key={quest.id}
                            hoverable={true}
                            loading={false}
                            className="shadow-md mb-4"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row w-full justify-between">
                                    <div className="xl:text-xl text-3xl text-sky-500 font-bold">
                                        {quest.username}
                                    </div>
                                    <UserOutlined/>
                                </div>
                                <div className="mt-4 xl:text-lg text-xl text-black font-bold">
                                    <Text type="secondary">{quest.title}</Text>

                                </div>
                                <div className="mt-2 text-gray-500">{quest.location}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex flex-col border p-4 overflow-y-auto"
                     style={{height: "calc(100vh - 32px)", width: "30%"}}>
                    {/*  Header of the section */}
                    <div className="flex flex-row w-full justify-between mb-4">
                        <div className="xl:text-xl text-3xl text-teal-600 font-bold">
                            Completed Quests
                        </div>
                    </div>
                    {/* Loop through questData and create a Card for each quest */}
                    {completedQuestData.map((quest) => (
                        <Card
                            key={quest.id}
                            hoverable={true}
                            loading={false}
                            className="shadow-lg mb-4"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row w-full justify-between">
                                    <div className="xl:text-xl text-3xl text-sky-500 font-bold">
                                        {quest.username}
                                    </div>
                                    <UserOutlined/>
                                </div>
                                <div className="mt-4 xl:text-lg text-xl text-black font-bold">
                                    <Text type="secondary">{quest.title}</Text>

                                </div>
                                <div className="mt-2 text-gray-500">{quest.location}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex flex-col border p-4 overflow-y-auto"
                     style={{height: "calc(100vh - 32px)", width: "30%"}}>
                    {/*  Header of the section */}
                    <div className="flex flex-row w-full justify-between mb-4">
                        <div className="xl:text-xl text-3xl text-teal-600 font-bold">
                            My Quests
                        </div>
                    </div>
                    {/* Loop through questData and create a Card for each quest */}
                    {myQuestData.map((quest) => (
                        <Card
                            key={quest.id}
                            hoverable={true}
                            loading={false}
                            className="shadow-lg mb-4"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row w-full justify-between">
                                    <div className="xl:text-xl text-3xl text-sky-500 font-bold">
                                        {quest.username}
                                    </div>
                                    <UserOutlined/>
                                </div>
                                <div className="mt-4 xl:text-lg text-xl text-black font-bold">
                                    <Text type="secondary">{quest.title}</Text>

                                </div>
                                <div className="mt-2 text-gray-500">{quest.location}</div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Profile;