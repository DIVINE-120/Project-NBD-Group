import axios from "axios";

class Userservices{
static  async getAlluser(){
try{
    const response = await axios.get ("http://localhost:9000/user");
    console.log ("response from Users:",response)
    return response.data

}catch (e){
    console.log("Error :", e);
}


}

static async createUser(data) {
    try{
        const response = await axios.post(
            "http://localhost:9000/create",
            data,
            {
                headers: {
                    "content-Type":"application/json",
                },
            }
        );
        console.log("response of createUser:", response.data);
        return response.data;
    } catch(error){
        console.log("failed !",Error);
    }
    }
}
export default Userservices;