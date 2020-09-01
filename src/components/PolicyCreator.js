import React, {useEffect,useState} from "react"
import useFetch from "../hooks/useFetch"
import UpdatePolicies from './UpdatePolicies'

function PolicyCreator({formData,handleChange}) {

    const [loading,error,data,fetchData] = useFetch('/policies/create','POST')



    const [policyDropdown, setPolicyDropdown] = useState(false)
    const [finalizedPolicies,setFinalizedPolicies] = useState(false)

    const addPolicy = () => {
        console.log('push another input into the array of policy inputs, with a name of `policy${idx}`')
    }

    const finalizePolicies = () => {
        setFinalizedPolicies(true)
        console.log(formData.policyTitle1)
        fetchData(JSON.stringify({title:formData.policyTitle1,description:formData.policyDescription1}))
    }

    const showPolicyDropdown = () => {
        setPolicyDropdown(!policyDropdown)
        console.log('push dropdown input into the array of policy inputs, with a name of `policy${idx}`')
    }

    return (
        <div>
            <legend className="registertext">Policies Supporting (?)</legend>
            
            {finalizedPolicies ? 
                <div>
                    <h4>{formData.policyTitle1}</h4>
                    <p>{formData.policyDescription1}</p>
                    <h4>{formData.policyTitle2}</h4>
                    <p>{formData.policyDescription2}</p>
                    <h4>{formData.policyTitle3}</h4>
                    <p>{formData.policyDescription3}</p>
                </div>
                :
                <div>
                    <div className="input-wrapper">
                        <input type="text" name="policyTitle1" placeholder="Title of Policy"></input>
                        <input type="text" name="policyDescription1" placeholder="Description of Policy"></input>
                    </div>
                    <div className="input-wrapper">
                    <input type="text" name="policyTitle2" placeholder="Title of Policy"></input>
                    <input type="text" name="policyDescription2" placeholder="Description of Policy"></input>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="policyTitle3" placeholder="Title of Policy"></input>
                        <input type="text" name="policyDescription3" placeholder="Description of Policy"></input>
                    </div>
                </div>
                }
            {/* <button onClick={addPolicy}>Add Another Policy</button> */}
            {finalizedPolicies ? <UpdatePolicies policiesFinal={finalizedPolicies} /> : <button onClick={finalizePolicies}>Set Policies</button>}
        </div>
    )
}

export default PolicyCreator

/* TO PROVIDE DROPDOWN POLICY OPTIONS
<select id="dropdown" name="policy1" className="input-1" onChange={handleChange}>
    <option value="">Action 1:</option>
    <option value="blm">Black Lives Matter</option>
    <option value="election">Upcoming Election</option>
    <option value="climate">Climate Change</option>
    <option value="youth">Youth Development Services</option>
</select>

<button onClick={showPolicyDropdown}>{policyDropdown ? "Write a new policy" :  "Pick from pre-written policies" } </button>
*/