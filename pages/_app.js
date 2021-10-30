import "/Users/raheemshah/Documents/Github Projects/Instagram-2.0-clone/styles/globals.css";
import {SessionProvider} from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return(

    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
  // fix this later 
  
}

export default MyApp
