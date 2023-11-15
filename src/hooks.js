import useState from "react";
import axios from "axios";

function useFlip(initialFlpState = true) {
    const [isFlipped, setFlipped] = useState(initialFlpState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}

function useAxios(baseUrl) {
  
    const addResponseData = async (formatter = data => data, endUrl = "") => {
      const response = await axios.get(`${baseUrl}${endUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
    };
  
    const clearResponses = () => setResponses([]);
  
    return [responses, addResponseData, clearResponses];
  }

  export { useAxios, useFlip };