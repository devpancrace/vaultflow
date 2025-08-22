import React from 'react';

import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FeatureSection: React.FC = () => {
    return (

        <section className=" relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Features that<br />
                        work for your<br />
                        <span className="">future.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Check out our amazing features and experience the
                        power of Vaultflow for yourself.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">

                    <div className=" glass-effect rounded-2xl p-8" style={{
                        boxShadow: 'inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 -2px 40px 0 rgba(187, 155, 255, 0.3), 0 -2px 10px 0 rgba(233, 223, 255, 0.5)'
                    }}>
                        <div className="w-12 h-12 bg-purple-custom rounded-lg  flex items-center justify-center mb-6">
                            <Image
                                src={'/analytic.png'}
                                width={50}
                                height={50}
                                alt=''
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Our Analytics Dashboard provides a clear and intuitive way to
                            visualize your data. From customizable graphs to actionable
                            insights, everything you need to make informed decisions is
                            displayed in a simple and easy-to-understand format.
                        </p>
                        <button className="text-medium  text-lg font-montserrat text-white font-[500]  underline ">
                            View dashboard →
                        </button>
                    </div>


                    <div className=" glass-effect rounded-2xl p-8" style={{
                        boxShadow: 'inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 -2px 40px 0 rgba(187, 155, 255, 0.3), 0 -2px 10px 0 rgba(233, 223, 255, 0.5)'
                    }}>
                        <div className="w-12 h-12 bg-purple-custom rounded-xl flex items-center justify-center mb-6">
                            <Image
                                src={'/token.png'}
                                width={50}
                                height={50}
                                alt=''
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Digital Credit Tokens</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Reward your customers and users with digital credit tokens that
                            can be customized to your needs. These tokens are fully
                            transferable between users and are backed up by blockchain
                            technology to ensure that they stay safe.
                        </p>
                        <button className="text-medium  text-lg font-montserrat text-white font-[500]  underline">
                            View tokens →
                        </button>
                    </div>
                </div>


                <div className=" glass-effect mt-22 rounded-2xl p-8 " style={{
                    boxShadow: 'inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 -2px 40px 0 rgba(187, 155, 255, 0.3), 0 -2px 10px 0 rgba(233, 223, 255, 0.5)'
                }}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="w-12 h-12 bg-pink-custom rounded-xl flex items-center justify-center mb-6">
                            <Image
                                src={'/code.png'}
                                width={50}
                                height={50}
                                layout='responsive'
                                alt=''
                            />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Code collaboration</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Our advanced code synchronization technology enables real
                                time, multi-user collaboration that puts teams choices at
                                startup here. Whether youre designing that team matches
                                hundreds of users connecting to a single IDE deployment,
                                everything just works. End to finish.
                            </p>
                            <button className="text-pink-custom text-pink-400 font-medium">
                                View code collaboration →
                            </button>
                        </div>
                        <div className="bg-card-bg rounded-xl p-6">
                            <div className="text-sm text-gray-400 mb-4">DataFrames</div>
                            <SyntaxHighlighter language="javascript" style={tomorrow}>
                                {`// Collaborative
async function getDataFromNetwork(userId) {
  const user = await fetch();
  return {
    id: user.id,
    name: "test",
    email: user.email
  };
}`}
                            </SyntaxHighlighter>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FeatureSection;