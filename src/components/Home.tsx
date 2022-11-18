import { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_TOPICS = gql`
  query { 
    topic(name:"javascript"){
      id,
      name,
      repositories(first: 10) {
        nodes{
          name
        }
      }
    }
  }
`

const Home = () => {
  const [topic, setTopic] = useState("")
  const token = "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"
  const { loading, error, data } = useQuery(GET_TOPICS);
  const handleCheck = () => {
    console.log(data);
  }
  return (
    <div className='flex'>
      <div>
        <nav>
          <form>
            <ul>
              <li><input type="checkbox" name="js" onClick={() => handleCheck()} />Javascript</li>
            </ul>
          </form>
        </nav>
      </div>
    </div>
  )
}

export default Home