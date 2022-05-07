import React from 'react';

const OurService = () => {
    return (
        <div className='grid md:grid-cols-4 gap-3 mx-40'>
            <div>
                <div className="flex justify-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">B2B Services</h5>
                        <p className="text-gray-700 text-base mb-4">
                        A business-to-business, or B2B, business model is one in which a company sells their products first to another business, which will then often sell the product at a retail store at a marked up price.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">B2P Services</h5>
                        <p className="text-gray-700 text-base mb-4">
                        B2P or Business to People marketing is a set of strategies for achieving ideal response between the end user and business. It recognizes that it is not businesses that make the purchase decisions.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">B2C Services</h5>
                        <p className="text-gray-700 text-base mb-4">
                        The term business-to-consumer (B2C) refers to the process of selling products and services directly between a business and consumers who are the end-users of its products or services.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">C2C Services</h5>
                        <p className="text-gray-700 text-base mb-4">
                        Customer to customer (C2C) is a business that enables customers to trade with each other, frequently in an online.C2C are business that emerged with e-commerce technology and the sharing economy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;