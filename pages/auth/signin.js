
import {getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from "../../components/Header";

function signIn({providers}) {
    return (
        <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
            <img className="w-80" src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"/>
            <p className="font-xs italic">
            </p>
        <div className="mt-40">

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id,{callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}

        </div>

        </div>

    </>
    )
}

export async function getServerSideProps(){
    const providers = await getProviders();

    return{
        props:{
            providers,
        }
    }
}

export default signIn;
