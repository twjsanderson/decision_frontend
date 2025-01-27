import { useEffect, useState } from "react"
import { Box, Stack, Fieldset, Input, Flex, Grid, GridItem, Text, Button } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"

import SetupForm from "../components/forms/setupForm"
import GatherForm from "../components/forms/gatherForm"
import OptionsForm from "@/components/forms/optionsForm"
import StartForm from "@/components/forms/StartForm"

const CreateDecision = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(() => {
        const storedFormData = localStorage.getItem('formData');
        return storedFormData ? JSON.parse(storedFormData) : {
            step: 'START',
            setup: {
                title: '',
                choiceType: 'Optimal - The best decision possible based on your needs', // default 
                problem: '',
            },
            gather: {
                justification: '',
                idealOutcome: '',
                maxCost: '',
                riskTolerance: '',
                timeline: '',
            },
            options: {
                a: null,
                b: null,
            },
            decision: {
                result: ''
            }
        }
    });

    useEffect(() => {
        // Save to localStorage whenever formData changes
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);


    // function calculateCBA(options) {
    //     return options.map(option => {
    //         const totalCosts = option.costs.reduce((sum, cost) => sum + cost.amount, 0);
    //         const totalBenefits = option.benefits.reduce((sum, benefit) => sum + benefit.amount, 0);
    
    //         return {
    //             ...option,
    //             netValue: totalBenefits - totalCosts,
    //             benefitCostRatio: totalBenefits / totalCosts
    //         };
    //     });
    // }
    

    // function calculatePareto(factors) {
    //     const totalImpact = factors.reduce((sum, factor) => sum + factor.impact, 0);
    //     let cumulative = 0;
    
    //     return factors.map((factor) => {
    //         const percentage = (factor.impact / totalImpact) * 100;
    //         cumulative += percentage;
    //         return { ...factor, percentage, cumulative };
    //     });
    // }
    
   
    const moveStep = (step) => {
        setFormData(prev => ({ ...prev, ['step']: step }));
    };
    
    console.log(formData)
    console.log(formData.step)
    
    const handleSubmit = () => {
        console.log("Form Data:", formData);
    };

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (formData.step === 'START') {
        return <StartForm
            formData={formData}
            setFormData={setFormData}
            moveStep={moveStep}
        />
    }
    

    if (formData.step === 'SETUP') {
        return <SetupForm 
            formData={formData}
            setFormData={setFormData}
            moveStep={moveStep}
        />
    }

    if (formData.step === 'GATHER') {
        return <GatherForm
            formData={formData}
            setFormData={setFormData}
            moveStep={moveStep}
        />
    }

    if (formData.step === 'OPTIONS') {
        return <OptionsForm
            formData={formData}
            setFormData={setFormData}
            moveStep={moveStep}
        />
    }
    


    // return (
    //     <Box height={'100%'}>
    //         <Stack direction={'row'}>
    //             <Box margin={'5%'} width='30%'> 
    //                 <Fieldset.Root size="lg">
    //                     <Fieldset.Legend fontSize={'lg'}>Make A Prediction</Fieldset.Legend>
    //                     <Fieldset.Content>
    //                         <Text>Prior: This is your initial belief or estimate of how likely the event is, before you have any new evidence.</Text>
    //                         <Field label="Prior Format">
    //                             <NativeSelectRoot>
    //                                 <NativeSelectField
    //                                     onChange={handleChange}
    //                                     name="priorFormat"
    //                                     items={[
    //                                         "Percentage",
    //                                         "Frequency",
    //                                         "Ratio"
    //                                     ]}
    //                                 />
    //                             </NativeSelectRoot>
    //                         </Field>
    //                         <Field label={`Prior ${formData.priorFormat}`}>
    //                             <Input
    //                                 name="prior"
    //                                 type="number"
    //                                 value={formData.prior} // Default empty string
    //                                 onChange={handleChange} // Track input change
    //                             />
    //                         </Field>
    //                     </Fieldset.Content>
    //                     <Fieldset.ErrorText>
    //                         Some fields are invalid. Please check them.
    //                     </Fieldset.ErrorText>
    //                 </Fieldset.Root>
    //                 <Button
    //                     mt={6}
    //                     colorScheme="blue"
    //                     onClick={handleSubmit} // Call submit handler
    //                 >
    //                     Submit
    //                 </Button>
    //             </Box>
    //             <Box margin={'5%'} width={'60%'}>
    //                 <Text>TITLE and INFO</Text>
    //                 <Grid
    //                     h="300px"
    //                     templateColumns="1fr 3fr"
    //                 >
    //                     <GridItem bg='tomato'>
    //                         <Box>
    //                             Posterior Probability P(H|E)
    //                         </Box>
    //                     </GridItem>
    //                     <GridItem bg=''>
    //                         <Grid templateRows='1fr 1fr' height={'100%'}>
    //                             <GridItem bg='blue'>
    //                                 <Grid templateColumns={'1fr 1fr'} height={'100%'}>
    //                                     <GridItem bg='red'>
    //                                         <Box>
    //                                             Likelihood P(E|H)
    //                                         </Box>
    //                                     </GridItem>
    //                                     <GridItem bg='orange'>
    //                                         <Box>
    //                                             Prior P(H)
    //                                         </Box>
    //                                     </GridItem>
    //                                 </Grid>
    //                             </GridItem>
    //                             <GridItem bg='purple'>
    //                                     <Box>
    //                                         Marginal Probability P(E)
    //                                     </Box>
    //                             </GridItem>
    //                         </Grid>
    //                     </GridItem>
    //                 </Grid>
    //             </Box>
    //         </Stack>
    //         <Box margin='5%'>
    //             Visualizations
    //         </Box>
    //     </Box>
    // )
}

export default CreateDecision;