import { useRouter } from "next/router";
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ChatIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    
        return (
        <header className="shadow-md border-b bg-white sticky top-0 z-50 px-2">
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        layout="fill"
                        src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" //add image here
                        objectFit="contain"
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        layout="fill"
                        src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" //add image here
                        objectFit="contain"
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                        </div>
                        <input
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
                    {session?.user ? (
                        <>
                < div className="flex items-center justify-end space-x-4">
                    <PlusCircleIcon
                        className="mobileHeaderBtn h-7 hidden-lg"
                        onClick={() => setOpen(true)}
                                        />
                                <PaperAirplaneIcon className="navBtn group-hover:rotate-45" />
                            <div className="relative navBtn group">
                                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                                    69
                                </div>
                            </div>
                            <PlusCircleIcon
                                className="navBtn"
                                onClick={() => setOpen(true)}
                                />
                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img
                                src={session?.user?.image}
                                alt="user-avatar"
                                className="h-10 w-10 rounded-full cursor-pointer hidden md:inline-flex"
                            />
							<button
								className="md:hidden text-blue-400 text-sm font-semibold"
								onClick={signOut}
							>
								Sign Out
							</button>
                            </div>
                        </>
                    ) : (
                        <button
							onClick={signIn}
							className="text-blue-400 text-sm font-semibold"
						>
							Sign In
						</button>
                        
                    )}
            </div>
        </header>
    );
};

export default Header;