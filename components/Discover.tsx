import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import { topics } from "../utils/constants";

const activeTopicStyle =
	"xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]";

const topicStyle =
	"xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";

const Discover = () => {
	const [isActiveTopic, setIsActiveTopic] = useState(false);

	let router = useRouter();
	let { topic } = router.query;

	return (
		<div className='xl:border-b-2 xl:border-gray-200 pb-6'>
			<p className='hidden text-gray-500 font-semibold mt-4 m-3 xl:block'>
				Popular Topics
			</p>
			<div className='flex gap-3 flex-wrap'>

                {/* tags of genres (ex. Games, Animals and etc*/}

				{topics.map((item) => (
					<Link key={item.name} href={`/?topic=${item.name}`}>
						<div className={topic === item.name ? activeTopicStyle : topicStyle}>
							<span className='xl:mr-2 text-2xl'>{item.icon}</span>
							<span className='font-medium text-md hidden xl:block capitalize'>
								{item.name}
							</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Discover;
