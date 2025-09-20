export async function submitQuery(formData){
    try{
        const response= await fetch("/api/sendEmail",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        })

        if(!response.ok){
            throw new Error('Failed to submit query');
        }

        return await response.json();
    }
    catch(error){
        console.error("Submission error: ", error.message);
        throw error;
    }
}