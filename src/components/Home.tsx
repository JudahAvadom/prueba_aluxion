import { useLazyQuery, gql } from '@apollo/client';
import { GET_TOPICS } from '../graphql/Queries';
import Load from './Load';

const items = [
  {
    name: "Android",
    query: "topic:android sort:updated-desc"
  },
  {
    name: "Angular",
    query: "topic:angular sort:updated-desc"
  },
  {
    name: "C++",
    query: "topic:cpp sort:updated-desc"
  },
  {
    name: "CSS",
    query: "topic:css sort:updated-desc"
  },
  {
    name: "Flutter",
    query: "topic:flutter sort:updated-desc"
  },
  {
    name: "HTML",
    query: "topic:html sort:updated-desc"
  },
  {
    name: "Java",
    query: "topic:java sort:updated-desc"
  },
  {
    name: "Javascript",
    query: "topic:javascript sort:updated-desc"
  },
  {
    name: "Kotlin",
    query: "topic:kotlin sort:updated-desc"
  },
  {
    name: "React",
    query: "topic:react sort:updated-desc"
  },
  {
    name: "Typescript",
    query: "topic:typescript sort:updated-desc"
  },
  {
    name: "Vue",
    query: "topic:vue sort:updated-desc"
  }
]

const Home = () => {
  const [getTopics, { loading, data }] = useLazyQuery(GET_TOPICS);
  const token = "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"
  if (data) {
    console.log(data.search.nodes);
  }
  return (
    <div className='flex'>
      <div className='flex-[20%]'>
        <nav>
          <form>
            <ul>
              {
                items.map((e, key) => (
                  <li key={key}>
                    <input
                      type="radio"
                      name="topic"
                      value={e.name}
                      className="mx-1"
                      onChange={() => getTopics({ variables: { topic: e.query } })}
                    />{e.name}
                  </li>
                ))
              }
            </ul>
          </form>
        </nav>
      </div>
      <div className='flex-[80%]'>
        {data ?
          <div>
            {
              data.search.nodes.map((e : any, key : any) => (
                <div key={key} className="bg-stone-200 my-4 p-2 rounded-lg shadow-lg">
                  <span className='text-xl font-semibold'>
                    <a href={`https://github.com/${e.nameWithOwner}`} target="_blank" className='cursor-pointer hover:text-blue-500'>{e.name}</a>
                  </span>
                  <p>{e.description}</p>
                  <p className='text-sm font-thin'>Created at {e.createdAt}</p>
                </div>
              ))
            }
          </div> :
          <></>
        }
        {loading ?
          <>
            <Load />
            <Load />
            <Load />
            <Load />
          </>
          : <></>
        }
      </div>
    </div>
  )
}

export default Home