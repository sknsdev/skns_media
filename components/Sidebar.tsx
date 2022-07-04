import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";


import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";
import Discover from "./Discover";


const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const userProfile = false;

	const defaultLink =
		"flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

	const loginButton =
		"bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] rounded-md outline-none w-full mt-3 p-2 hover:text-white hover:bg-[#F51997] cursor-pointer transition-all";

	return (
		<div>
			<div
				className='block xl:hidden m-2 ml-4 mt-3 text-xl'
				onClick={() => setShowSidebar((prevstate) => !prevstate)}>
				{showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
			</div>
			{showSidebar && (
				<div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
					<div className='xl:border-b-2 border-gray-200 xl:pb-4'>
						<Link href='/'>
							<div className={defaultLink}>
								<p className='text-2xl'>
									<AiFillHome />
								</p>
								<span className='hidden text-xl xl:block'>For You</span>
							</div>
						</Link>
					</div>
					{!userProfile && (
						<div className='px-2 py-4 hidden xl:block'>
							<p className='text-gray-400'>Login to like and comment videos</p>
							<div className=''>
								<GoogleLogin
									clientId=''
									render={(renderProps) => (
										<button
											className={loginButton}
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}>
											Login via Google
										</button>
									)}
									onSuccess={() => {}}
									onFailure={() => {}}
									cookiePolicy={"single_host_origin"}
								/>
							</div>
						</div>
					)}

                    <Discover />
                    <SuggestedAccounts />
                    <Footer />
				</div>
			)}
		</div>
	);
};

export default Sidebar;

// onClick={(prevstate) => setShowSidebar(!prevstate)}>
// onClick={() => setShowSidebar((prevstate) => !prevstate)}>
