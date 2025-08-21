import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <div className="space-y-2 text-gray-400 text-sm">
                        <p>Work inquiries: work@vaultflow.com</p>
                        <p>PR and speaking: press@vaultflow.com</p>
                        <p>New business: newbusiness@vaultflow.com</p>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-semibold mb-4">Address</h4>
                    <div className="space-y-2 text-gray-400 text-sm">
                        <p>398 11th Street, Floor 2</p>
                        <p>San Francisco, CA 94103</p>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-semibold mb-4">Social</h4>
                    <div className="space-y-2 text-gray-400 text-sm">
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>TikTok</p>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-semibold mb-4">Careers</h4>
                    <div className="space-y-2 text-gray-400 text-sm">
                        <p>Careers@Vaultflow.com</p>
                        <p className="text-xs pt-4">© 2023 all rights reserved</p>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-end mt-8">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-custom rounded-lg flex items-center justify-center">
                         <Image
                                            src={'/logo.png'}
                                            width={50}
                                            height={50}
                                            alt="logo"
                                           />
                    </div>
                    <span className="text-xl font-semibold text-white">Vaultflow</span>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;