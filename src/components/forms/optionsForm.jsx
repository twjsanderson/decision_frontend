import { useEffect } from "react";
import apiService from "@/services/api";
import { Button } from "@chakra-ui/react";

const OptionsForm = ({ formData, setFormData, moveStep }) => {
    const { options } = formData

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if (
    //                 options?.a === null || 
    //                 options?.b === null
    //             ) {
    //                 setLoading(true)
    //                 const result = await apiService.get("/decision");
    //                 setFormData({
    //                     result, // replace state with db data
    //                     step: 'OPTIONS',
    //                 });
    //             }
    //         } catch (error) {
    //           console.error("Failed to fetch data:", error);
    //           setFormData(prev => ({ ...prev, step: 'GATHER'})) // should be to an error page
    //         } finally {
    //           setLoading(false);
    //         }
    //     };
      
    //     fetchData();
    // }, []);

    const handleSubmit = async () => {
        const payload = { key: "value" }; // Replace with actual data
        try {
          const response = await apiService.post("/submit-endpoint", payload);
          console.log("Response:", response);
        } catch (error) {
          console.error("Failed to submit data:", error);
        }
    };
    
    return (
        <>
            <h1>Options</h1>
            <Button
                mt={6}
                mr={6}
                onClick={() => moveStep('GATHER')}
            >
                Back
            </Button>
            <Button
                mt={6}
                onClick={() => moveStep('OPTIONS')}
            >
                Next Step
            </Button>
        </>
    )
}

export default OptionsForm;