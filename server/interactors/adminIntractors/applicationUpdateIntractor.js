import updateApplication from "../../persistence/adminLayer/updatePersistance.js"

const applicationIntractor = async (id,approved)=>{
console.log(id);
    try {
       const applicationUpdate =  updateApplication(id,approved)
    } catch (error) {
        
    }


}
export default applicationIntractor