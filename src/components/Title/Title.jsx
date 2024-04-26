import { FaAngleRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";

const Title = () => {
    return (
        <div className="ml-9 flex items-center my-12">
            <h1 className="cursor-pointer text-2xl"><GoHome />
            </h1>
            <h1 className="cursor-pointer bg-white rounded-full p-1 text-black"><FaAngleRight />
            </h1>
            <p>Flashcard</p>
            <h1 className="cursor-pointer bg-white rounded-full p-1 text-black"><FaAngleRight />
            </h1>
            <p>Mathematics</p>
            <h1 className="cursor-pointer bg-white rounded-full p-1 text-black"><FaAngleRight />
            </h1>
            <p className="text-[#1141A4] font-bold">Relation and Function</p>
        </div>
    );
};

export default Title;