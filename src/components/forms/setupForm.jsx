import { useState } from "react"
import { Box, Stack, Fieldset, Input, Flex, HStack, Grid, GridItem, Text, Button, Textarea } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Tooltip } from "@/components/ui/tooltip";
import { Radio, RadioGroup } from "@/components/ui/radio"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import { AiFillDelete } from "react-icons/ai";


const SetupForm = ({ formData, setFormData, moveStep }) => {
    const handleChange = (value, name, section) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value,
            },
        }));
    };

    return (
        <Box height={'100vh'} margin={'5%'}> 
            <Fieldset.Root size="lg">
                <Flex height={'1.5rem'}>
                    <Flex width={'100%'}>
                        <Fieldset.Legend fontSize={'lg'}>Make a Decision</Fieldset.Legend>
                    </Flex>
                    <Flex width={'100%'} justify="flex-end">
                        <Tooltip content="Delete this decision">
                            <AiFillDelete color="red" />
                        </Tooltip>
                    </Flex>
                </Flex>
                <Fieldset.Content>
                    {/* <Text></Text>
                    <Field label="Choose a prediction type">
                        <NativeSelectRoot>
                            <NativeSelectField
                                value={formData.setup.type}
                                onChange={(e) => handleChange(e, 'setup')}
                                name="type"
                                items={[
                                    "Bayesian Inference",
                                    "AI",
                                    "Other"
                                ]}
                            />
                        </NativeSelectRoot>
                    </Field> */}
                    <Field label='Title'>
                        <Input
                            name="title"
                            type="text"
                            value={formData.setup.title}
                            onChange={(e) => handleChange(e.target.value, 'title', 'setup')}
                        />
                    </Field>
                    <Text>Add a Tag</Text>
                    {/* <Field label="Choose a problem type">
                        <NativeSelectRoot>
                            <NativeSelectField
                                value={formData.setup.type}
                                onChange={(e) => handleChange(e, 'setup')}
                                name="type"
                                items={[
                                    "Bayesian Inference",
                                    "AI",
                                    "Other"
                                ]}
                            />
                        </NativeSelectRoot>
                    </Field> */}
                    <Field label='Briefly describe the problem you are trying to solve'>
                        <Textarea
                            name="problem"
                            type="text"
                            value={formData.setup.problem}
                            onChange={(e) => handleChange(e.target.value, 'problem', 'setup')}
                        />
                    </Field>
                    {/* <Field label='Do you have information (facts, statistics, details, etc.) to help formulate a decision?'>
                        <RadioGroup 
                            name="data"
                            value={formData.setup.data}
                            onValueChange={(e) => handleChange(e.value, 'data', 'setup')}
                        >
                        <HStack gap="6">
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                        </HStack>
                        </RadioGroup>
                    </Field> */}
                    <Field label="What kind of decision do you want to make?">
                        <NativeSelectRoot>
                            <NativeSelectField
                                value={formData.setup.type || ''}
                                onChange={(e) => handleChange(e.target.value, 'choice_type', 'setup')}
                                name="choice_type"
                                items={[
                                    "Optimal - The best decision possible based on your needs",
                                    "Cost Effective - A decision that yields the best results for the lowest cost"
                                ]}
                            />
                        </NativeSelectRoot>
                    </Field>
                </Fieldset.Content>
                <Fieldset.ErrorText>
                    Some fields are invalid. Please check them.
                </Fieldset.ErrorText>
            </Fieldset.Root>
            <Button
                mt={6}
                onClick={() => moveStep('GATHER')}
            >
                Next Step
            </Button>
        </Box>
    )
}

export default SetupForm