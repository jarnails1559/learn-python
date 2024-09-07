import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

// Enhanced mock function to include subtopics
function searchTopics(query: string) {
  const allTopics = [
    {
      title: 'Input and Output',
      description: 'Learn about basic input and output operations in Python',
      url: '/input-output',
      subtopics: [
        { title: 'Print Function', url: '/input-output#print-function' },
        { title: 'Input Function', url: '/input-output#input-function' },
        { title: 'Formatting Output', url: '/input-output#formatting-output' },
      ]
    },
    {
      title: 'Data Types',
      description: 'Explore various data types in Python',
      url: '/data-types',
      subtopics: [
        { title: 'Numeric Types', url: '/data-types#numeric-types' },
        { title: 'Sequence Types', url: '/data-types#sequence-types' },
        { title: 'Text Type', url: '/data-types#text-type' },
        { title: 'Mapping Type', url: '/data-types#mapping-type' },
        { title: 'Set Types', url: '/data-types#set-types' },
        { title: 'Boolean Type', url: '/data-types#boolean-type' },
      ]
    },
    {
      title: 'Variables',
      description: 'Learn about data storage in Python',
      url: '/variables',
      subtopics: [
        { title: 'Variable Types', url: '/variables#types' },
        { title: 'Variable Scope', url: '/variables#scope' },
        { title: 'Variable Assignment', url: '/variables#assignment' },
      ]
    },
    {
      title: 'Operators',
      description: 'Explore various operators in Python',
      url: '/operators',
      subtopics: [
        { title: 'Arithmetic Operators', url: '/operators#arithmetic' },
        { title: 'Comparison Operators', url: '/operators#comparison' },
        { title: 'Logical Operators', url: '/operators#logical' },
      ]
    },
    {
      title: 'Keywords',
      description: 'Understand Python keywords',
      url: '/keywords',
      subtopics: [
        { title: 'Control Flow Keywords', url: '/keywords#control-flow' },
        { title: 'Function Keywords', url: '/keywords#functions' },
        { title: 'Exception Handling Keywords', url: '/keywords#exceptions' },
      ]
    },
    {
      title: 'Control Statements',
      description: 'Master program flow control in Python',
      url: '/control-statements',
      subtopics: [
        { title: 'If Statements', url: '/control-statements#if' },
        { title: 'For Loops', url: '/control-statements#for' },
        { title: 'While Loops', url: '/control-statements#while' },
      ]
    },
  ]

  return allTopics.flatMap(topic => {
    const topicMatches = topic.title.toLowerCase().includes(query.toLowerCase()) ||
                         topic.description.toLowerCase().includes(query.toLowerCase())
    
    const matchingSubtopics = topic.subtopics.filter(subtopic =>
      subtopic.title.toLowerCase().includes(query.toLowerCase())
    )

    if (topicMatches) {
      return [{
        ...topic,
        matchingSubtopics: matchingSubtopics
      }]
    } else if (matchingSubtopics.length > 0) {
      return [{
        ...topic,
        matchingSubtopics: matchingSubtopics
      }]
    }
    return []
  })
}

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || ''
  const results = searchTopics(query)

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Search Results</h1>
      <p className="text-xl">Showing results for: {query}</p>
      
      {results.length === 0 ? (
        <p>No results found. Try a different search term.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {results.map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <Link href={result.url} className="hover:underline">{result.title}</Link>
                </CardTitle>
                <CardDescription>{result.description}</CardDescription>
              </CardHeader>
              {result.matchingSubtopics && result.matchingSubtopics.length > 0 && (
                <CardContent>
                  <h4 className="font-semibold mb-2">Related Subtopics:</h4>
                  <ul className="list-disc pl-5">
                    {result.matchingSubtopics.map((subtopic, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subtopic.url} className="hover:underline">
                          {subtopic.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}