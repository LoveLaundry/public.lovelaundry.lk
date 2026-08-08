const Footer = () => {
    return (
        <footer className="border-t border-neutral-100 bg-white px-5 py-10 pb-32 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                    <div className="font-black">
                        Love Laundry
                    </div>

                    <div className="mt-1 text-xs text-neutral-400">
                        Fresh. Clean. Delivered with love.
                    </div>
                </div>

                <div className="text-xs text-neutral-400">
                    © {new Date().getFullYear()} Love Laundry. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;