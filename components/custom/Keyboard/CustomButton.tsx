import React from 'react'

type KeyButtonProps = {
    label?: string;
    subLabel?: string;
    icon?: React.ReactNode;
    wide?: boolean;
    space?: boolean;
};


const CustomButton = ({ label, subLabel, icon, wide, space }: KeyButtonProps) => {


    return (
        <button
            className={`flex flex-col hover:scale-108 transition-transform duration-200 ease-in-out items-center justify-center rounded-md border cursor-pointer border-gray-900 text-white p-2 m-0.5 
            shadow-lg shadow-neutral-100/50 active:scale-95 active:shadow-inner

        ${space ? 'w-[900px]' : wide ? 'w-[150px]' : 'w-20'} h-12 bg-black`}
        >
            {icon ? icon : (
                <>
                    {subLabel && <span className="text-sm text-center text-gray-400">{subLabel}</span>}
                    <span className="w-fit text-center text-sm">{label}</span>
                </>
            )}
        </button>
    )
}


export default CustomButton