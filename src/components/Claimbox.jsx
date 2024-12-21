import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faLocationDot, faLanguage, faFile,faFileContract } from '@fortawesome/free-solid-svg-icons';
import DropArea from './DropArea';
import Statement from './DropAreaFile';
const Claimbox = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="md:row-span-8 grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2">
            {/* First Section */}
            <div className="bg-white flex flex-col justify-center p-4">
    <div className="flex flex-row items-center gap-3 mb-4">
    <FontAwesomeIcon icon={faCalculator} size="xl" style={{color: "#289af0"}}/>
        <p className='text-xl'>Claim Value</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 sm:max-w-md sm:mx-auto">
        {/* Contract Value Section */}
        <div className="flex flex-col w-full">
            <label htmlFor="contractValue1" className='text-slate-500'>Contract Value</label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <input
                    type="text"
                    id="contractValue1"
                    {...register('contractValue1', { required: 'Contract Value is required' })}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-1/2"
                />
                <select
                    id="currency1"
                    {...register('currency1', { required: 'Currency is required' })}
                    className="relative inline-flex items-center border border-gray-300 rounded-md px-3 py-2 text-gray-600 hover:border-gray-400 cursor-pointer w-full sm:w-1/4"
                >
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="YEN">YEN</option>
                    <option value="EURO">EURO</option>
                </select>
            </div>
            {errors.contractValue1 && (
                <p className="text-red-500 text-sm">{errors.contractValue1.message}</p>
            )}
        </div>

        {/* Claim Value Section */}
        <div className="flex flex-col w-full">
            <label htmlFor="claimValue1" className='text-slate-500'>Claim Value</label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <input
                    type="text"
                    id="claimValue1"
                    {...register('claimValue1', { required: 'Claim Value is required' })}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-1/2"
                />
                <select
                    id="currency2"
                    {...register('currency2', { required: 'Currency is required' })}
                    className="relative inline-flex items-center border border-gray-300 rounded-md px-3 py-2 text-gray-600 hover:border-gray-400 cursor-pointer w-full sm:w-1/4"
                >
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="YEN">YEN</option>
                    <option value="EURO">EURO</option>
                </select>
            </div>
            {errors.claimValue1 && (
                <p className="text-red-500 text-sm">{errors.claimValue1.message}</p>
            )}
        </div>
    </form>
</div>


           {/* Second Section */}
<div className="bg-white flex flex-col justify-center p-4">
    <div className="flex flex-row items-center gap-3 mb-4">
    <FontAwesomeIcon icon={faLocationDot} size='2xl' style={{color: "#289af0"}}/>
        <p className='text-xl'>Place</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 sm:max-w-md sm:mx-auto">
        {/* Place Section */}
        <div className="flex flex-col w-full">
            <label htmlFor="place" className='text-slate-500'>Place</label>
            <input
                type="text"
                id="place"
                placeholder='Select place'
                {...register('place', { required: 'Place is required' })}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            {errors.place && <p className="text-red-500 text-sm">{errors.place.message}</p>}
        </div>

        {/* Radio Buttons */}
        <div className="flex flex-col w-full">
            <label>Is the place for the proceedings the one mentioned in the agreement?</label>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        value="yes"
                        {...register('filedClaim', { required: 'Please select an option' })}
                    />
                    Yes
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        value="no"
                        {...register('filedClaim', { required: 'Please select an option' })}
                    />
                    No
                </label>
            </div>
            {errors.filedClaim && <p className="text-red-500 text-sm">{errors.filedClaim.message}</p>}
        </div>
    </form>
</div>

          {/* Second Section */}
<div className="bg-white flex flex-col justify-center p-4">
    <div className="flex flex-row items-center gap-3 mb-4">
    <FontAwesomeIcon icon={faLanguage} size='2xl' style={{color: "#289af0"}}/>
        <p className='text-xl'>Language</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 sm:max-w-md sm:mx-auto">
        {/* Language Section */}
        <div className="flex flex-col w-full">
            <label htmlFor="place" className='text-slate-500'>Language</label>
            <input
                type="text"
                id="place"
                placeholder='Select Language'
                {...register('place', { required: 'Place is required' })}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            {errors.place && <p className="text-red-500 text-sm">{errors.place.message}</p>}
        </div>

        {/* Radio Buttons */}
        <div className="flex flex-col w-full">
            <label>Is the language for the proceedings the one mentioned in the agreement?</label>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        value="yes"
                        {...register('filedClaim', { required: 'Please select an option' })}
                    />
                    Yes
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        value="no"
                        {...register('filedClaim', { required: 'Please select an option' })}
                    />
                    No
                </label>
            </div>
            {errors.filedClaim && <p className="text-red-500 text-sm">{errors.filedClaim.message}</p>}
        </div>
    </form>
</div>


          {/* File Upload Sections */}
{/* First Empty Section */}
<div className="bg-white p-4">
    <div className="flex flex-row items-center gap-3 mb-4">
    <FontAwesomeIcon icon={faFile} size="xl" style={{color: "#289af0"}}/>
        <p className='text-xl'>Statement</p>
    </div>
    <div><Statement></Statement></div>
</div>


        {/* Second Empty Section */}
<div className="bg-white p-4">
    <div className="flex flex-row items-center gap-3 mb-4">
    <FontAwesomeIcon icon={faFileContract} size="xl" style={{color: "#289af0"}}/>
        <p className='text-xl'>Agreement under Disputes</p>
    </div>
    <div className='flex flex-col md:flex-row gap-4'><DropArea title={"Upload the contract"}/>
            <DropArea title={"Agreement under Disputes"}/>
    </div>
</div>

            {/* Second Empty Section */}
<div className="bg-white p-4">
    <div className="flex flex-row items-center gap-3 mb-4">
    <FontAwesomeIcon icon={faFileContract} size="xl" style={{color: "#289af0"}}/>
        <p className='text-xl'>Additional Documentation</p>
    </div>
    <div><DropArea title={"Additional Documentation"}/></div>
</div>

        </div>
    );
};

export default Claimbox;