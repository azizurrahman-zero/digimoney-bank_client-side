import React from 'react';

const BankAdvantage = ({advantage,score}) => {
    return (
        <div>
            <h1 className='lg:text-5xl text-3xl font-bold text-white'>{score}</h1>
            <p className='text-white mt-10 w-[80%]'>{advantage}</p>
            
        </div>
    );
};

export default BankAdvantage;