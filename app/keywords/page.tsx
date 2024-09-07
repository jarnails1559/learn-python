import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'
import VisualExample from '@/components/VisualExample'

const subtopics = [
  { title: 'What are Keywords?', url: '#what-are-keywords' },
  { title: 'Common Keywords', url: '#common-keywords' },
  { title: 'Practice Quiz', url: '#practice-quiz' },
]

export default function KeywordsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Python Keywords</h1>
      
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription>
          Python has 35 keywords as of Python 3.9. These keywords cannot be used as variable names.
        </AlertDescription>
      </Alert>

      <section id="what-are-keywords">
        <h2 className="text-3xl font-bold mb-4">What are Keywords?</h2>
        <p className="text-lg mb-4">
          Keywords are the reserved words in Python. We cannot use a keyword as a variable name, function name or any other identifier. They are used to define the syntax and structure of the Python language.
        </p>
        <VisualExample
          title="Python Keywords"
          description="A visual representation of Python keywords grouped by their general purpose"
          visual={`
            graph TD
              A[Python Keywords] --> B[Control Flow]
              A --> C[Iteration]
              A --> D[Function and Class Definition]
              A --> E[Boolean Operations]
              A --> F[Exception Handling]
              A --> G[Import and Scope]
              B --> H[if, else, elif, break, continue, pass]
              C --> I[for, while, in]
              D --> J[def, class, return, lambda]
              E --> K[and, or, not, is, True, False, None]
              F --> L[try, except, finally, raise, assert]
              G --> M[import, from, as, global, nonlocal]
          `}
        />
      </section>

      <section id="common-keywords">
        <h2 className="text-3xl font-bold mb-4">Common Keywords</h2>
        <Tabs defaultValue="control-flow">
          <TabsList>
            <TabsTrigger value="control-flow">Control Flow</TabsTrigger>
            <TabsTrigger value="functions">Functions</TabsTrigger>
            <TabsTrigger value="loops">Loops</TabsTrigger>
            <TabsTrigger value="exceptions">Exceptions</TabsTrigger>
          </TabsList>
          <TabsContent value="control-flow">
            <Card>
              <CardHeader>
                <CardTitle>Control Flow Keywords</CardTitle>
                <CardDescription>if, else, elif</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Try changing the value of x
x = 10

if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="functions">
            <Card>
              <CardHeader>
                <CardTitle>Function Keywords</CardTitle>
                <CardDescription>def, return</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`def greet(name):
    return f"Hello, {name}!"

# Try changing the name
result = greet("Alice")
print(result)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="loops">
            <Card>
              <CardHeader>
                <CardTitle>Loop Keywords</CardTitle>
                <CardDescription>for, while, break, continue</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# For loop
for i in range(5):
    if i == 2:
        continue  # Skip 2
    if i == 4:
        break  # Stop at 4
    print(i)

# While loop
count = 0
while count < 3:
    print(count)
    count += 1
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="exceptions">
            <Card>
              <CardHeader>
                <CardTitle>Exception Keywords</CardTitle>
                <CardDescription>try, except, finally, raise</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("This is always executed")

# Raising an exception
raise ValueError("This is a custom error")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="practice-quiz">
        <h2 className="text-3xl font-bold mb-4">Practice Quiz</h2>
        <Quiz
          question="Which of the following is NOT a Python keyword?"
          answers={[
            "while",
            "for",
            "loop",
            "if"
          ]}
          correctAnswer="loop"
          explanation="'loop' is not a Python keyword. The keywords used for looping in Python are 'for' and 'while'."
        />
      </section>
    </div>
  )
}

KeywordsPage.subtopics = subtopics