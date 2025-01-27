import { Box, Fieldset, Button, Textarea, Flex } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import {
    NativeSelectField,
    NativeSelectRoot,
  } from "@/components/ui/native-select"
import { useEffect } from "react"

const StartForm = ({ formData, setFormData, moveStep }) => {
    // useEffect(() => {
        
    // }, [])

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
        <Box height={'100%'} margin={'5%'}> 
            <Fieldset.Root size="lg">'
                <Field label="What kind of decision do you want to make?">
                    <NativeSelectRoot>
                        <NativeSelectField
                            value={formData.setup.type || ''}
                            onChange={(e) => handleChange(e.target.value, 'choice_type', 'setup')}
                            name="choice_type"
                            items={[
                                "Optimal - The best decision possible based on your needs",
                                "Cost Effective - A decision that yields the best results for the lowest cost",
                                "thing"
                            ]}
                        />
                    </NativeSelectRoot>
                </Field>
            </Fieldset.Root>
            <Button
                mt={6}
                mr={6}
                onClick={() => moveStep('START')}
            >
                Back
            </Button>
            <Button
                mt={6}
                mr={6}
                onClick={() => moveStep('SETUP')}
            >
                Next
            </Button>
        </Box>
    )
}

export default StartForm