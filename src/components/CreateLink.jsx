import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
function CreateLink() {
    const [formState,setFormState]=useState({
        description:"",
        url:""
    })
    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
          description: formState.description,
          url: formState.url
        },
        onCompleted:()=>history.push("/")
      });
      const history=useHistory();
    return (
        <div>
            <form onSubmit={(e)=>{
                 e.preventDefault();
                 console.log("state",formState)
                 createLink();
                 }}>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={formState.description}
                        onChange={(e)=>{ 
                            setFormState({
                                ...formState,
                                description:e.target.value
                            })
                        }}
                        type="text"
                        placeholder="A Description for link"
                    />
                    <input
                        className="mb2"
                        value={formState.url}
                        onChange={(e)=>{ 
                            setFormState({
                                ...formState,
                                url:e.target.value
                            })
                        }}
                        type="text"
                        placeholder="The URL for the link"
                    />
                    <button className="mb2" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateLink
