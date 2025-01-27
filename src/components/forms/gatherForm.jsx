import { Box, Fieldset, Button, Textarea, Flex } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Tooltip } from "@/components/ui/tooltip";
import { AiFillDelete } from "react-icons/ai";


const GatherForm = ({ formData, setFormData, moveStep }) => {
    const handleChange = (value, name, section) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value,
            },
        }));
    };

    const handleSubmit = () => {
        try {
            console.log('fbdsjk')
        } catch (err) {
            console.log(err)
        } finally {
            moveStep('OPTIONS')
        }
    }

    return (
        <Box height={'100%'} margin={'5%'}> 
            <Fieldset.Root size="lg">
                <Flex height={'1.5rem'}>
                    <Flex width={'100%'}>
                        <Fieldset.Legend fontSize={'lg'}>Clarify Your Thoughts</Fieldset.Legend>
                    </Flex>
                    <Flex width={'100%'} justify="flex-end">
                        <Tooltip content="Delete this decision">
                            <AiFillDelete color="red" />
                        </Tooltip>
                    </Flex>
                </Flex>
                <Fieldset.Content>
                    <Field label='Provide some context on the decision you are trying to make'>
                        <Textarea
                            name="justification"
                            type="text"
                            placeholder="Details about the problem complexity, limitations, etc."
                            value={formData.gather.justification}
                            onChange={(e) => handleChange(e.target.value, 'justification', 'gather')}
                        />
                    </Field>
                    <Field label='Describe the ideal outcome your decision should produce'>
                        <Textarea
                            name="idealOutcome"
                            type="text"
                            placeholder="Briefly outline a perfect solution to your problem..."
                            value={formData.gather.idealOutcome}
                            onChange={(e) => handleChange(e.target.value, 'idealOutcome', 'gather')}
                        />
                    </Field>
                    <Field label='What is your budget to solve this problem?'>
                        <Textarea
                            name="maxCost"
                            type="text"
                            placeholder="This could be in terms of investment, cost, etc."
                            value={formData.gather.maxCost}
                            onChange={(e) => handleChange(e.target.value, 'maxCost', 'gather')}
                        />
                    </Field>
                    <Field label='What are the risks associated with making this decision?'>
                        <Textarea
                            name="riskTolerance"
                            type="text"
                            placeholder="Describe what kind of risks you can and/or cannot take to solve your problem..."
                            value={formData.gather.riskTolerance}
                            onChange={(e) => handleChange(e.target.value, 'riskTolerance', 'gather')}
                        />
                    </Field>
                    <Field label='How much time do you have to solve your problem?'>
                        <Textarea
                            name="timeline"
                            type="text"
                            placeholder="Explain your timeline for making a decision and solving your problem..."
                            value={formData.gather.timeline}
                            onChange={(e) => handleChange(e.target.value, 'timeline', 'gather')}
                        />
                    </Field>
                </Fieldset.Content>
                <Fieldset.ErrorText>
                    Some fields are invalid. Please check them.
                </Fieldset.ErrorText>
            </Fieldset.Root>
            <Button
                mt={6}
                mr={6}
                onClick={() => moveStep('SETUP')}
            >
                Back
            </Button>
            <Button
                mt={6}
                onClick={handleSubmit}
            >
                Next Step
            </Button>
        </Box>
    )
}

export default GatherForm;