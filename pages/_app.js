import "/Users/raheemshah/Documents/Github Projects/Instagram-2.0-clone/styles/globals.css";
import {SessionProvider} from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return(

    <SessionProvider session={session}>
    
    <Component {...pageProps} />
    </SessionProvider>
  )
  
  
}

export default MyApp
