import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleLeft, FaAngleRight, FaLightbulb, FaPlus, FaRegCaretSquareRight } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { FaArrowRotateRight } from 'react-icons/fa6';
import hygGex from "../../assets/component.png";
const Mathematics = () => {
    return (
        <div className="ml-9 mt-12">
            <h1 className="text-3xl font-bold text-sky-900 mt-12">Relations and Functions ( Mathematics )</h1>

            <div className="mt-12">
                <Tabs>
                    <div className="flex justify-center my-5">
                        <TabList className="font-bold text-lg text-sky-500">
                            <Tab>Study</Tab>
                            <Tab>Quiz</Tab>
                            <Tab>Test</Tab>
                            <Tab>Game</Tab>
                            <Tab>Others</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="text-center md:w-6/12 w-full mx-auto space-y-28 py-3 bg-[#185FD0] rounded-2xl text-white px-7">
                            <div className="flex justify-between">
                                <h1 className="text-2xl cursor-pointer"><FaLightbulb />
                            </h1>
                                <h1 className="text-2xl cursor-pointer"><FiMusic />
                                </h1>
                            </div>
                            <h1 className="flex justify-center items-center text-3xl font-bold">9 + 6 + 7x - 2x - 3</h1>
                            <div> </div>
                        </div>
                        <div className="flex justify-between items-center text-3xl font-semibold w-full md:w-5/12 mx-auto mt-5">
                            <h1 className="cursor-pointe text-[#185FD0]"><FaArrowRotateRight /></h1>
                            <h1 className="cursor-pointer bg-[#185FD0] rounded-full p-1 text-white"><FaAngleLeft /></h1>
                            <h1 className="text-[#185FD0]">01/10</h1>
                            <h1 className="cursor-pointer bg-[#185FD0] rounded-full p-1 text-white"><FaAngleRight />
                            </h1>
                            <h1 className="cursor-pointer text-[#185FD0]"><FaRegCaretSquareRight />
                            </h1>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h1 className="text-center">Content for Quiz Tab</h1>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h1 className="text-center">Content for Test Tab</h1>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h1 className="text-center">Content for Game Tab</h1>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h1 className="text-center">Content for Others Tab</h1>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            <div className="my-12 md:flex justify-between items-center ">
                <div>
                    <img src={hygGex} alt="" />
                </div>
                <div className="flex items-center gap-3">
                    <FaPlus className="bg-[#1141A4] rounded-full p-1 text-3xl text-white cursor-pointer"/>

                    <p className="font-bold text-lg text-[#1141A4]"> Create Flashcard</p>
                </div>
            </div>
        </div>
    );
};

export default Mathematics;