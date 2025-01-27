import { useEffect, useState } from "react"
import { Box, Grid, GridItem, Tabs } from "@chakra-ui/react"
import { useUser, useAuth } from '@clerk/clerk-react';

import Predictions from "@/containers/predictions"
import CreatDecision from "@/containers/createDecision";

import { getUserHandler, setUserHandler } from "@/services/handlers"

const Application = () => {
    const [tab, setTab] = useState('generate');
    const [loading, setLoading] = useState(false);
    const { getToken } = useAuth();
    const { user, isSignedIn } = useUser();

    useEffect(() => {
        const syncUser = async () => {
            setLoading(true);
            const token = await getToken();
            const getUserResponse = await getUserHandler(user.id, token);

            if (!getUserResponse && token) {
                const authenticatedUser = {
                    id: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                }; 
                await setUserHandler(authenticatedUser, token);
            }
            setLoading(false);
        };

        if (user && isSignedIn) syncUser();

    }, [user, isSignedIn, getToken]);
    

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <Box margin='2%' height={'100%'}>
            <Grid templateColumns={'1fr 8fr'}>
                <GridItem>
                    <Box h='100%'>
                        <Tabs.Root orientation="vertical" variant="line" size='lg' defaultValue={"generate"}>
                            <Tabs.List>
                                <Tabs.Trigger onClick={() => setTab('generate')} value='generate'>Generate</Tabs.Trigger>
                                <Tabs.Trigger onClick={() => setTab('predictions')} value='predictions'>Predictions</Tabs.Trigger>
                                <Tabs.Trigger onClick={() => setTab('compare')} value='compare'>Compare</Tabs.Trigger>
                            </Tabs.List>
                        </Tabs.Root>
                    </Box>
                </GridItem>
                <GridItem>
                    {
                        tab === 'predictions' && <Predictions />
                    }
                    {
                        tab === 'generate' && <CreatDecision />
                    }
                </GridItem>
            </Grid>
        </Box>
    )
    


    
}

export default Application