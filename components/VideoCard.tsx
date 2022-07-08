import React, { useState, useEffect, useRef } from "react";
import { Video } from "../types";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/Link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from "react-icons/bs";
import { GoVerified } from "react-icons/go";


interface IProps {
    post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
    const [isVideoHover, setIsVideoHover] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const videoRef = useRef<HTMLVideoElement>(null)

    const onVideoPressed = () => {
        if (playing) {
            videoRef?.current?.pause();
            setPlaying(false);
        } else {
            videoRef?.current?.play();
            setPlaying(true);
        }
    }

    const onMutePressed = () => {
        if (isMuted) {
            setIsMuted(false);
        } else {
            setIsMuted(true);
        }
    }

    return (
        <div className="flex flex-col border-b-2 border-gray-200 pb-6">
            <div className="">
                <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
                    <div className="md:w-16 md:h-16 w-10 h-10">
                        <Link href="/">
                            <>
                                <Image width={62} height={62} className="rounded-full" src={post.postedBy.image} alt="posted by photo" layout="responsive" />
                            </>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/">
                            <div className="flex items-center gap-2">
                                <p className="flex items-center gap-2 md:text-md font-bold text-primary">
                                    {post.postedBy.name + ' ' + post.postedBy.secondName + ' '}
                                </p>
                                <GoVerified className="text-blue-400 text-md" />
                                <p className="font-medium text-xs text-gray-500 hidden md:block">@{post.postedBy.userName}</p>

                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="lg:ml-20 flex gap-4">
                <div className="rounded-3xl relative" onMouseEnter={() => { setIsVideoHover(true) }} onMouseLeave={() => { setIsVideoHover(false) }}>
                    <Link href="/">
                        <video
                            ref={videoRef}
                            onClick={onVideoPressed}
                            muted={isMuted}
                            loop
                            className="lg:w[60px] h-[300px] md:h-[400px] lg:h-[530px] w-[300px] cursor-pointer bg-gray-300 relative"
                            src={post.video.asset.url}
                        >
                        </video>

                    </Link>
                    {isVideoHover && (
                        <div className="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 justify-between w-full z-10 p-3">

                            {playing ?

                                (<button onClick={onVideoPressed}><BsFillPauseFill className="text-black text-2xl lg:text-4xl" /></button>)
                                :

                                (<button onClick={onVideoPressed}><BsFillPlayFill className="text-black text-2xl lg:text-4xl" /></button>)}

                            {isMuted ?
                                //fix volume
                                (<button onClick={onMutePressed}><HiVolumeUp className="text-black text-2xl lg:text-4xl" /></button>)
                                :

                                (<button onClick={onMutePressed}><HiVolumeOff className="text-black text-2xl lg:text-4xl" /></button>)}
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
