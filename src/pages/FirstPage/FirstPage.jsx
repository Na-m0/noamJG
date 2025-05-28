import React from "react";
import { useTransition } from "../Transition/Transition";
import "./FirstPage.css";

const FirstPage = () => {
    const { startTransition } = useTransition();

    return (
        <div className="mt-40 p-6">
            <div className="pl-[15%]">
                <h1 className="text-left">Noam</h1>
                <h1 className="text-left">Joly-Girods</h1>
            </div>
            <div className="text-center">
                <button 
                    className="bg-[#EDE8FF] mt-[10%] px-12 button_first"
                    onClick={() => startTransition("/home")}
                >
                    Me découvrir
                </button>
            </div>
        </div>
    );
};

export default FirstPage;
