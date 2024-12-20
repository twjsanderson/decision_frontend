import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/react-router'

import Hero from "@/containers/hero"
import HowItWorks from "@/containers/howItWorks"
import Testimonials from "@/containers/testimonials"
import Application from './Application';


const Home = ( ) => {
    return (
        <>
            <SignedOut>
                <>
                    <Hero />
                    <HowItWorks />
                    <Testimonials />
                </>
            </SignedOut>
            <SignedIn>
                <Application />
            </SignedIn>
        </>
    )
}

export default Home